export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed] font-mono">
      <div className="max-w-4xl mx-auto px-6 py-8">
        
        {/* Hero Section */}
        <section className="mb-16 relative">
          {/* 音楽波形ビジュアル */}
          <div className="absolute inset-0 opacity-20">
            <div className="flex items-end justify-around h-full px-8">
              {[...Array(20)].map((_, i) => (
                <div 
                  key={i}
                  className="bg-[#00ff88] rounded-t animate-pulse"
                  style={{
                    height: `${Math.random() * 80 + 20}%`,
                    width: '8px',
                    animationDelay: `${i * 0.1}s`
                  }}
                />
              ))}
            </div>
          </div>
          
          <div className="terminal-border p-8 relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[#00ff88]">$</span>
              <span className="text-[#888888]">whoami --passion</span>
            </div>
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                <span className="text-[#00ff88]">カラオケにない曲を</span><br />
                <span className="text-[#ededed]">歌いたい。</span><br />
                <span className="text-[#00aaff]">だから作った。</span>
              </h1>
              <p className="text-xl text-[#888888] mb-6 font-medium">
                🎵 ニコニコメドレー × 音MAD × カラオケ = ∞
              </p>
              <div className="space-y-3 text-[#ededed] leading-relaxed">
                <p>
                  <span className="text-[#00ff88]">Problem:</span> カラオケに音MADやニコニコメドレーがない
                </p>
                <p>
                  <span className="text-[#00aaff]">Solution:</span> ないなら作ればいい
                </p>
                <p>
                  <span className="text-[#ff6b6b]">Madness:</span> クラファンで20万集めて自作PC構築
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-[#888888]">Status:</span>
                <span className="text-[#00ff88] animate-pulse">● ONLINE</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#888888]">Mode:</span>
                <span className="text-[#ff6b6b]">MADNESS_DRIVEN_DEVELOPMENT</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Project Section */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-[#00ff88]">$</span>
            <span className="text-[#888888]">cat madness_driven_development.md</span>
          </div>
          
          <div className="terminal-border p-8">
            <h2 className="text-3xl font-bold mb-6 text-[#ff6b6b]">
              🎵 The Karaoke Madness Saga
            </h2>
            
            {/* Step 1: Problem */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-[#00ff88]">
                😤 Chapter 1: The Problem That Started It All
              </h3>
              <div className="bg-[#2a0a0a] border-l-4 border-[#ff6b6b] p-4 mb-4">
                <p className="text-[#ededed] text-lg mb-2">
                  &quot;<strong>ニコニコメドレーや音MADがカラオケにない...なんで？？</strong>&quot;
                </p>
                <p className="text-[#888888] text-sm">
                  普通の人: &quot;諦めよう&quot; / 俺: &quot;ないなら作ればいい&quot;
                </p>
              </div>
            </div>

            {/* Step 2: Initial Solution */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-[#00aaff]">
                💡 Chapter 2: The Solution (YouTube + AI音源分離)
              </h3>
              <div className="code-block mb-4">
                <div className="text-[#888888] mb-2">{/* 解決策の構想 */}</div>
                <div>const solution = {`{`}</div>
                <div className="ml-4">step1: &quot;YouTube動画を取得&quot;,</div>
                <div className="ml-4">step2: &quot;DEMUCS でInst/Vocal分離&quot;,</div>
                <div className="ml-4">step3: &quot;Tone.js で再生制御&quot;,</div>
                <div className="ml-4">result: &quot;理論上は完璧&quot;</div>
                <div>{`};`}</div>
              </div>
              <p className="text-[#888888]">
                &quot;よし、これで解決だ！&quot; ← この時はまだ平和だった
              </p>
            </div>

            {/* Step 3: The Wall */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-[#ff6b6b]">
                🔥 Chapter 3: The Wall of Despair
              </h3>
              <div className="space-y-4">
                <div className="bg-[#1a0505] border border-[#ff6b6b] p-4 rounded">
                  <h4 className="font-bold text-[#ff6b6b] mb-2">🚫 敵その1: 同期地獄</h4>
                  <p className="text-[#ededed] text-sm mb-2">
                    Tone.jsには現在の再生位置を正確に取得するメソッドがない
                  </p>
                  <p className="text-[#888888] text-xs">
                    → カラオケでは映像と音声の完璧な同期が必須なのに...
                  </p>
                </div>
                <div className="bg-[#1a0505] border border-[#ff6b6b] p-4 rounded">
                  <h4 className="font-bold text-[#ff6b6b] mb-2">🚫 敵その2: 処理重すぎ問題</h4>
                  <p className="text-[#ededed] text-sm mb-2">
                    DEMUCS処理 + リアルタイム再生 = CPUが死ぬ
                  </p>
                  <p className="text-[#888888] text-xs">
                    → 普通のPCじゃ話にならない
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4: The Madness */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-[#ff6b6b]">
                🤯 Chapter 4: The Madness Begins
              </h3>
              
              {/* 4音源同期の狂気 */}
              <div className="bg-[#0a0a1a] border-2 border-[#ff6b6b] p-6 mb-6 rounded-lg">
                <h4 className="text-lg font-bold text-[#ff6b6b] mb-4">
                  🔀 狂気の4音源同期システム
                </h4>
                <div className="code-block mb-4">
                  <div className="text-[#888888] mb-2">{/* 普通の人「これはやりすぎでは...」 */}</div>
                  <div className="text-[#888888] mb-2">{/* 俺「動けばいいんだよ！」 */}</div>
                  <div className="text-[#00ff88]">masterClock.start();</div>
                  <div className="text-[#00aaff]">instTrack.start();</div>
                  <div className="text-[#ff6b6b]">vocalTrack.start();</div>
                  <div className="text-[#ffff00]">youtubePlayer.play();</div>
                </div>
                
                <div className="bg-[#111111] p-4 rounded mb-4">
                  <div className="text-center mb-3 text-[#ffff00]">📺 YouTube動画（映像のみ・無音）</div>
                  <div className="text-center mb-2 text-[#888888]">↓</div>
                  <div className="text-center mb-3 text-[#00ff88]">🎛️ Web Audio API（無音） ← マスタークロック役</div>
                  <div className="text-center mb-2 text-[#888888]">↓ 同時に制御</div>
                  <div className="flex justify-center gap-8">
                    <div className="text-center">
                      <div className="text-[#00aaff]">🎵 Inst音源</div>
                      <div className="text-xs text-[#888888]">(Tone.js)</div>
                    </div>
                    <div className="text-center">
                      <div className="text-[#ff6b6b]">🎤 Vocal音源</div>
                      <div className="text-xs text-[#888888]">(Tone.js)</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#2a0a0a] p-3 rounded">
                  <p className="text-[#ff6b6b] font-bold text-sm mb-1">なぜ狂気なのか:</p>
                  <ul className="text-[#888888] text-xs space-y-1">
                    <li>• 無音の音源をマスタークロックとして使う変態的発想</li>
                    <li>• 実質4つの再生システムを完全同期させる力技</li>
                    <li>• メモリもCPUも無駄遣いだが、<span className="text-[#00ff88]">動けばいい精神</span></li>
                  </ul>
                </div>
              </div>

              {/* クラファンの狂気 */}
              <div className="bg-[#0a1a0a] border-2 border-[#00ff88] p-6 rounded-lg">
                <h4 className="text-lg font-bold text-[#00ff88] mb-4">
                  💰 狂気のクラウドファンディング作戦
                </h4>
                <div className="space-y-3">
                  <p className="text-[#ededed]">
                    <span className="text-[#ff6b6b]">問題:</span> 処理が重すぎてPCが死ぬ
                  </p>
                  <p className="text-[#ededed]">
                    <span className="text-[#00aaff]">普通の解決策:</span> 軽量化する、諦める
                  </p>
                  <p className="text-[#ededed]">
                    <span className="text-[#00ff88]">俺の解決策:</span> <strong>クラファンで20万集めて最強PC作る</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Step 5: Victory */}
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-4 text-[#00ff88]">
                🏆 Chapter 5: Victory Through Madness
              </h3>
              <div className="bg-[#0a2a0a] border-2 border-[#00ff88] p-6 rounded-lg">
                <div className="code-block mb-4">
                  <div>const victorySpecs = {`{`}</div>
                  <div className="ml-4">cpu: &quot;AMD Ryzen 9 7950X&quot;,</div>
                  <div className="ml-4">gpu: &quot;NVIDIA RTX 4090&quot;,</div>
                  <div className="ml-4">ram: &quot;64GB DDR5&quot;,</div>
                  <div className="ml-4">approach: &quot;力技で解決&quot;</div>
                  <div>{`};`}</div>
                </div>
                <p className="text-[#00ff88] font-bold">
                  結果: 4音源完全同期 + リアルタイム処理 = <span className="text-[#ffff00]">SUCCESS!</span>
                </p>
                <p className="text-[#888888] text-sm mt-2">
                  &quot;既存ライブラリの制約を、別の技術で無理やり解決する&quot; - これがこのプロジェクトの本質
                </p>
              </div>
            </div>

            {/* Demo & Links */}
            <div className="bg-[#0a0a2a] border-2 border-[#00aaff] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-[#00aaff]">
                🎮 Show Me The Code & Demo!
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="terminal-border p-4">
                  <div className="text-[#888888] text-sm mb-2">🎬 狂気の結果を見よ</div>
                  <div className="relative w-full h-40 bg-[#111111] rounded overflow-hidden">
                    <iframe
                      src="https://www.youtube.com/embed/az5n7XAMYZe"
                      title="カラオケサイト デモ"
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <p className="text-[#888888] text-xs mt-2">
                    4音源同期 + リアルタイム処理の悪魔的実装
                  </p>
                </div>
                <div className="terminal-border p-4">
                  <div className="text-[#888888] text-sm mb-4">🔗 Links & Resources</div>
                  <div className="space-y-3">
                    <a 
                      href="https://github.com/himazintom/karaoke-site"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#00aaff] hover:text-[#00ff88] transition-colors"
                    >
                      <span>📁</span>
                      カラオケサイト Repository
                    </a>
                    <a 
                      href="https://camp-fire.jp/projects/720269/view"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#ff6b6b] hover:text-[#00ff88] transition-colors"
                    >
                      <span>🔥</span>
                      CAMPFIRE プロジェクト
                    </a>
                    <a 
                      href="https://github.com/himazintom"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#888888] hover:text-[#00ff88] transition-colors text-sm"
                    >
                      <span>👤</span>
                      GitHub Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider"></div>

        {/* Other Projects Section */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-[#00ff88]">$</span>
            <span className="text-[#888888]">ls side_hustles/ --madness-level</span>
          </div>
          
          <h2 className="text-2xl font-bold mb-6 text-[#00aaff]">
            🎮 Other Madness Projects
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="terminal-border p-6 hover:border-[#00ff88] transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">📷</span>
                <h3 className="text-lg font-semibold text-[#00aaff]">Unity Camera Game</h3>
              </div>
              <p className="text-[#ededed] text-sm mb-3">
                &quot;カメラでゲームできるじゃん！&quot;<br />
                コンピュータビジョンを使ったインタラクティブ体験
              </p>
              <div className="text-xs text-[#888888] mb-3">
                💻 Unity, C#, Computer Vision
              </div>
              <a 
                href="https://github.com/himazintom/unity-camera-game"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#00aaff] hover:text-[#00ff88] transition-colors text-xs"
              >
                <span>📁</span>
                Check it out
              </a>
            </div>
            
            <div className="terminal-border p-6 hover:border-[#ff6b6b] transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">👻</span>
                <h3 className="text-lg font-semibold text-[#00aaff]">3D Horror Game</h3>
              </div>
              <p className="text-[#ededed] text-sm mb-3">
                &quot;ホラーゲーム作りたい欲&quot;<br />
                3Dモデリングから音響まで一人で全部やった
              </p>
              <div className="text-xs text-[#888888] mb-3">
                💻 Unity, 3D Modeling, Audio Design
              </div>
              <a 
                href="https://github.com/himazintom/3d-horror-game"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#00aaff] hover:text-[#00ff88] transition-colors text-xs"
              >
                <span>📁</span>
                Scary stuff
              </a>
            </div>
            
            <div className="terminal-border p-6 hover:border-[#ffff00] transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">🕹️</span>
                <h3 className="text-lg font-semibold text-[#00aaff]">2D Action Game</h3>
              </div>
              <p className="text-[#ededed] text-sm mb-3">
                &quot;HSPって何？&quot;から始まった<br />
                クラシック2Dアクションの世界
              </p>
              <div className="text-xs text-[#888888] mb-3">
                💻 HSP, 2D Graphics, Retro Logic
              </div>
              <a 
                href="https://github.com/himazintom/2d-action-game"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#00aaff] hover:text-[#00ff88] transition-colors text-xs"
              >
                <span>📁</span>
                Retro vibes
              </a>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-[#888888] text-sm">
              共通点: &quot;<span className="text-[#00ff88]">面白そうだからやってみた</span>&quot; 精神
            </p>
          </div>
        </section>

        <div className="section-divider"></div>

        {/* About Me Section */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-[#00ff88]">$</span>
            <span className="text-[#888888]">cat ./human_behind_the_madness.json</span>
          </div>
          
          <div className="terminal-border p-8">
            <h2 className="text-2xl font-bold mb-6 text-[#00aaff]">
              🤖 The Human Behind The Madness
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="code-block">
                <div className="text-[#00ff88] mb-2">// 平日の顔</div>
                <div>{`{`}</div>
                <div className="ml-4">&quot;job&quot;: &quot;Software Engineer&quot;,</div>
                <div className="ml-4">&quot;mission&quot;: &quot;レガシー救済隊&quot;,</div>
                <div className="ml-4">&quot;weapons&quot;: [&quot;Struts&quot;, &quot;Spring&quot;, &quot;Java&quot;],</div>
                <div className="ml-4">&quot;status&quot;: &quot;古いシステムと格闘中&quot;</div>
                <div>{`}`}</div>
              </div>
              
              <div className="code-block">
                <div className="text-[#ff6b6b] mb-2">// 本性（趣味）</div>
                <div>{`{`}</div>
                <div className="ml-4">&quot;music&quot;: &quot;作曲から音響まで&quot;,</div>
                <div className="ml-4">&quot;wine&quot;: &quot;ソムリエ気取り&quot;,</div>
                <div className="ml-4">&quot;coffee&quot;: &quot;豆から拘る派&quot;,</div>
                <div className="ml-4">&quot;mode&quot;: &quot;好奇心駆動開発&quot;</div>
                <div>{`}`}</div>
              </div>
            </div>
            
            <div className="bg-[#0a1a0a] border-l-4 border-[#00ff88] p-4 rounded">
              <h3 className="text-[#00ff88] font-bold mb-2">🔥 Philosophy</h3>
              <p className="text-[#ededed] mb-2">
                &quot;<strong>個人的な問題を技術で解決する → それが誰かの役に立つ</strong>&quot;
              </p>
              <p className="text-[#888888] text-sm">
                カラオケ問題から始まって、気づいたら4音源同期システムまで作ってた。<br />
                これが自分の開発スタイル。
              </p>
            </div>
            
            <div className="mt-6 grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-[#111111] p-3 rounded">
                <div className="text-2xl mb-1">🎵</div>
                <div className="text-[#00aaff] text-sm font-bold">Music Lover</div>
                <div className="text-[#888888] text-xs">作曲・演奏・音響技術</div>
              </div>
              <div className="bg-[#111111] p-3 rounded">
                <div className="text-2xl mb-1">🍷</div>
                <div className="text-[#ff6b6b] text-sm font-bold">Wine Enthusiast</div>
                <div className="text-[#888888] text-xs">テイスティング・ペアリング</div>
              </div>
              <div className="bg-[#111111] p-3 rounded">
                <div className="text-2xl mb-1">☕</div>
                <div className="text-[#00ff88] text-sm font-bold">Coffee Geek</div>
                <div className="text-[#888888] text-xs">サードウェーブ・抽出技術</div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-[#888888] text-sm">
          <div className="section-divider"></div>
          <p>$ echo &quot;Thanks for reading my madness story!&quot;</p>
          <div className="mt-6 flex flex-col items-center gap-4">
            <div className="terminal-border p-4">
              <img 
                src="/singing_farm2.jpeg" 
                alt="Profile" 
                className="w-24 h-24 rounded-full object-cover border-2 border-[#00ff88]"
              />
            </div>
            <div className="code-block text-center">
              <div className="text-[#00ff88]">ありがとうございました</div>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
