const exampleResponses = {
  "YouTube Downloader": {
    status: "error",
    message: "Maaf, endpoint ini sedang error."
  },
  "Twitter Downloader": {
    status: "200",
    source: "https://x.com/ytgnoob/status/974637241837355009",
    download_link: "https://dl.snapcdn.app..."
  },
  "Instagram Downloader": {
    status: "error",
    message: "Maaf, endpoint ini sedang error."
  },
  "Facebook Downloader": {
    status: "200",
    source: "https://www.facebook.com/reel/633313599644588?mibextid=rS40aB7S9Ucbxw6v",
    download_link: "https://video-dfw5-2.xx.fbcdn.net..."
  },
  "TikTok Downloader": {
    status: "200",
    source: "https://vt.tiktok.com/ZShRPJfVr/",
    download_links: [
      {
        quality: "HD",
        format: "Unknown",
        url: "https://v16m-default.tiktokcdn.com..."
      }]
  },
  "GitHub Cloning": {
    status: "true",
    repository: "Kwkwkwjwowj/rest-api-all",
    download_url: "https://api.github.com/repos/Kwkwkwjwowj/rest-api-all/zipball",
    filename: "Kwkwkwjwowj-rest-api-all-6221e15.zip"
  },
  "Spotify Downloader": {
status: "true",
    result: {
      title: "Dernière danse",
      artist: "Indila",
      duration_ms: "197142",
      image: "https://i.scdn.co...",
      download: "https://api.fabdl.com/spotify/download-mp3..."
    }
  },
  "Search Groups": {
    status: "200",
    result: [
      {
        title: "🔥𝙍𝙞𝙯-𝙞𝙦 𝙈𝙖𝙧𝙠𝙚𝙩𝙥𝙡𝙖𝙘𝙚🔥",
        thumb: "https://pps.whatsapp.net/v...",
        link: "https://chat.whatsapp.com..."
      }]
  },
  "Random Meme": {
      title: "1cak News",
      imgUrl: "https://1cak.com/posts..."
  },
  "TikTok Search": {
    status: "200",
    title: "windah old💀#windahbasudara",
    video_url: "https://v16m.tiktokcdn.com...",
  },
  "YouTube Search": {
    status: "200",
    result: [
      {
      title: "Kisah Seorang Penyendiri di Jepang - BrokenLore Don't Watch Indonesia",
      author: "MiawAug",
      thumbnail: "https://i.ytimg.com/vi/ac53K1GYlBE/hq720.jpg",
      url: "https://youtube.com/watch?v=ac53K1GYlBE",
      duration: "1:05:02",
      views: "61779"
    }
    ]
  },
  "NPM Search": {
    status: "200",
    result: [
      {
      name: "axios",
      version: "1.9.0",
      description: "Promise based HTTP client for the browser and node.js",
      link: "https://www.npmjs.com/package/axios"
    }
    ]
  },
  "Google Search": {
    status: "200",
    results: [
      {
      title: "MiawAug",
      link: "https://www.youtube.com/channel/UC3J4Q1grz46bdJ7NJLd4DGw",
      snippet: "Popular videos · Gw Udah Siap ke Basement - Hello Neighbor Indonesia (Act 3 #3) · PPAP - Indonesia Cover BY MIAWAUG · Ending Helikopter / Helicopter - Granny ...",
    }
    ]
  },
  "DuckDuckGo Search": {
    status: "error",
    message: "Maaf, endpoint ini sedang error."
  },
  "Pinterest": {
    status: "200",
    results: [
      {
      upload_by: "itssunnyvale",
      caption: "windah senyum Roblox",
      image: "https://i.pinimg.com/originals/38/e1/e7/38e1e7671c6db8842ce55c44a1e8c3a0.jpg",
      source: "https://id.pinterest.com/pin/53198839342371176"
    }
    ]
  },
  "Spotify Search": {
    status: "true",
    result: [
      {
      title: "Dernière danse",
      artist: "Indila",
      duration_ms: "197142",
      link: "https://open.spotify.com/track/5fIZ683j2xPeLAXfHeWKEG",
      image: "https://i.scdn.co/image/ab67616d0000b273d691a8f53f6b487ecbe27cbf"
    }
    ]
  },
  "Genshin Stalk": {
    status: "200",
  uid: "888783721",
  detail_url: "https://enka.network/u/888783721",
  screenshot: "https://mini.s-shot.ru/990x810/PNG/975/Z100/?https://enka.network/u/888783721/",
  info: {
    nickname: "BloxBotz",
    level: "57",
    worldLevel: "8",
    achievement: "632",
    nameCardId: "210219",
    spiralAbyss: "12-1"
  }
  },
  "GitHub Stalk": {
    status: "true",
  code: "200",
  creator: "OwnBlox",
  data: {
    name: "microsoft",
    username: "microsoft",
    followers: "90.7k",
    following: "0",
    repository: "0",
    avatar: "https://avatars.githubusercontent.com/u/1209?s=70&v=4?size=400",
    profile_url: "https://github.com/microsoft"
  }
  },
  "LLaMA 3.3 70B Versatile": {
  status: "200",
  model: "llama-3.3-70b-versatile",
  response: "Hello. How can I help you today?"
  },
  "Gemini AI": {
    sukses: "true",
  jawaban: "Halo juga! 👋😊 Apa kabar? 🔥 Ada yang bisa saya bantu? 😊"
  },
  "Txt2Img": {
    status: "200",
    results: "[ Image ]"
  },
  "Genshin Character Build": {
    status: "200",
    results: "[ Image ]"
  },
  "Screenshot Web": {
    status: "200",
    results: "[ Image ]"
  },
  "Translate": {
  status: "200",
  original_text: "How Are You?",
  translated_text: "Apa kabarmu?",
  lang_from: "en",
  lang_to: "id"
  },
  "Nulis": {
    status: "200",
    results: "[ Image ]"
  },
  "Cuaca": {
  status: "200",
  result: {
    kota: "Jakarta, Indonesia",
    zona_waktu: "GMT +0",
    suhu: "27°C",
    kondisi: "Mostly sunny",
    kelembaban: "87%",
    angin: "1 km/h",
    tekanan: "undefined mb"
  }
  },
  "QR Code Generator": {
    status: "200",
    results: "[ Image ]"
  },
  "Credit Card Generator": {
    type: "Visa",
    name: "Audra Rowe",
    number: "4539008348835948",
    cvv: "950",
    expiry: "08/25"
  },
  "Cek Khodam": {
  status: "200",
  result: "Khodam OwnBlox adalah Siluman Ular Merah penjaga kekayaan dan pelindung dari segala kejahatan ilmu hitam."
  },
  "Tahu Kah Kamu?": {
  status: "200",
  result: "Tahukah kamu? Lumba-lumba tidur dengan satu mata terbuka."
  },
  "Brat Image": {
    status: "200",
    results: "[ Image ]"
  },
  "Quoted Chat": {
    status: "200",
    results: "[ Image ]"
  },
  "Detik News": {
  status: "true",
  source: "https://news.detik.com/",
  result: [
    {
      title: "Ribut-ribut Maut di Asrama Pelaut",
      link: "https://news.detik.com/berita/d-7894123/ribut-ribut-maut-di-asrama-pelaut"
    }
  ]  
  },
  "Kompas": {
    status: "error",
    message: "Maaf, endpoint ini sedang error."
  }
}

