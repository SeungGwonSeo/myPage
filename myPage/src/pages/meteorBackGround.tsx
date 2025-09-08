import React, { type ReactNode } from 'react';

// 유성 타입 정의
interface Meteor {
  id: number;
  left: number;
  animationDelay: number;
  animationDuration: number;
  size: number;
}

// MeteorShowerBackground 컴포넌트 Props 타입
interface MeteorShowerBackgroundProps {
  meteorCount?: number;
  starCount?: number;
  className?: string;
  children?: ReactNode;
}

// 유성우 배경 컴포넌트
const MeteorShowerBackground: React.FC<MeteorShowerBackgroundProps> = ({ 
  meteorCount = 15, 
  starCount = 100, 
  className = "",
  children 
}) => {
  // 유성 생성 함수
  const createMeteors = (): Meteor[] => {
    const meteors: Meteor[] = [];
    for (let i = 0; i < meteorCount; i++) {
      meteors.push({
        id: i,
        left: Math.random() * 100,
        animationDelay: Math.random() * 3,
        animationDuration: 1 + Math.random() * 2,
        size: Math.random() * 2 + 1,
      });
    }
    return meteors;
  };

  const meteors: Meteor[] = createMeteors();

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* 글래스모피즘 배경 레이어 */}
      <div className="absolute inset-0 bg-gradient-to-br bg-black"></div>
      
      {/* 배경 블러 효과 */}
      <div className="absolute inset-0 backdrop-blur-3xl bg-black/20"></div>

      {/* 별들 배경 */}
      <div className="absolute inset-0">
        {Array.from({ length: starCount }).map((_, i: number) => (
          <div
            key={`star-${i}`}
            className="absolute bg-white/60 rounded-full backdrop-blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 2}px`,
              height: `${Math.random() * 3 + 2}px`,
              animation: `twinkle ${2 + Math.random() * 3}s infinite alternate`,
              boxShadow: `0 0 ${Math.random() * 10 + 5}px rgba(255, 255, 255, 0.4), 0 0 ${Math.random() * 20 + 10}px rgba(147, 197, 253, 0.3)`,
            }}
          />
        ))}
      </div>

      {/* 유성우 */}
      {meteors.map((meteor: Meteor) => (
        <div
          key={meteor.id}
          className="absolute -top-10 meteor"
          style={{
            left: `${meteor.left}%`,
            animationDelay: `${meteor.animationDelay}s`,
            animationDuration: `${meteor.animationDuration}s`,
          }}
        >
          {/* 유성 머리 */}
          <div
            className="bg-white/80 rounded-full relative z-10 backdrop-blur-md border border-white/30"
            style={{
              width: `${meteor.size * 3}px`,
              height: `${meteor.size * 3}px`,
              boxShadow: `
                0 0 ${meteor.size * 8}px rgba(255, 255, 255, 0.6), 
                0 0 ${meteor.size * 16}px rgba(147, 197, 253, 0.4),
                inset 0 1px 0 rgba(255, 255, 255, 0.3)
              `,
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.6) 100%)',
            }}
          />
          {/* 유성 꼬리 */}
          <div
            className="absolute"
            style={{
              left: `-${meteor.size * 50}px`,
              width: `${meteor.size * 100}px`,
              height: `${meteor.size * 0.5}px`,
              background: 'linear-gradient(to left, #fff0, #ffffff)',
              transform: 'rotateZ(-140deg) translateX(50%)',
              top: `-${meteor.size * 0.75}px`
            }}
            />
          
        </div>
        
      ))}

      {/* 자식 컴포넌트 (페이지 컨텐츠) */}
      <div className="relative z-20">
        {children}
      </div>

      {/* CSS 애니메이션 스타일 */}
      <style>
        {`
          @keyframes meteor-fall {
            0% {
              transform: translateY(-100vh) translateX(-25vw) rotate(0deg);
              opacity: 0;
            }
            70% {
              opacity: 1;
            }
            100% {
              transform: translateY(100vh) translateX(25vw) rotate(0deg);
              opacity: 0;
            }
          }

          @keyframes twinkle {
            0% {
              opacity: 0.4;
              transform: scale(1);
              filter: blur(0px);
            }
            50% {
              opacity: 0.8;
              transform: scale(1.3);
              filter: blur(0.5px);
            }
            100% {
              opacity: 0.6;
              transform: scale(1.1);
              filter: blur(0px);
            }
          }

          .meteor {
            animation: meteor-fall linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default MeteorShowerBackground;
export type { MeteorShowerBackgroundProps, Meteor };