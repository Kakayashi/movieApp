Temat: Zestawienie rankingu filmów i gier na podstawie ocen użykwników
Skład:  Karol Krawczyński
		Karol Kowalik
Instrukcja uruchomienia:
	Żeby uruchmomić projekt trzeba mieć zainstalowany na komputerze:
	-node
	-composer
	-docker desktop
	-laravel
	
	1. Przejść za pomocą konsoli do foldeu "movieApp-main"
	2. Wpisać komende "docker compose build"
	3. Wpisać komende "docker compose up"
	4. Przejść do folderu "movie_games_api"
	5. Wpisać kolejne komendy:
		-"composer require tymon/jwt-auth"
		-"composer require marcreichel/igdb-laravel"
	6. Wpisać w przeglądarkę adres: http://localhost:8000/get-genres
	7. Wpisać w przeglądarkę adres: http://localhost:8000/get-movies
	8. Wpisać w przeglądarkę adres: http://localhost:8000/get-games
	9. Strona znajduje się pod adresem: http://localhost:3000/
	
Opis:
	Aplikacja została napisana w ractcie oraz laravelu. Pozawala ona na wyświetlenie informacji
	o filmach/grach oraz umożliwia dodawanie recenzji do nich. Dane o filmach są pobierane z 
	the movies database api natomiast o grach z twich.tv api. Uwierzytelnianie i autoryzacja
	została stworzona przy użyciu tokena JWT znajduje zastosowanie m.in. w panelu admina gdzie
	tylko admin ma możliwość importu/exportu pliku json/xml oraz edycji danych użytkownika. 😎