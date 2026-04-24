"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface HoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
}

const HoverButton = React.forwardRef<HTMLButtonElement, HoverButtonProps>(
  ({ className, children, variant = 'secondary', ...props }, ref) => {
    const buttonRef = React.useRef<HTMLButtonElement>(null)
    const [isListening, setIsListening] = React.useState(false)
    const [circles, setCircles] = React.useState<Array<{
      id: number
      x: number
      y: number
      color: string
      fadeState: "in" | "out" | null
    }>>([])
    const lastAddedRef = React.useRef(0)

    const createCircle = React.useCallback((x: number, y: number) => {
      const buttonWidth = buttonRef.current?.offsetWidth || 0
      const xPos = x / buttonWidth

      // For primary variant, we use white/light circles for contrast
      // For secondary, we use brand orange
      const startColor = variant === 'primary' ? 'rgba(255,255,255,0.4)' : 'var(--circle-start)'
      const endColor = variant === 'primary' ? 'rgba(255,255,255,0.1)' : 'var(--circle-end)'

      const color = `linear-gradient(to right, ${startColor} ${xPos * 100}%, ${endColor} ${xPos * 100
        }%)`

      setCircles((prev) => [
        ...prev,
        { id: Date.now(), x, y, color, fadeState: null },
      ])
    }, [variant])

    const handlePointerMove = React.useCallback(
      (event: React.PointerEvent<HTMLButtonElement>) => {
        if (!isListening) return

        const currentTime = Date.now()
        if (currentTime - lastAddedRef.current > 100) {
          lastAddedRef.current = currentTime
          const rect = event.currentTarget.getBoundingClientRect()
          const x = event.clientX - rect.left
          const y = event.clientY - rect.top
          createCircle(x, y)
        }
      },
      [isListening, createCircle]
    )

    const handlePointerEnter = React.useCallback(() => {
      setIsListening(true)
    }, [])

    const handlePointerLeave = React.useCallback(() => {
      setIsListening(false)
    }, [])

    React.useEffect(() => {
      circles.forEach((circle) => {
        if (!circle.fadeState) {
          setTimeout(() => {
            setCircles((prev) =>
              prev.map((c) =>
                c.id === circle.id ? { ...c, fadeState: "in" } : c
              )
            )
          }, 0)

          setTimeout(() => {
            setCircles((prev) =>
              prev.map((c) =>
                c.id === circle.id ? { ...c, fadeState: "out" } : c
              )
            )
          }, 1000)

          setTimeout(() => {
            setCircles((prev) => prev.filter((c) => c.id !== circle.id))
          }, 2200)
        }
      })
    }, [circles])

    return (
      <button
        ref={buttonRef}
        className={cn(
          "relative isolate px-8 py-3 rounded-full overflow-hidden transition-all duration-300",
          variant === 'primary'
            ? "bg-accent text-charcoal border-none font-bold shadow-lg hover:shadow-accent/40"
            : "backdrop-blur-lg bg-[rgba(233,98,33,0.05)] border border-accent/20 hover:bg-[rgba(233,98,33,0.1)]",
          "cursor-pointer leading-6 uppercase tracking-widest font-bold text-[12px]",
          className
        )}
        onPointerMove={handlePointerMove}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        {...props}
        style={{
          "--circle-start": "#E96221",
          "--circle-end": "#D15318",
        } as React.CSSProperties}
      >
        {circles.map(({ id, x, y, color, fadeState }) => (
          <div
            key={id}
            className={cn(
              "absolute w-12 h-12 -translate-x-1/2 -translate-y-1/2 rounded-full",
              "blur-xl pointer-events-none z-[-1] transition-opacity duration-300",
              fadeState === "in" && "opacity-60",
              fadeState === "out" && "opacity-0 duration-[1.2s]",
              !fadeState && "opacity-0"
            )}
            style={{
              left: x,
              top: y,
              background: color,
            }}
          />
        ))}
        <span className="relative z-10">{children}</span>
      </button>
    )
  }
)

HoverButton.displayName = "HoverButton"

export { HoverButton }
