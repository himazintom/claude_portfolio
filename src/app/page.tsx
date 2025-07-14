export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed] font-mono">
      <div className="max-w-4xl mx-auto px-6 py-8">
        
        {/* Hero Section */}
        <section className="mb-16">
          <div className="terminal-border p-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#00ff88]">$</span>
              <span className="text-[#888888]">whoami</span>
            </div>
            <div className="mb-6">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                <span className="text-[#00ff88]">Engineer</span> Portfolio
              </h1>
              <p className="text-xl text-[#888888] mb-4">
                欲しいものは自分で作るエンジニア
              </p>
              <p className="text-[#ededed] leading-relaxed">
                カラオケにない曲を歌いたいという個人的な問題から始まった技術探求。<br />
                音楽分離技術とリアルタイム処理の組み合わせで、誰もが作れる音楽体験を目指しています。
              </p>
            </div>
            <div className="flex gap-4 text-sm">
              <span className="text-[#888888]">Status:</span>
              <span className="text-[#00ff88]">Building the future</span>
            </div>
          </div>
        </section>

        {/* Main Project Section */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-[#00ff88]">$</span>
            <span className="text-[#888888]">cat main_project.md</span>
          </div>
          
          <div className="terminal-border p-8">
            <h2 className="text-2xl font-bold mb-4 text-[#00aaff]">
              # カラオケサイト開発プロジェクト
            </h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-[#00ff88]">## なぜ作ったか</h3>
              <div className="code-block mb-4">
                <div className="text-[#888888] mb-2">{/* 課題の定義 */}</div>
                <div>const problem = {`{`}</div>
                <div className="ml-4">issue: &quot;カラオケにない曲を歌いたい&quot;,</div>
                <div className="ml-4">existing_solutions: [&quot;諦める&quot;, &quot;楽器演奏&quot;, &quot;アカペラ&quot;],</div>
                <div className="ml-4">satisfaction: &quot;低い&quot;</div>
                <div>{`};`}</div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-[#00ff88]">## 技術スタック</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="code-block">
                  <div className="text-[#00ff88] font-semibold">Audio Processing</div>
                  <div>• DEMUCS (音源分離)</div>
                  <div>• Whisper (音声認識)</div>
                  <div>• Tone.js (音声処理)</div>
                </div>
                <div className="code-block">
                  <div className="text-[#00ff88] font-semibold">Integration</div>
                  <div>• YouTube API</div>
                  <div>• Real-time sync</div>
                  <div>• Web Audio API</div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-[#00ff88]">## 技術的チャレンジ</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-[#00aaff] pl-4">
                  <h4 className="font-semibold text-[#00aaff]">4音源同期問題の解決</h4>
                  <p className="text-[#888888] text-sm">
                    ボーカル、ドラム、ベース、その他の音源を遅延なく同期再生する技術的困難を解決
                  </p>
                </div>
                <div className="border-l-2 border-[#00aaff] pl-4">
                  <h4 className="font-semibold text-[#00aaff]">リアルタイム音声処理</h4>
                  <p className="text-[#888888] text-sm">
                    低遅延での音声分離とマイク入力の統合処理
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-[#00ff88]">## クラウドファンディング × 自作PC</h3>
              <div className="code-block">
                <div className="text-[#888888] mb-2">{/* 計算資源の確保 */}</div>
                <div>const hardwareSpecs = {`{`}</div>
                <div className="ml-4">funding: &quot;クラウドファンディング活用&quot;,</div>
                <div className="ml-4">cpu: &quot;AMD Ryzen 9 7950X&quot;,</div>
                <div className="ml-4">gpu: &quot;NVIDIA RTX 4090&quot;,</div>
                <div className="ml-4">purpose: &quot;DEMUCS高速処理&quot;</div>
                <div>{`};`}</div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-[#00ff88]">## デモ・リンク</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="terminal-border p-4">
                  <div className="text-[#888888] text-sm mb-2">デモ動画スペース</div>
                  <div className="bg-[#111111] h-32 rounded flex items-center justify-center text-[#888888]">
                    [Video Player Area]
                  </div>
                </div>
                <div className="terminal-border p-4">
                  <div className="text-[#888888] text-sm mb-2">ソースコード</div>
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-2 text-[#00aaff] hover:text-[#00ff88] transition-colors"
                  >
                    <span>📁</span>
                    GitHub Repository
                  </a>
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
            <span className="text-[#888888]">ls other_projects/</span>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="terminal-border p-6">
              <h3 className="text-lg font-semibold mb-2 text-[#00aaff]">Unity Camera Game</h3>
              <p className="text-[#888888] text-sm mb-3">
                カメラを活用したインタラクティブゲーム体験
              </p>
              <div className="text-xs text-[#888888]">Unity, C#, Computer Vision</div>
            </div>
            
            <div className="terminal-border p-6">
              <h3 className="text-lg font-semibold mb-2 text-[#00aaff]">3D Horror Game</h3>
              <p className="text-[#888888] text-sm mb-3">
                没入感重視の3Dホラーゲーム
              </p>
              <div className="text-xs text-[#888888]">Unity, 3D Modeling, Audio Design</div>
            </div>
            
            <div className="terminal-border p-6">
              <h3 className="text-lg font-semibold mb-2 text-[#00aaff]">2D Action Game</h3>
              <p className="text-[#888888] text-sm mb-3">
                HSPで作成したクラシック2Dアクション
              </p>
              <div className="text-xs text-[#888888]">HSP, 2D Graphics, Game Logic</div>
            </div>
          </div>
        </section>

        <div className="section-divider"></div>

        {/* About Me Section */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-[#00ff88]">$</span>
            <span className="text-[#888888]">cat about.json</span>
          </div>
          
          <div className="terminal-border p-8">
            <h2 className="text-2xl font-bold mb-6 text-[#00aaff]">About Me</h2>
            
            <div className="code-block">
              <div>{`{`}</div>
              <div className="ml-4">"current_role": {`{`}</div>
              <div className="ml-8">&quot;position&quot;: &quot;Software Engineer&quot;,</div>
              <div className="ml-8">&quot;focus&quot;: &quot;レガシーシステムマイグレーション&quot;,</div>
              <div className="ml-8">&quot;tech_stack&quot;: [&quot;Struts&quot;, &quot;Spring&quot;, &quot;Java&quot;, &quot;Modernization&quot;]</div>
              <div className="ml-4">{`},`}</div>
              <div className="ml-4">"interests": {`{`}</div>
              <div className="ml-8">&quot;music&quot;: &quot;作曲・演奏・音響技術&quot;,</div>
              <div className="ml-8">&quot;wine&quot;: &quot;テイスティング・ペアリング&quot;,</div>
              <div className="ml-8">&quot;coffee&quot;: &quot;サードウェーブ・抽出技術&quot;</div>
              <div className="ml-4">{`},`}</div>
              <div className="ml-4">&quot;philosophy&quot;: &quot;技術で個人の課題を解決し、それが社会の価値に繋がる&quot;</div>
              <div>{`}`}</div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-[#888888] text-sm">
          <div className="section-divider"></div>
          <p>$ echo &quot;ありがとうございました&quot; | cowsay</p>
          <div className="code-block inline-block mt-4 text-left">
            <pre>{`
 _________________
< ありがとうございました >
 -----------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
            `}</pre>
          </div>
        </footer>

      </div>
    </div>
  );
}
