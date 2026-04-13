function ENG(){
            document.getElementById("main-desc").innerHTML = "Hi! My name is Kuba and for 7 years I’ve been creating in Roblox as Ciotka_Ewka. I’m a co-owner and lead developer of Project Łódzkie, where I focus on building and developing the game. For the past 3 years I’ve been learning programming and I’m familiar with many languages. On this site you’ll find my projects made in C# .NET and Roblox Studio."
            document.getElementById("pl-desc").innerHTML = "The project focuses on creating a realistic map inspired by Polish road infrastructure and urban architecture. Players can freely drive vehicles, explore the world, and take part in roleplay."
            document.getElementById("cs-desc").innerHTML = "The C# .NET section presents my projects developed using C# technology and the Microsoft .NET platform. I focus on improving my programming skills by creating practical applications with graphical user interfaces."
            document.getElementById("copy").innerHTML = "Website made by Ciotka_Ewka&copy;"
            document.getElementById("aboutme").innerHTML = "About me:"
            document.getElementById("projectsbutton").textContent="Check out my projects..."
        }

        function PL(){
            document.getElementById("main-desc").innerHTML = "Cześć! Nazywam się Kuba i od 7 lat tworzę w Roblox jako Ciotka_Ewka. Jestem współwłaścicielem i lead developerem Project Łódzkie, gdzie zajmuję się budowaniem i rozwojem gry. Od 3 lat ucze się programowania i znam sporo języków. Na tej stronie znajdziesz moje projekty z C# .NET i Roblox Studio."
            document.getElementById("pl-desc").innerHTML = "Projekt skupia się na stworzeniu realistycznej mapy inspirowanej polską infrastrukturą drogową oraz architekturą miejską. Gracze mają możliwość swobodnego poruszania się pojazdami, eksplorowania świata oraz uczestniczenia w roleplay."
            document.getElementById("cs-desc").innerHTML = "Sekcja C# .NET przedstawia moje projekty tworzone w oparciu o technologię C# oraz platformę Microsoft .NET. Skupiam się na rozwijaniu umiejętności programowania poprzez tworzenie praktycznych aplikacji z interfejsem graficznym."
            document.getElementById("copy").innerHTML = "Strona stworzona przez Ciotka_Ewka&copy;"
            document.getElementById("aboutme").innerHTML = "O Mnie:"
            document.getElementById("projectsbutton").textContent="Zobacz moje projekty..."
        }




        function projectsScroll() {
            document.getElementById("pl-main").scrollIntoView({
            behavior: "smooth"})
        }

        function showPL(){
            window.open("ProjectLodzkie.html", "_blank")
        }