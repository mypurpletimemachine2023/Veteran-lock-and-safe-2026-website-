'use client'

import { useEffect, useRef } from 'react'

export function ScrollEagle() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const scrollProgressRef = useRef(0)
  const starsRef = useRef<Array<{ x: number; y: number; age: number; size: number }>>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let animationFrameId: number

    const drawEagle = (x: number, y: number, scale: number = 1) => {
      ctx!.save()
      ctx!.translate(x, y)
      ctx!.scale(scale, scale)

      // Eagle body (geometric)
      ctx!.fillStyle = '#DC2626' // Red
      ctx!.beginPath()
      ctx!.ellipse(0, 0, 20, 28, 0, 0, Math.PI * 2)
      ctx!.fill()

      // Left wing
      ctx!.fillStyle = '#1E40AF' // Blue
      ctx!.beginPath()
      ctx!.moveTo(-20, -5)
      ctx!.lineTo(-60, -30)
      ctx!.lineTo(-50, 0)
      ctx!.closePath()
      ctx!.fill()

      // Right wing
      ctx!.beginPath()
      ctx!.moveTo(20, -5)
      ctx!.lineTo(60, -30)
      ctx!.lineTo(50, 0)
      ctx!.closePath()
      ctx!.fill()

      // Head (white)
      ctx!.fillStyle = '#FFFFFF'
      ctx!.beginPath()
      ctx!.ellipse(0, -30, 12, 14, 0, 0, Math.PI * 2)
      ctx!.fill()

      // Eye
      ctx!.fillStyle = '#000000'
      ctx!.beginPath()
      ctx!.ellipse(5, -32, 3, 3, 0, 0, Math.PI * 2)
      ctx!.fill()

      // Beak (red geometric)
      ctx!.fillStyle = '#DC2626'
      ctx!.beginPath()
      ctx!.moveTo(12, -30)
      ctx!.lineTo(25, -28)
      ctx!.lineTo(12, -26)
      ctx!.closePath()
      ctx!.fill()

      // Tail feathers (white geometric)
      ctx!.fillStyle = '#FFFFFF'
      ctx!.beginPath()
      ctx!.moveTo(-8, 28)
      ctx!.lineTo(-20, 50)
      ctx!.lineTo(-5, 40)
      ctx!.closePath()
      ctx!.fill()

      ctx!.beginPath()
      ctx!.moveTo(0, 28)
      ctx!.lineTo(0, 52)
      ctx!.lineTo(8, 38)
      ctx!.closePath()
      ctx!.fill()

      ctx!.beginPath()
      ctx!.moveTo(8, 28)
      ctx!.lineTo(20, 50)
      ctx!.lineTo(5, 40)
      ctx!.closePath()
      ctx!.fill()

      ctx!.restore()
    }

    const drawStar = (x: number, y: number, size: number, opacity: number) => {
      ctx!.save()
      ctx!.globalAlpha = opacity
      ctx!.fillStyle = '#DC2626'

      ctx!.beginPath()
      for (let i = 0; i < 5; i++) {
        const angle = (i * 4 * Math.PI) / 5 - Math.PI / 2
        const radius = i % 2 === 0 ? size : size * 0.4
        const px = x + radius * Math.cos(angle)
        const py = y + radius * Math.sin(angle)
        if (i === 0) ctx!.moveTo(px, py)
        else ctx!.lineTo(px, py)
      }
      ctx!.closePath()
      ctx!.fill()
      ctx!.restore()
    }

    const animate = () => {
      ctx!.clearRect(0, 0, canvas.width, canvas.height)

      const progress = scrollProgressRef.current
      const eagleY = progress * (canvas.height * 0.8)
      const eagleX = canvas.width / 2

      // Add new stars with some randomness
      if (Math.random() > 0.7) {
        starsRef.current.push({
          x: eagleX + (Math.random() - 0.5) * 100,
          y: eagleY + (Math.random() - 0.5) * 100,
          age: 0,
          size: Math.random() * 4 + 2,
        })
      }

      // Update and draw stars
      starsRef.current = starsRef.current.filter((star) => {
        star.age += 1
        const opacity = Math.max(0, 1 - star.age / 60)
        drawStar(star.x, star.y, star.size, opacity)
        return opacity > 0
      })

      // Draw eagle
      drawEagle(eagleX, eagleY, 2)

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      scrollProgressRef.current = docHeight > 0 ? scrollTop / docHeight : 0
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}
