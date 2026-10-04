export default function About() {
    return (
      <section
        aria-labelledby="about-defusync"
        className="bg-dark-bg px-6 py-20 border-b border-white/5"
      >
        <div className="max-w-4xl mx-auto">
          <h2
            id="about-defusync"
            className="text-white text-3xl md:text-4xl font-black tracking-tight mb-6"
          >
            DEFUSYNC 是什麼？
          </h2>
  
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            DEFUSYNC 是一個台灣 Minecraft 槍戰競技伺服器，
            主打 SND 經典爆破、TDM 團隊死鬥、DUEL 1v1 與 REALISTIC
            寫實模式。玩家可以使用自訂對戰配置（Loadouts），
            體驗類 COD 的槍戰機制、團隊合作與 PVP 競技玩法。
          </p>
        </div>
      </section>
    );
  }