const apiData = {
    "Downloader": [
        {
            method: "GET",
            title: "YouTube Downloader",
            status: "offline",
            description: "API untuk mendownload video atau shorts dari YouTube.",
            endpoint: "/api/ytdl?url=&format="
        },
        {
            method: "GET",
            title: "Twitter Downloader",
            status: "online",
            description: "API untuk mendownload video atau gambar dari Twitter.",
            endpoint: "/api/twitterdl?url="
        },
        {
            method: "GET",
            title: "Instagram Downloader",
            status: "offline",
            description: "API untuk mendownload video atau gambar dari Instagram.",
            endpoint: "/api/igdl?url="
        },
        {
            method: "GET",
            title: "Facebook Downloader",
            status: "online",
            description: "API untuk mendownload video dari Facebook.",
            endpoint: "/api/fbdl?url="
        },
        {
            method: "GET",
            title: "TikTok Downloader",
            status: "online",
            description: "API untuk mendownload video dari TikTok.",
            endpoint: "/api/ttdl?url="
        },
        {
            method: "GET",
            title: "GitHub Cloning",
            status: "online",
            description: "Cloning repositori dari GitHub.",
            endpoint: "/api/gitclone?url="
        },
        {
            method: "GET",
            title: "Spotify Downloader",
            status: "online",
            description: "Download semua lagu dari Spotify dengan mudah.",
            endpoint: "/api/spotifydl?url="
        }
    ],
    "Search": [
        {
            method: "GET",
            title: "Search Groups",
            status: "online",
            description: "API untuk mencari grup WhatsApp berdasarkan kata kunci.",
            endpoint: "/api/searchgroups?q="
        },
        {
            method: "GET",
            title: "Random Meme",
            status: "online",
            description: "Gambar random yang berisi Meme dan bisa di tentukan count(jumlah) nya.",
            endpoint: "/api/randommeme?count="
        },  
        {
            method: "GET",
            title: "TikTok Search",
            status: "online",
            description: "API untuk mencari video dari TikTok berdasarkan query.",
            endpoint: "/api/ttsearch?q="
        },
        {
            method: "GET",
            title: "YouTube Search",
            status: "online",
            description: "API untuk mencari video dari YouTube berdasarkan kata kunci atau query.",
            endpoint: "/api/ytsearch?q="
        },
        {
            method: "GET",
            title: "NPM Search",
            status: "online",
            description: "Mencari package/module/library yang tersedia berdasarkan query(q) kamu.",
            endpoint: "/api/npmsearch?q="
        },
        {
            method: "GET",
            title: "Google Search",
            status: "online",
            description: "Mencari apapun dan semuanya dari Google dengan cepat.",
            endpoint: "/api/googlesearch?q="
        },
        {
            method: "GET",
            title: "DuckDuckGo Search",
            status: "offline",
            description: "Mencari apapun dan semuanya dari DuckDuckGo dengan mudah.",
            endpoint: "/api/duckduckgo?q="
        },
        {
            method: "GET",
            title: "Pinterest",
            status: "online",
            description: "Mencari gambar di Pinterest berdasarkan query (q) kamu.",
            endpoint: "/api/pinterest?q="
        },
        {
            method: "GET",
            title: "Spotify Search",
            status: "online",
            description: "Mencari lagu dengan informasi lengkap lainnya berdasarkan query (q) kamu.",
            endpoint: "/api/spotifysearch?q="
        }
    ],
    "Stalker": [
        {
            method: "GET",
            title: "Genshin Stalk",
            status: "online",
            description: "Stalking akun genshin berdasarkan UID kamu.",
            endpoint: "/api/gistalk?uid="
        },
        {
            method: "GET",
            title: "GitHub Stalk",
            status: "online",
            description: "Stalking akun GitHub berdasarkan username.",
            endpoint: "/api/githubstalk?username="
        }
    ],      
    "AI": [
        {
            method: "GET",
            title: "LLaMA 3.3 70B Versatile",
            status: "online",
            description: "API untuk mengakses model LLaMA 3.3 70B yang serbaguna.",
            endpoint: "/api/llama-3.3-70b-versatile?content="
        },
        {
            method: "GET",
            title: "Gemini AI",
            status: "online",
            description: "API untuk mengakses AI model Gemini yang serbaguna.",
            endpoint: "/api/gemini?text="
        },
        {
            method: "GET",
            title: "Txt2Img",
            status: "online",
            description: "API untuk membuat gambar dari AI dengan style yang banyak.",
            endpoint: "/api/txt2img?prompt=&style="
        }
    ],
    "Tools": [
        {
            method: "GET",
            title: "Genshin Character Build",
            status: "online",
            description: "Build karakter Genshin Impact yang lengkap berdasarkan query (q) kamu.",
            endpoint: "/api/genshinbuild?q="
        },
        {
            method: "GET",
            title: "Screenshot Web",
            status: "online",
            description: "API untuk screenshot website dengan mudah.",
            endpoint: "/api/ssweb?url="
        },
        {
            method: "GET",
            title: "Translate",
            status: "online",
            description: "API untuk translate bahasa apapun menjadi yang kamu inginkan.",
            endpoint: "/api/translate?text=&to="
        },
        {
            method: "GET",
            title: "Nulis",
            status: "online",
            description: "Membuat gambar buku beserta tulisan berdasarkan dari query text kamu.",
            endpoint: "/api/nulis?text="
        },
        {
            method: "GET",
            title: "Cuaca",
            status: "online",
            description: "Mendapatkan informasi Cuaca semua kota di dunia berdasarkan query kota.",
            endpoint: "/api/cuaca?kota="
        },
        {
            method: "GET",
            title: "QR Code Generator",
            status: "online",
            description: "Membuat QR secara otomatis dengan gampang.",
            endpoint: "/api/qrcodegenerator?text="
        },
        {
            method: "GET",
            title: "Credit Card Generator",
            status: "online",
            description: "Fake generator Credit Card hanya untuk Fun",
            endpoint: "/api/vcc?type=&count="
        }
    ],
    "Fun": [
        {
            method: "GET",
            title: "Cek Khodam",
            status: "online",
            description: "Permainan seru yang menunjukkan khodam seseorang berdasarkan nama.",
            endpoint: "/api/cekkhodam?nama="
        },
        {
            method: "GET",
            title: "Tahu Kah Kamu?",
            status: "online",
            description: "Permainan seru yang menunjukkan fakta2 random yang mungkin belom kamu ketahui.",
            endpoint: "/api/tahukahkamu"
        }
    ],
    "Sticker": [
        {
            method: "GET",
            title: "Brat Image",
            status: "online",
            description: "Mengubah text kamu menjadi gambar brat.",
            endpoint: "/api/brat?text="
        },
        {
            method: "GET",
            title: "Quoted Chat",
            status: "online",
            description: "Membuat gambar dengan desain quoted chat yang bisa kamu custom nama, color, foto profile, dan lainnya.",
            endpoint: "/api/qc?text=&name=&color=&profile="
        }
    ],
    "Berita": [
        {
            method: "GET",
            title: "Detik News",
            status: "online",
            description: "Mendapatkan informasi berita terbaru dari Detik News.",
            endpoint: "/api/detiknews"
        },
        { 
            method: "GET",
            title: "Kompas",
            status: "offline",
            description: "Mendapatkan informasi berita terbaru dari Kompas",
            endpoint: "/api/kompasnews"
        }
    ]      
};

