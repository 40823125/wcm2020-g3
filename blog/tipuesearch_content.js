var tipuesearch = {"pages":[{"title":"About","text":"CMSimfly 內容管理網誌 課程倉儲: https://github.com/chiamingyen/cmsimfly 內容管理: https://chiamingyen.github.io/cmsimfly/ 課程投影片: https://chiamingyen.github.io/cmsimfly/reveal 課程網誌: https://chiamingyen.github.io/cmsimfly/blog","tags":"misc","url":"https://40823125.github.io/wcm2020/blog/pages/about/"},{"title":"wcm2020(ubuntu)","text":"用 Virtualbox 建立ubuntu 前面步驟為安裝設定重點為ipv4及ipv6網路設定都為自動 進入介面後，再輸入指令 設定網域 sudo vi 00-installer-config.yaml 輸入指令 網路部分設定 sudo netplan apply ping4 140.130.15.254 安裝pip3 sudo apt install net-tools sudo apt update sudo apt install python3-pip 利用pip3安裝flask flask_cors bs4 lxml markdown sudo pip3 install flask flask_cors bs4 lxml markdown 建立github資料夾 mkdir github 安裝桌面 sudo apt install xorg sudo apt install fluxbox sudo apt install lxde","tags":"Misc","url":"https://40823125.github.io/wcm2020/blog/wcm2020-2.html"},{"title":"wcm2020(ssh)","text":"建立ssh 1. 下載 Putty 工具組 從 https://www.chiark.greenend.org.uk/~sgtatham/putty/ 下載一般版, 或從 http://jakub.kotrla.net/putty/ 下載特殊的可攜版本. 2. 利用 y:\\portablegit\\bin\\sh.exe 進入 shell 命令環境後, 以 ssh-keygen -t rsa -b 4096 -C \"使用者學號\" 在 /y/home/.ssh 目錄下建立 id_rsa 與 id_rsa.pub 等 private key 與 public key 之後以 SciTE 開啟 id_rsa.pub 後, 將此 public key 的內容, 以新增添加到 Github.com 帳號下 personal settings -> SSH and GPG keys 頁面下. 3. 接下來要利用 puttygen.exe 將 id_rsa 轉為 Putty 可以解讀的 .ppk 格式, 並修改隨身系統的啟動批次檔案, 指定利用 putty 目錄下的 plink 執行 git 指令的網路代理設定. 修改啟動的 start.bat 加入下列設定: set GIT_HOME=%Disk%:\\portablegit\\bin\\ set GIT_SSH=%Disk%:\\putty\\plink.exe 4. 利用 puttygen.exe 載入第二步驟所建立的 private key, 也就是 id_rsa. 開啟 puttygen 之後, 以右下方的 load 載入 id_rsa, 成功載入後, 利用 save private key 按鈕, 將已經轉為 putty 格式的 .ppk 存檔. 此一 .ppk 檔案必須在設定 putty 中 github.com session 時, 在 Connection->SSH->Auth 項目下, 將轉檔後的 .ppk 指向 private key file for authentication 欄位. 並在 Connection->Proxy 項目下, 指定 Proxy type: HTTP, 並將 IPv6 代理主機設為 ::53 或 ::42 埠號設為 3128. 5. 之後確定 home 下的 .ssh 目錄中的 config 設定檔案為: # no proxy at home #ProxyCommand y:/PortableGit/mingw64/bin/connect.exe -H proxy.mde.nfu.edu.tw:3128 %h %p # set git_ssh=y:/putty/plink.exe with auth under putty github.com session setup ProxyCommand y:/putty/plink.exe github.com %h %p Host github.com User git Port 22 Hostname github.com # for connect.exe need openssh key format #IdentityFile \"y:\\home\\.ssh\\id_rsa_mdecourse\" # for plink.exe need rsa key format but set under putty github.com session # plink.exe do not need the following setting #IdentityFile \"y:\\home\\.ssh\\mdecourse_putty_private.ppk\" TCPKeepAlive yes IdentitiesOnly yes 6. 最後再將 wcmj2020 倉儲中 .git 目錄下的 config 檔案中的連線協定, 由 https 改為採 ssh 連線: 範例如下: [core] repositoryformatversion = 0 filemode = false bare = false logallrefupdates = true symlinks = false ignorecase = true [submodule] active = . [remote \"origin\"] #url = https://github.com/mdecourse/wcmj2020.git url = git@github.com:mdecourse/wcmj2020.git fetch = +refs/heads/*:refs/remotes/origin/* [branch \"master\"] remote = origin merge = refs/heads/master [submodule \"cmsimde\"] url = https://github.com/mdecourse/cmsimde.git 之後就可以透過近端的 .ppk private key 與 Github.com 上的 public key 對應, 無需輸入帳號密碼就可以進行 git push.","tags":"Misc","url":"https://40823125.github.io/wcm2020/blog/wcn2020-1.html"}]};