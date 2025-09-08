import MeteorShowerBackground from './meteorBackGround'; // 위의 컴포넌트 import

// 메인페이지 컴포넌트
const MainPage = () => {

  return (
    <MeteorShowerBackground 
      className="min-h-screen"
      meteorCount={10}
      starCount={100}
    >
      {/* 메인 컨텐츠 */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center text-white p-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-8 mb-8 shadow-2xl">
            <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300">
              ✨ 메인페이지 작업중
            </h1>
          </div>
        </div>
      </div>
    </MeteorShowerBackground>
  );
};

export default MainPage;