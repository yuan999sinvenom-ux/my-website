export default {
  async fetch(request, env) {
    // 这里放刚才给你的HTML代码
    const html = `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Charlie's Space</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        * {
            transition: background-color 0.3s ease, color 0.3s ease;
        }
    </style>
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        primary: '#3B82F6',
                    },
                    fontFamily: {
                        sans: ['Inter', 'system-ui', 'sans-serif'],
                    },
                }
            }
        }
    </script>
</head>
<body class="bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100 min-h-screen">
    <nav class="sticky top-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm z-10">
        <div class="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
            <a href=" " class="text-xl font-bold text-primary">Charlie</a >
            <div class="flex gap-4 items-center">
                <a href="#about" class="hover:text-primary dark:hover:text-primary transition-colors">关于</a >
                <a href="#projects" class="hover:text-primary dark:hover:text-primary transition-colors">项目</a >
                <a href="#contact" class="hover:text-primary dark:hover:text-primary transition-colors">联系</a >
                <button id="themeToggle" class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                    <svg class="w-5 h-5 hidden dark:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                    </svg>
                    <svg class="w-5 h-5 block dark:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                    </svg>
                </button>
            </div>
        </div>
    </nav>

    <header class="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Hi, 我是 Charlie 👋</h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
            一名NJUPT学生 | 正在学习前端/后端开发
        </p >
        <div class="flex justify-center gap-4 flex-wrap">
            <a href="#projects" class="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg shadow-md transition-all hover:shadow-lg">
                查看我的项目
            </a >
            <a href="#contact" class="border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-lg transition-all">
                联系我
            </a >
        </div>
    </header>

    <section id="about" class="max-w-4xl mx-auto px-4 py-16">
        <h2 class="text-3xl font-bold mb-8 text-center">关于我</h2>
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-8">
            <p class="text-lg leading-relaxed mb-4">
                我是一名就读于南京邮电大学的一名学生，对编程和互联网技术充满热情。
            </p >
            <p class="text-lg leading-relaxed mb-4">
                目前正在学习 Java、Web 开发和云原生相关技术，喜欢折腾各种小项目，也会在这里记录学习过程中的心得和踩坑记录。
            </p >
            <div class="mt-6 flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">Java</span>
                <span class="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">HTML/CSS</span>
                <span class="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">JavaScript</span>
                <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">Cloudflare Worker</span>
            </div>
        </div>
    </section>

    <section id="projects" class="max-w-4xl mx-auto px-4 py-16">
        <h2 class="text-3xl font-bold mb-8 text-center">我的项目</h2>
        <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 class="text-xl font-bold mb-2 text-primary">个人主页</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                    用 Cloudflare Worker + Tailwind CSS 搭建的个人网站，支持暗黑模式，响应式设计。
                </p >
                <div class="flex gap-2">
                    <span class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">HTML</span>
                    <span class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Tailwind</span>
                    <span class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Cloudflare</span>
                </div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 class="text-xl font-bold mb-2 text-primary">简易工具站</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                    基于 Cloudflare Worker 的小工具集合，后续会慢慢添加更多实用功能。
                </p >
                <div class="flex gap-2">
                    <span class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">JavaScript</span>
                    <span class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">API</span>
                </div>
            </div>
        </div>
    </section>

    <section id="contact" class="max-w-4xl mx-auto px-4 py-16">
        <h2 class="text-3xl font-bold mb-8 text-center">联系我</h2>
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-8 text-center">
            <p class="text-lg mb-6">
                如果你有任何问题、合作意向或者只是想打个招呼，都可以通过以下方式找到我：
            </p >
            <div class="flex justify-center gap-6 flex-wrap">
             <div class="flex items-center gap-2 text-gray-600 dark:text-gray-300">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
    </svg>
    <span id="emailText">3964096352@qq.com</span>
    <button onclick="copyEmail()" class="text-sm px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600">复制</button>
</div>

<script>
function copyEmail() {
    const email = document.getElementById('emailText').textContent;
    navigator.clipboard.writeText(email).then(() => {
        alert('邮箱已复制到剪贴板！');
    });
}
</script>
                <a href="https://github.com/yuan999sinvenom-ux" target="_blank" class="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                </a >
            </div>
        </div>
    </section>

    <footer class="bg-gray-100 dark:bg-gray-800 py-6 text-center text-gray-600 dark:text-gray-400">
        <p>© 2026 Charion. All rights reserved.</p >
        <p class="text-sm mt-2">Powered by Cloudflare Worker & Tailwind CSS</p >
    </footer>

    <script>
        const themeToggle = document.getElementById('themeToggle');
        const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        themeToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
        });
    </script>
</body>
</html>
    `;

    return new Response(html, {
        headers: {
            'Content-Type': 'text/html;charset=utf-8',
        },
    });
  },
};
