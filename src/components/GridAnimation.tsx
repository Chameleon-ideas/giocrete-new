"use client"

import React, { useEffect, useRef, useState, useCallback } from "react"
import { motion, useAnimate } from "framer-motion"

// --- COMPONENT PROPS ---
interface GridAnimationProps extends React.HTMLAttributes<HTMLDivElement> {
  spacing?: number
  strokeLength?: number
  strokeWidth?: number
}

/**
 * An interactive grid animation where lines dynamically point away from a user-controlled ball.
 * Adapted for Astro with manual theme detection.
 */
export function GridAnimation({
  className,
  spacing = 30,
  strokeLength = 10,
  strokeWidth = 1,
  ...props
}: GridAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [ballRef, animate] = useAnimate()
  
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  
  const animationFrameRef = useRef<number>(0)
  const isMouseOverRef = useRef(false)
  const currentBallPosition = useRef({ x: 0, y: 0 })

  // Theme Detection for Astro (data-theme attribute on <html>)
  useEffect(() => {
    const checkTheme = () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') as 'light' | 'dark' || 'light'
      setTheme(currentTheme)
    }

    checkTheme()
    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })

    return () => observer.disconnect()
  }, [])

  // Responsiveness: ResizeObserver to fill parent
  useEffect(() => {
    if (!containerRef.current) return

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect
        setDimensions({ width, height })
        
        // Initial ball position
        if (currentBallPosition.current.x === 0) {
          currentBallPosition.current = { x: width / 2, y: height / 2 }
        }
      }
    })

    resizeObserver.observe(containerRef.current)
    return () => resizeObserver.disconnect()
  }, [])

  const snapToGrid = (pointX: number, pointY: number) => {
    const nearestX = Math.round(pointX / spacing) * spacing
    const nearestY = Math.round(pointY / spacing) * spacing
    return { x: nearestX, y: nearestY }
  }

  const animateCanvas = useCallback(() => {
    if (!canvasRef.current || dimensions.width === 0) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.clearRect(0, 0, dimensions.width, dimensions.height)

    const ballX = currentBallPosition.current.x
    const ballY = currentBallPosition.current.y

    // Use context from theme or accent
    const activeColor = theme === 'dark' ? '#F5F5F0' : '#121212'

    ctx.strokeStyle = activeColor
    ctx.lineWidth = strokeWidth * 1.5
    ctx.globalAlpha = 0.6 // Much more visible

    const cols = Math.floor(dimensions.width / spacing)
    const rows = Math.floor(dimensions.height / spacing)

    for (let col = 0; col <= cols; col++) {
      for (let row = 0; row <= rows; row++) {
        const pointX = col * spacing
        const pointY = row * spacing
        const dx = ballX - pointX
        const dy = ballY - pointY
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 20) continue

        const angle = Math.atan2(dy, dx)

        ctx.beginPath()
        ctx.moveTo(pointX, pointY)
        // Draw AWAY from the ball
        ctx.lineTo(pointX - Math.cos(angle) * strokeLength, pointY - Math.sin(angle) * strokeLength)
        ctx.stroke()
      }
    }

    if (isMouseOverRef.current) {
      animationFrameRef.current = requestAnimationFrame(animateCanvas)
    }
  }, [dimensions, spacing, strokeLength, strokeWidth, theme])


  const startAnimationLoop = useCallback(() => {
    isMouseOverRef.current = true
    if (ballRef.current) ballRef.current.style.display = 'block'
    animationFrameRef.current = requestAnimationFrame(animateCanvas)
  }, [animateCanvas])

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return

    const mouseX = event.clientX - rect.left
    const mouseY = event.clientY - rect.top
    
    currentBallPosition.current = { x: mouseX, y: mouseY }
    
    if (ballRef.current) {
      ballRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
    }
  }

  const handleMouseLeave = () => {
    isMouseOverRef.current = false
    if (ballRef.current) ballRef.current.style.display = 'none'
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
    }
  }


  useEffect(() => {
    if (canvasRef.current && dimensions.width > 0) {
      requestAnimationFrame(animateCanvas)
    }
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [animateCanvas, dimensions])

  return (
    <div
      ref={containerRef}
      className={`relative cursor-none w-full h-full overflow-hidden ${className || ""}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={startAnimationLoop}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <canvas 
        ref={canvasRef} 
        width={dimensions.width} 
        height={dimensions.height} 
        className="absolute inset-0" 
      />
      <div
        ref={ballRef}
        className="absolute w-4 h-4 rounded-full pointer-events-none z-10"
        style={{
          background: "var(--clr-accent)",
          marginLeft: -8,
          marginTop: -8,
          boxShadow: "0 0 30px 10px var(--clr-accent)",
          display: "none" // Initially hidden until mouse enter
        }}
      />


    </div>
  )
}