function syntaxHighlight(json) {
    let jsonStr = JSON.stringify(json, null, 2)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
    return jsonStr.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, 
        function(match) {
            let cls = 'number';
            if (/^"/.test(match)) cls = match.endsWith(':') ? 'key' : 'string';
            else if (/true|false/.test(match)) cls = 'boolean';
            else if (/null/.test(match)) cls = 'null';
            return `<span class="${cls}">${match}</span>`;
        });
}

function searchEndpoints() {
  const searchInput = document.getElementById('search-input');
  const searchTerm = searchInput.value.toLowerCase();
  
  document.querySelectorAll('.api-item').forEach(item => {
    const title = item.querySelector('.api-title').textContent.toLowerCase();
    const description = item.querySelector('.api-description p').textContent.toLowerCase();
    item.style.display = (title.includes(searchTerm) || description.includes(searchTerm)) 
      ? 'block' 
      : 'none';
  });

  document.querySelectorAll('.api-category').forEach(category => {
    const hasVisibleItems = category.querySelector('.api-item[style="display: block;"]');
    category.style.display = hasVisibleItems ? 'block' : 'none';
  });
}

document.getElementById('search-input').addEventListener('input', searchEndpoints);

function createApiItem(api) {
    const apiItem = document.createElement('div');
    apiItem.className = 'api-item';

    const apiHeader = document.createElement('div');
    apiHeader.className = 'api-header';

    const apiMethod = document.createElement('span');
    apiMethod.className = 'api-method';
    apiMethod.textContent = api.method;

    const apiTitle = document.createElement('span');
    apiTitle.className = 'api-title';
    apiTitle.textContent = api.title;

    const apiStatusBadge = document.createElement('span');
    apiStatusBadge.className = `api-status-badge ${api.status}`;
    apiStatusBadge.textContent = api.status.toUpperCase();

    apiHeader.appendChild(apiMethod);
    apiHeader.appendChild(apiTitle);
    apiHeader.appendChild(apiStatusBadge);

    const apiDescription = document.createElement('div');
    apiDescription.className = 'api-description';
    apiDescription.style.display = 'none';

    const apiDescriptionText = document.createElement('p');
    apiDescriptionText.textContent = api.description;

    const apiEndpoint = document.createElement('div');
    apiEndpoint.className = 'api-endpoint';
    apiEndpoint.textContent = `Endpoint: ${api.endpoint}`;

    // Perbaikan untuk button container dan button
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'api-button-container';

    const accessButton = document.createElement('button');
    accessButton.innerHTML = '<i class="fas fa-external-link-alt"></i> Akses Endpoint';
    accessButton.onclick = () => window.location.href = api.endpoint;

    const copyButton = document.createElement('button');
    copyButton.innerHTML = '<i class="far fa-copy"></i> Salin Endpoint';
    copyButton.onclick = () => {
        navigator.clipboard.writeText(api.endpoint)
            .then(() => alert('Endpoint berhasil disalin!'))
            .catch(err => console.error('Gagal menyalin:', err));
    };

    buttonContainer.appendChild(accessButton);
    buttonContainer.appendChild(copyButton);

    // Inisialisasi variabel apiResponse di luar blok if
    let apiResponse = null;

    // Buat container untuk tombol response
    const responseButtonContainer = document.createElement('div');
    responseButtonContainer.className = 'response-button-container';

    // Tambah contoh response jika ada
    if(exampleResponses && exampleResponses[api.title]) {
        apiResponse = document.createElement('div');
        apiResponse.className = 'api-response';
        
        const responseTitle = document.createElement('strong');
        responseTitle.textContent = 'Contoh Response:';
        
        const responsePre = document.createElement('pre');
        responsePre.innerHTML = syntaxHighlight(exampleResponses[api.title]);
        
        apiResponse.appendChild(responseTitle);
        apiResponse.appendChild(responsePre);
        
        // Tombol toggle response
        const toggleResponseBtn = document.createElement('button');
        toggleResponseBtn.className = 'toggle-response-btn';
        toggleResponseBtn.innerHTML = '<i class="fas fa-code"></i> Tampilkan Response';
        let isResponseVisible = false;

        toggleResponseBtn.onclick = () => {
            isResponseVisible = !isResponseVisible;
            apiResponse.style.display = isResponseVisible ? 'block' : 'none';
            toggleResponseBtn.innerHTML = isResponseVisible 
                ? '<i class="fas fa-times"></i> Sembunyikan Response' 
                : '<i class="fas fa-code"></i> Tampilkan Response';
        };

        responseButtonContainer.appendChild(toggleResponseBtn);
        
        // Sembunyikan response awal
        apiResponse.style.display = 'none';
    }
    
    // Menambahkan elemen-elemen ke apiDescription dengan urutan yang tepat
    apiDescription.appendChild(apiDescriptionText);
    apiDescription.appendChild(apiEndpoint);
    apiDescription.appendChild(buttonContainer);
    
    // Tambahkan response button container jika ada response
    if(apiResponse) {
        apiDescription.appendChild(responseButtonContainer);
        apiDescription.appendChild(apiResponse); // Response di bawah tombol toggle
    }
    
    apiItem.appendChild(apiHeader);
    apiItem.appendChild(apiDescription);

    return apiItem;
}

