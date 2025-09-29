import { ImageResponse } from 'next/og'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: 64,
          background: 'linear-gradient(135deg, #F9FAFB 0%, #EEF2FF 100%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 16,
              background: 'linear-gradient(90deg, #3B82F6 0%, #8B5CF6 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: 44,
            }}
          >
            💡
          </div>
          <div style={{ fontSize: 36, fontWeight: 800, color: '#0F172A' }}>GatorInnovation</div>
        </div>

        <div style={{ fontSize: 68, fontWeight: 800, color: '#0F172A', lineHeight: 1.1 }}>
          Build your MVP fast
        </div>
        <div style={{ fontSize: 28, color: '#475569', marginTop: 16 }}>
          Landing pages in 2 days • Full apps in 1 week
        </div>

        <div
          style={{
            height: 10,
            width: 360,
            marginTop: 32,
            borderRadius: 999,
            background: 'linear-gradient(90deg, #3B82F6 0%, #8B5CF6 100%)',
          }}
        />
      </div>
    ),
    { ...size }
  )
}


