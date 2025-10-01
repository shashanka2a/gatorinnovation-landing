import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 60,
          background: 'linear-gradient(135deg, #F9FAFB 0%, #EEF2FF 100%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={{ fontSize: 60, fontWeight: 800, color: '#0F172A' }}>GatorInnovation</div>
          <div style={{ fontSize: 28, color: '#475569', marginTop: 12 }}>Build your MVP fast</div>
        </div>
        <div
          style={{
            height: 120,
            width: 120,
            borderRadius: 28,
            background: 'linear-gradient(90deg, #3B82F6 0%, #8B5CF6 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: 60,
          }}
        >
          💡
        </div>
      </div>
    ),
    { ...size }
  )
}