function setupToggleDescriptions() {
    const apiHeaders = document.querySelectorAll('.api-header');

    apiHeaders.forEach(header => {
        header.addEventListener('click', function () {
            document.querySelectorAll('.api-description').forEach(desc => {
                desc.style.display = "none";
            });

            const description = this.nextElementSibling;
            if (description.style.display === "none" || !description.style.display) {
                description.style.display = "block";
            } else {
                description.style.display = "none";
            }
        });
    });
}

function updateStatistics() {
    let totalEndpoints = 0;
    let onlineEndpoints = 0;
    let offlineEndpoints = 0;

    for (const category in apiData) {
        apiData[category].forEach(api => {
            totalEndpoints++;
            if (api.status === 'online') {
                onlineEndpoints++;
            } else {
                offlineEndpoints++;
            }
        });
    }

    document.getElementById('total-endpoints').textContent = totalEndpoints;
    document.getElementById('online-endpoints').textContent = onlineEndpoints;
    document.getElementById('offline-endpoints').textContent = offlineEndpoints;
}

document.addEventListener('DOMContentLoaded', function() {
    const switchContainer = document.createElement('div');
    switchContainer.className = 'theme-switch-container';
    switchContainer.innerHTML = `
        <label class="theme-switch">
            <input type="checkbox" id="theme-toggle">
            <span class="slider">
                <i class="fas fa-sun icon sun-icon"></i>
                <i class="fas fa-moon icon moon-icon"></i>
            </span>
        </label>
    `;
    document.body.appendChild(switchContainer);
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    const themeToggle = document.getElementById('theme-toggle');
    if (isDarkMode) {
        document.body.classList.add('dark-theme');
        themeToggle.checked = true;
    }
    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('dark-theme');
            localStorage.setItem('darkMode', 'true');
        } else {
            document.body.classList.remove('dark-theme');
            localStorage.setItem('darkMode', 'false');
        }
    });
});

function loadApiData() {
    const apiCategoriesContainer = document.getElementById('api-categories');

    for (const category in apiData) {
        const apiCategory = document.createElement('div');
        apiCategory.className = 'api-category';

        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = category;

        const apiList = document.createElement('div');
        apiList.className = 'api-list';

        apiData[category].forEach(api => {
            const apiItem = createApiItem(api);
            apiList.appendChild(apiItem);
        });

        apiCategory.appendChild(categoryTitle);
        apiCategory.appendChild(apiList);
        apiCategoriesContainer.appendChild(apiCategory);
    }

    setupToggleDescriptions();
    updateStatistics();
}

document.addEventListener('DOMContentLoaded', loadApiData);