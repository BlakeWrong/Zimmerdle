let songs = [
	{
		url: 'https://soundcloud.com/hans-zimmer-official/dreaming-of-the-crash?in=hans-zimmer-official/sets/interstellar-original-motion-3',
		answer: 'Interstellar - Dreaming of the Crash - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/cornfield-chase?in=hans-zimmer-official/sets/interstellar-original-motion-3',
		answer: 'Interstellar - Cornfield Chase - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/dust?in=hans-zimmer-official/sets/interstellar-original-motion-3',
		answer: 'Interstellar - Dust - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/day-one?in=hans-zimmer-official/sets/interstellar-original-motion-3',
		answer: 'Interstellar - Day One (Interstellar Theme) - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/stay?in=hans-zimmer-official/sets/interstellar-original-motion-3',
		answer: 'Interstellar - Stay - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/message-from-home?in=hans-zimmer-official/sets/interstellar-original-motion-3',
		answer: 'Interstellar - Message from Home - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/the-wormhole?in=hans-zimmer-official/sets/interstellar-original-motion-3',
		answer: 'Interstellar - The Wormhole - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/martin-marinov/trevor-rabin-national-treasure?#t=79',
		answer: 'National Treasure - Main Titles - Trevor Rabin',
	},
	{
		url: 'https://soundcloud.com/harper-demoss/red-is-blue?#t=49',
		answer: 'Hoodwinked - Red Is Blue - Ben Folds',
	},
	{
		url: 'https://soundcloud.com/klausbadelt/the-medallion-calls?in=klausbadelt/sets/pirates-of-the-caribbean-the-3',
		answer:
			'Pirates of the Caribbean: The Curse of the Black Pearl - The Medallion Calls - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/star-trek-main-theme-1?#t=95',
		answer: 'Star Trek - Main Theme - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/john-powell-official/once-there-were-dragons?in=john-powell-official/sets/how-to-train-your-dragon-the-1?#t=250',
		answer:
			'How To Train Your Dragon: The Hidden World - Once There Were Dragons - John Powell',
	},
	{
		url: 'https://soundcloud.com/toproduction/avatar-soundtrack-becoming-one?#t=40',
		answer:
			'Avatar - Becoming One of "The People" Becoming One With Neytiri - James Horner',
	},
	{
		url: 'https://soundcloud.com/harold-faltermeyer/top-gun-anthem?in=kennyloggins/sets/top-gun-soundtrack-1',
		answer: 'Top Gun - Top Gun Anthem - Harold Faltermeyer',
	},
	// {
	// 	url: 'https://soundcloud.com/harold-faltermeyer/main-titles-youve-been-called?in=harold-faltermeyer/sets/top-gun-maverick-music-from?#t=50',
	// 	answer:
	// 		'Top Gun: Maverick - Main Titles (You’ve Been Called Back to Top Gun) - Harold Faltermeyer',
	// },
	{
		url: 'https://soundcloud.com/royal-philharmonic-orchestra/end-titles-from-the-shawshank?#t=30',
		answer: 'The Shawshank Redemption - End Titles - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/trentreznorandatticusross-music/epiphany?#t=90',
		answer: 'Soul - Epiphany - Trent Reznor and Atticus Ross',
	},
	{
		url: 'https://soundcloud.com/markronson/pink-barbie-opening-theme?in=markronson/sets/barbie-score-from-the-original',
		answer: 'Barbie - Pink ("Barbie” Opening Theme) - Mark Ronson',
	},
	{
		url: 'https://soundcloud.com/mutesong/max-richter-on-the-nature-of?#t=85',
		answer: 'Shutter Island - On the Nature of Daylight - Max Richter',
	},
	{
		url: 'https://soundcloud.com/olgascheps/stuff-we-did-from-up',
		answer: 'Up - Stuff We Did - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/justin-hurwitz/overture',
		answer: 'Whiplash - Overture - Justin Hurwitz',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/mountains?in=hans-zimmer-official/sets/interstellar-original-motion-3',
		answer: 'Interstellar - Mountains - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/afraid-of-time?in=hans-zimmer-official/sets/interstellar-original-motion-3',
		answer: 'Interstellar - Afraid of Time - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/a-place-among-the-stars?in=hans-zimmer-official/sets/interstellar-original-motion-3',
		answer: 'Interstellar - A Place Among the Stars - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/running-out?in=hans-zimmer-official/sets/interstellar-original-motion-3',
		answer: 'Interstellar - Running Out - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/im-going-home?in=hans-zimmer-official/sets/interstellar-original-motion-3',
		answer: "Interstellar - I'm Going Home - Hans Zimmer",
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/coward?in=hans-zimmer-official/sets/interstellar-original-motion-3',
		answer: 'Interstellar - Coward - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/detach?in=hans-zimmer-official/sets/interstellar-original-motion-3',
		answer: 'Interstellar - Detach - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/s-t-a-y?in=hans-zimmer-official/sets/interstellar-original-motion-3',
		answer: 'Interstellar - S.T.A.Y. - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/trevor-rabin/national-treasure-suite?in=trevor-rabin/sets/national-treasure-1',
		answer: 'National Treasure - National Treasure Suite - Trevor Rabin',
	},
	{
		url: 'https://soundcloud.com/trevor-rabin/ben?in=trevor-rabin/sets/national-treasure-1',
		answer: 'National Treasure - Ben - Trevor Rabin',
	},
	{
		url: 'https://soundcloud.com/trevor-rabin/finding-charlotte?in=trevor-rabin/sets/national-treasure-1',
		answer: 'National Treasure - Finding Charlotte - Trevor Rabin',
	},
	{
		url: 'https://soundcloud.com/trevor-rabin/library-of-congress?in=trevor-rabin/sets/national-treasure-1',
		answer: 'National Treasure - Library of Congress - Trevor Rabin',
	},
	{
		url: 'https://soundcloud.com/trevor-rabin/preparation-montage?in=trevor-rabin/sets/national-treasure-1',
		answer: 'National Treasure - Preparation Montage - Trevor Rabin',
	},
	{
		url: 'https://soundcloud.com/trevor-rabin/arrival-at-national-archives?in=trevor-rabin/sets/national-treasure-1',
		answer: 'National Treasure - Arrival at National Archives - Trevor Rabin',
	},
	{
		url: 'https://soundcloud.com/trevor-rabin/the-chase?in=trevor-rabin/sets/national-treasure-1',
		answer: 'National Treasure - The Chase - Trevor Rabin',
	},
	{
		url: 'https://soundcloud.com/trevor-rabin/declaration-of-independence?in=trevor-rabin/sets/national-treasure-1',
		answer: 'National Treasure - Declaration of Independence - Trevor Rabin',
	},
	{
		url: 'https://soundcloud.com/trevor-rabin/foot-chase?in=trevor-rabin/sets/national-treasure-1',
		answer: 'National Treasure - Foot Chase - Trevor Rabin',
	},
	{
		url: 'https://soundcloud.com/trevor-rabin/spectacle-discovery?in=trevor-rabin/sets/national-treasure-1',
		answer: 'National Treasure - Spectacle Discovery - Trevor Rabin',
	},
	{
		url: 'https://soundcloud.com/trevor-rabin/interrogation?in=trevor-rabin/sets/national-treasure-1',
		answer: 'National Treasure - Interrogation - Trevor Rabin',
	},
	{
		url: 'https://soundcloud.com/trevor-rabin/treasure?in=trevor-rabin/sets/national-treasure-1',
		answer: 'National Treasure - Treasure - Trevor Rabin',
	},

	{
		url: 'https://soundcloud.com/thebellestars/iko-iko?in=hans-zimmer-official/sets/rain-man-original-motion',
		answer: 'Rain Man: Original Motion Picture - Iko Iko - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/johnny-clegg-savuka/scatterlings-of-africa?in=hans-zimmer-official/sets/rain-man-original-motion',
		answer:
			'Rain Man: Original Motion Picture - Scatterlings of Africa - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/the-delta-rhythm-boys/dry-bones?in=hans-zimmer-official/sets/rain-man-original-motion',
		answer: 'Rain Man: Original Motion Picture - Dry Bones - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/ettajamesofficial/at-last-2?in=hans-zimmer-official/sets/rain-man-original-motion',
		answer: 'Rain Man: Original Motion Picture - At Last - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/ian-gillan-official/lonely-avenue?in=hans-zimmer-official/sets/rain-man-original-motion',
		answer: 'Rain Man: Original Motion Picture - Lonely Avenue - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/bananarama/nathan-jones?in=hans-zimmer-official/sets/rain-man-original-motion',
		answer: 'Rain Man: Original Motion Picture - Nathan Jones - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/leaving-wallbrook-on-the-road?in=hans-zimmer-official/sets/rain-man-original-motion',
		answer:
			'Rain Man: Original Motion Picture - Leaving Wallbrook/On The Road - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/las-vegas-end-credits?in=hans-zimmer-official/sets/rain-man-original-motion',
		answer:
			'Rain Man: Original Motion Picture - Las Vegas/End Credits - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/robwasserman/stardust?in=hans-zimmer-official/sets/rain-man-original-motion',
		answer: 'Rain Man: Original Motion Picture - Stardust - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/lou-christie-official/beyond-the-blue-horizon?in=hans-zimmer-official/sets/rain-man-original-motion',
		answer:
			'Rain Man: Original Motion Picture - Beyond The Blue Horizon - Hans Zimmer',
	},

	{
		url: 'https://soundcloud.com/cast-frozen/frozen-heart?in=christophe-beck-music/sets/frozen-514',
		answer: 'Frozen - Frozen Heart - Christophe Beck',
	},
	{
		url: 'https://soundcloud.com/kristen-bell-official/do-you-want-to-build-a-snowman?in=christophe-beck-music/sets/frozen-514',
		answer: 'Frozen - Do You Want to Build a Snowman? - Christophe Beck',
	},
	{
		url: 'https://soundcloud.com/kristen-bell-official/for-the-first-time-in?in=christophe-beck-music/sets/frozen-514',
		answer: 'Frozen - For the First Time in Forever - Christophe Beck',
	},
	{
		url: 'https://soundcloud.com/kristen-bell-official/love-is-an-open-door?in=christophe-beck-music/sets/frozen-514',
		answer: 'Frozen - Love Is an Open Door - Christophe Beck',
	},
	{
		url: 'https://soundcloud.com/idinamenzel/let-it-go-from-frozen?in=christophe-beck-music/sets/frozen-514',
		answer: 'Frozen - Let It Go - Christophe Beck',
	},
	{
		url: 'https://soundcloud.com/jonathan-groff-official/reindeer-s-are-better-than?in=christophe-beck-music/sets/frozen-514',
		answer: 'Frozen - Reindeer(s) Are Better Than People - Christophe Beck',
	},
	{
		url: 'https://soundcloud.com/joshgad/in-summer?in=christophe-beck-music/sets/frozen-514',
		answer: 'Frozen - In Summer - Christophe Beck',
	},
	{
		url: 'https://soundcloud.com/kristen-bell-official/for-the-first-time-in-forever?in=christophe-beck-music/sets/frozen-514',
		answer: 'Frozen - For the First Time in Forever (Reprise) - Christophe Beck',
	},
	{
		url: 'https://soundcloud.com/maiawilsonofficial/fixer-upper?in=christophe-beck-music/sets/frozen-514',
		answer: 'Frozen - Fixer Upper - Christophe Beck',
	},
	{
		url: 'https://soundcloud.com/ddlovato/let-it-go-single-version?in=christophe-beck-music/sets/frozen-514',
		answer: 'Frozen - Demi Lovato - Let It Go - Christophe Beck',
	},
	{
		url: 'https://soundcloud.com/martina-stoessel-official/libre-soy-single-version?in=christophe-beck-music/sets/frozen-514',
		answer: 'Frozen - Libre Soy (Single Version) - Christophe Beck',
	},
	{
		url: 'https://soundcloud.com/christophe-beck-music/vuelie?in=christophe-beck-music/sets/frozen-514',
		answer: 'Frozen - Vuelie [feat. Cantus] - Christophe Beck',
	},
	{
		url: 'https://soundcloud.com/christophe-beck-music/elsa-and-anna?in=christophe-beck-music/sets/frozen-514',
		answer: 'Frozen - Elsa and Anna - Christophe Beck',
	},
	{
		url: 'https://soundcloud.com/christophe-beck-music/the-trolls?in=christophe-beck-music/sets/frozen-514',
		answer: 'Frozen - The Trolls - Christophe Beck',
	},
	{
		url: 'https://soundcloud.com/christophe-beck-music/coronation-day?in=christophe-beck-music/sets/frozen-514',
		answer: 'Frozen - Coronation Day - Christophe Beck',
	},
	{
		url: 'https://soundcloud.com/carmen-twillie/circle-of-life?in=hans-zimmer-official/sets/the-lion-king-4',
		answer: 'The Lion King - Circle of Life - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/jason-weaver-official/i-just-cant-wait-to-be-king?in=hans-zimmer-official/sets/the-lion-king-4',
		answer: "The Lion King - I Just Can't Wait to Be King - Hans Zimmer",
	},
	{
		url: 'https://soundcloud.com/jeremy-irons-official/be-prepared-from-the-lion-king?in=hans-zimmer-official/sets/the-lion-king-4',
		answer: 'The Lion King - Be Prepared - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/ernie-sabella/hakuna-matata?in=hans-zimmer-official/sets/the-lion-king-4',
		answer: 'The Lion King - Hakuna Matata - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/joseph-williams-official/can-you-feel-the-love-tonight?in=hans-zimmer-official/sets/the-lion-king-4',
		answer: 'The Lion King - Can You Feel the Love Tonight - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/zab-jcza-niespodzianka?in=hans-zimmer-official/sets/the-lion-king-4',
		answer: 'The Lion King - This Land - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/to-die-for-from-the-lion-king?in=hans-zimmer-official/sets/the-lion-king-4',
		answer: 'The Lion King - ...To Die For - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/pod-gwiazdami?in=hans-zimmer-official/sets/the-lion-king-4',
		answer: 'The Lion King - Under the Stars - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/kr-l-lwiej-skaly?in=hans-zimmer-official/sets/the-lion-king-4',
		answer: 'The Lion King - King of Pride Rock - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/elton-john/circle-of-life-from-the-lion?in=hans-zimmer-official/sets/the-lion-king-4',
		answer: 'The Lion King - Circle of Life - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/elton-john/i-just-cant-wait-to-be-king?in=hans-zimmer-official/sets/the-lion-king-4',
		answer: "The Lion King - I Just Can't Wait to Be King - Hans Zimmer",
	},
	{
		url: 'https://soundcloud.com/elton-john/can-you-feel-the-love-1?in=hans-zimmer-official/sets/the-lion-king-4',
		answer:
			'The Lion King - Can You Feel the Love Tonight (End Title) - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/spider-manmotionpicture/main-title-album-version?in=spider-manmotionpicture/sets/spider-man-original-motion',
		answer: 'Spider-Man - Main Title - Spider-Man',
	},
	{
		url: 'https://soundcloud.com/spider-manmotionpicture/transformations-album-version?in=spider-manmotionpicture/sets/spider-man-original-motion',
		answer: 'Spider-Man - Transformations - Spider-Man',
	},
	{
		url: 'https://soundcloud.com/spider-manmotionpicture/costume-montage-album-version?in=spider-manmotionpicture/sets/spider-man-original-motion',
		answer: 'Spider-Man - Costume Montage - Spider-Man',
	},
	{
		url: 'https://soundcloud.com/spider-manmotionpicture/revenge-album-version?in=spider-manmotionpicture/sets/spider-man-original-motion',
		answer: 'Spider-Man - Revenge - Spider-Man',
	},
	{
		url: 'https://soundcloud.com/spider-manmotionpicture/first-web-album-version?in=spider-manmotionpicture/sets/spider-man-original-motion',
		answer: 'Spider-Man - First Web - Spider-Man',
	},
	{
		url: 'https://soundcloud.com/spider-manmotionpicture/somethings-different-album?in=spider-manmotionpicture/sets/spider-man-original-motion',
		answer: "Spider-Man - Something's Different - Spider-Man",
	},
	{
		url: 'https://soundcloud.com/pete-anthony-official/city-montage-album-version?in=spider-manmotionpicture/sets/spider-man-original-motion',
		answer: 'Spider-Man - City Montage - Spider-Man',
	},
	{
		url: 'https://soundcloud.com/spider-manmotionpicture/alone-album-version?in=spider-manmotionpicture/sets/spider-man-original-motion',
		answer: 'Spider-Man - Alone - Spider-Man',
	},
	{
		url: 'https://soundcloud.com/spider-manmotionpicture/parade-attack-album-version?in=spider-manmotionpicture/sets/spider-man-original-motion',
		answer: 'Spider-Man - Parade Attack - Spider-Man',
	},
	{
		url: 'https://soundcloud.com/peteranthonyofficial/specter-of-the-goblin-album?in=spider-manmotionpicture/sets/spider-man-original-motion',
		answer: 'Spider-Man - Specter of the Goblin - Spider-Man',
	},
	{
		url: 'https://soundcloud.com/spider-manmotionpicture/revelation-album-version?in=spider-manmotionpicture/sets/spider-man-original-motion',
		answer: 'Spider-Man - Revelation - Spider-Man',
	},
	{
		url: 'https://soundcloud.com/peteranthonyofficial/getting-through-album-version?in=spider-manmotionpicture/sets/spider-man-original-motion',
		answer: 'Spider-Man - Getting Through - Spider-Man',
	},
	{
		url: 'https://soundcloud.com/pete-anthony-official/final-confrontation-album?in=spider-manmotionpicture/sets/spider-man-original-motion',
		answer: 'Spider-Man - Final Confrontation - Spider-Man',
	},
	{
		url: 'https://soundcloud.com/spider-manmotionpicture/farewell-album-version-1?in=spider-manmotionpicture/sets/spider-man-original-motion',
		answer: 'Spider-Man - Farewell - Spider-Man',
	},
	{
		url: 'https://soundcloud.com/pete-anthony-official/end-credits-album-version?in=spider-manmotionpicture/sets/spider-man-original-motion',
		answer: 'Spider-Man - End Credits - Spider-Man',
	},
	{
		url: 'https://soundcloud.com/harry-gregson-williams-official/the-blitz-1940-instrumental?in=harry-gregson-williams-official/sets/the-chronicles-of-narnia-the-1',
		answer:
			'The Chronicles Of Narnia: The Lion, The Witch And Wardrobe - The Blitz, 1940 - Harry Gregson-Williams',
	},
	{
		url: 'https://soundcloud.com/harry-gregson-williams-official/evacuating-london-instrumental?in=harry-gregson-williams-official/sets/the-chronicles-of-narnia-the-1',
		answer:
			'The Chronicles Of Narnia: The Lion, The Witch And Wardrobe - Evacuating London - Harry Gregson-Williams',
	},
	{
		url: 'https://soundcloud.com/harry-gregson-williams-official/the-wardrobe-instrumental?in=harry-gregson-williams-official/sets/the-chronicles-of-narnia-the-1',
		answer:
			'The Chronicles Of Narnia: The Lion, The Witch And Wardrobe - The Wardrobe - Harry Gregson-Williams',
	},
	{
		url: 'https://soundcloud.com/harry-gregson-williams-official/lucy-meets-mr-tumnus?in=harry-gregson-williams-official/sets/the-chronicles-of-narnia-the-1',
		answer:
			'The Chronicles Of Narnia: The Lion, The Witch And Wardrobe - Lucy Meets Mr. Tumnus - Harry Gregson-Williams',
	},
	{
		url: 'https://soundcloud.com/harry-gregson-williams-official/a-narnia-lullaby-instrumental?in=harry-gregson-williams-official/sets/the-chronicles-of-narnia-the-1',
		answer:
			'The Chronicles Of Narnia: The Lion, The Witch And Wardrobe - A Narnia Lullaby - Harry Gregson-Williams',
	},
	{
		url: 'https://soundcloud.com/harry-gregson-williams-official/the-white-witch-instrumental?in=harry-gregson-williams-official/sets/the-chronicles-of-narnia-the-1',
		answer:
			'The Chronicles Of Narnia: The Lion, The Witch And Wardrobe - The White Witch - Harry Gregson-Williams',
	},
	{
		url: 'https://soundcloud.com/harry-gregson-williams-official/from-western-woods-to?in=harry-gregson-williams-official/sets/the-chronicles-of-narnia-the-1',
		answer:
			'The Chronicles Of Narnia: The Lion, The Witch And Wardrobe - From Western Woods to Beaversdam - Harry Gregson-Williams',
	},
	{
		url: 'https://soundcloud.com/harry-gregson-williams-official/father-christmas-instrumental?in=harry-gregson-williams-official/sets/the-chronicles-of-narnia-the-1',
		answer:
			'The Chronicles Of Narnia: The Lion, The Witch And Wardrobe - Father Christmas - Harry Gregson-Williams',
	},
	{
		url: 'https://soundcloud.com/harry-gregson-williams-official/to-aslans-camp-instrumental?in=harry-gregson-williams-official/sets/the-chronicles-of-narnia-the-1',
		answer:
			"The Chronicles Of Narnia: The Lion, The Witch And Wardrobe - To Aslan's Camp - Harry Gregson-Williams",
	},
	{
		url: 'https://soundcloud.com/harry-gregson-williams-official/knighting-peter-instrumental?in=harry-gregson-williams-official/sets/the-chronicles-of-narnia-the-1',
		answer:
			'The Chronicles Of Narnia: The Lion, The Witch And Wardrobe - Knighting Peter - Harry Gregson-Williams',
	},
	{
		url: 'https://soundcloud.com/harry-gregson-williams-official/the-stone-table-instrumental?in=harry-gregson-williams-official/sets/the-chronicles-of-narnia-the-1',
		answer:
			'The Chronicles Of Narnia: The Lion, The Witch And Wardrobe - The Stone Table - Harry Gregson-Williams',
	},
	{
		url: 'https://soundcloud.com/harry-gregson-williams-official/the-battle-instrumental?in=harry-gregson-williams-official/sets/the-chronicles-of-narnia-the-1',
		answer:
			'The Chronicles Of Narnia: The Lion, The Witch And Wardrobe - The Battle - Harry Gregson-Williams',
	},
	{
		url: 'https://soundcloud.com/harry-gregson-williams-official/only-the-beginning-of-the?in=harry-gregson-williams-official/sets/the-chronicles-of-narnia-the-1',
		answer:
			'The Chronicles Of Narnia: The Lion, The Witch And Wardrobe - Only The Beginning of The Adventure - Harry Gregson-Williams',
	},
	{
		url: 'https://soundcloud.com/imogenheap/cant-take-it?in=harry-gregson-williams-official/sets/the-chronicles-of-narnia-the-1',
		answer:
			"The Chronicles Of Narnia: The Lion, The Witch And Wardrobe - Can't Take It In - Harry Gregson-Williams",
	},
	{
		url: 'https://soundcloud.com/lisbethscottofficial/where?in=harry-gregson-williams-official/sets/the-chronicles-of-narnia-the-1',
		answer:
			'The Chronicles Of Narnia: The Lion, The Witch And Wardrobe - Where - Harry Gregson-Williams',
	},
	// {
	// 	url: 'https://soundcloud.com/john-powell-official/raiders-return-to-busy-busy?in=john-powell-official/sets/how-to-train-your-dragon-the-1',
	// 	answer:
	// 		'How To Train Your Dragon: The Hidden World - Raiders Return to Busy, Busy Berk - John Powell',
	// },
	// {
	// 	url: 'https://soundcloud.com/john-powell-official/dinner-talk-grimmels?in=john-powell-official/sets/how-to-train-your-dragon-the-1',
	// 	answer:
	// 		"How To Train Your Dragon: The Hidden World - Dinner Talk / Grimmel's Introduction - John Powell",
	// },
	// {
	// 	url: 'https://soundcloud.com/john-powell-official/legend-has-it-cliffside?in=john-powell-official/sets/how-to-train-your-dragon-the-1',
	// 	answer:
	// 		'How To Train Your Dragon: The Hidden World - Legend Has It / Cliffside Playtime - John Powell',
	// },
	// {
	// 	url: 'https://soundcloud.com/john-powell-official/toothless-smitten?in=john-powell-official/sets/how-to-train-your-dragon-the-1',
	// 	answer:
	// 		'How To Train Your Dragon: The Hidden World - Toothless: Smitten. - John Powell',
	// },
	// {
	// 	url: 'https://soundcloud.com/john-powell-official/worst-pep-talk-ever?in=john-powell-official/sets/how-to-train-your-dragon-the-1',
	// 	answer:
	// 		'How To Train Your Dragon: The Hidden World - Worst Pep Talk Ever - John Powell',
	// },
	// {
	// 	url: 'https://soundcloud.com/john-powell-official/night-fury-killer?in=john-powell-official/sets/how-to-train-your-dragon-the-1',
	// 	answer:
	// 		'How To Train Your Dragon: The Hidden World - Night Fury Killer - John Powell',
	// },
	// {
	// 	url: 'https://soundcloud.com/john-powell-official/exodus?in=john-powell-official/sets/how-to-train-your-dragon-the-1',
	// 	answer: 'How To Train Your Dragon: The Hidden World - Exodus! - John Powell',
	// },
	// {
	// 	url: 'https://soundcloud.com/john-powell-official/third-date?in=john-powell-official/sets/how-to-train-your-dragon-the-1',
	// 	answer:
	// 		'How To Train Your Dragon: The Hidden World - Third Date - John Powell',
	// },
	// {
	// 	url: 'https://soundcloud.com/john-powell-official/new-new-tail?in=john-powell-official/sets/how-to-train-your-dragon-the-1',
	// 	answer:
	// 		"How To Train Your Dragon: The Hidden World - New 'New Tail' - John Powell",
	// },
	// {
	// 	url: 'https://soundcloud.com/john-powell-official/furies-in-love?in=john-powell-official/sets/how-to-train-your-dragon-the-1',
	// 	answer:
	// 		'How To Train Your Dragon: The Hidden World - Furies in Love - John Powell',
	// },
	// {
	// 	url: 'https://soundcloud.com/john-powell-official/killer-dragons?in=john-powell-official/sets/how-to-train-your-dragon-the-1',
	// 	answer:
	// 		'How To Train Your Dragon: The Hidden World - Killer Dragons - John Powell',
	// },
	// {
	// 	url: 'https://soundcloud.com/john-powell-official/with-love-comes-a-great?in=john-powell-official/sets/how-to-train-your-dragon-the-1',
	// 	answer:
	// 		'How To Train Your Dragon: The Hidden World - With Love Comes a Great Waterfall - John Powell',
	// },
	// {
	// 	url: 'https://soundcloud.com/john-powell-official/the-hidden-world?in=john-powell-official/sets/how-to-train-your-dragon-the-1',
	// 	answer:
	// 		'How To Train Your Dragon: The Hidden World - The Hidden World - John Powell',
	// },
	// {
	// 	url: 'https://soundcloud.com/john-powell-official/armada-battle?in=john-powell-official/sets/how-to-train-your-dragon-the-1',
	// 	answer:
	// 		'How To Train Your Dragon: The Hidden World - Armada Battle - John Powell',
	// },
	// {
	// 	url: 'https://soundcloud.com/john-powell-official/as-long-as-hes-safe?in=john-powell-official/sets/how-to-train-your-dragon-the-1',
	// 	answer:
	// 		"How To Train Your Dragon: The Hidden World - As Long As He's Safe - John Powell",
	// },
	// {
	// 	url: 'https://soundcloud.com/jonsi/together-from-afar-how-to?in=john-powell-official/sets/how-to-train-your-dragon-the-1',
	// 	answer:
	// 		'How To Train Your Dragon: The Hidden World - Together from Afar - John Powell',
	// },
	// {
	// 	url: 'https://soundcloud.com/john-powell-official/the-hidden-world-suite-bonus?in=john-powell-official/sets/how-to-train-your-dragon-the-1',
	// 	answer:
	// 		'How To Train Your Dragon: The Hidden World - The Hidden World Suite [Bonus Track] - John Powell',
	// },
	{
		url: 'https://soundcloud.com/john-powell-official/hero?in=john-powell-official/sets/kung-fu-panda-4',
		answer: 'Kung Fu Panda - Hero - John Powell',
	},
	{
		url: 'https://soundcloud.com/john-powell-official/let-the-tournament-begin?in=john-powell-official/sets/kung-fu-panda-4',
		answer: 'Kung Fu Panda - Let The Tournament Begin - John Powell',
	},
	{
		url: 'https://soundcloud.com/john-powell-official/dragon-warrior-is-among-us?in=john-powell-official/sets/kung-fu-panda-4',
		answer: 'Kung Fu Panda - Dragon Warrior Is Among Us - John Powell',
	},
	{
		url: 'https://soundcloud.com/john-powell-official/tai-lung-escapes?in=john-powell-official/sets/kung-fu-panda-4',
		answer: 'Kung Fu Panda - Tai Lung Escapes - John Powell',
	},
	{
		url: 'https://soundcloud.com/john-powell-official/peach-tree-of-wisdom?in=john-powell-official/sets/kung-fu-panda-4',
		answer: 'Kung Fu Panda - Peach Tree Of Wisdom - John Powell',
	},
	{
		url: 'https://soundcloud.com/john-powell-official/accu-flashback?in=john-powell-official/sets/kung-fu-panda-4',
		answer: 'Kung Fu Panda - Accu-flashback - John Powell',
	},
	{
		url: 'https://soundcloud.com/john-powell-official/impersonating-shifu?in=john-powell-official/sets/kung-fu-panda-4',
		answer: 'Kung Fu Panda - Impersonating Shifu - John Powell',
	},
	{
		url: 'https://soundcloud.com/john-powell-official/sacred-pool-of-tears?in=john-powell-official/sets/kung-fu-panda-4',
		answer: 'Kung Fu Panda - Sacred Pool Of Tears - John Powell',
	},
	{
		url: 'https://soundcloud.com/john-powell-official/training-po?in=john-powell-official/sets/kung-fu-panda-4',
		answer: 'Kung Fu Panda - Training Po - John Powell',
	},
	{
		url: 'https://soundcloud.com/john-powell-official/the-bridge?in=john-powell-official/sets/kung-fu-panda-4',
		answer: 'Kung Fu Panda - The Bridge - John Powell',
	},
	{
		url: 'https://soundcloud.com/john-powell-official/shifu-faces-tai-lung?in=john-powell-official/sets/kung-fu-panda-4',
		answer: 'Kung Fu Panda - Shifu Faces Tai Lung - John Powell',
	},
	{
		url: 'https://soundcloud.com/john-powell-official/the-dragon-scroll?in=john-powell-official/sets/kung-fu-panda-4',
		answer: 'Kung Fu Panda - The Dragon Scroll - John Powell',
	},
	{
		url: 'https://soundcloud.com/john-powell-official/po-vs-tai-lung?in=john-powell-official/sets/kung-fu-panda-4',
		answer: 'Kung Fu Panda - Po vs Tai Lung - John Powell',
	},
	{
		url: 'https://soundcloud.com/john-powell-official/dragon-warrior-rises?in=john-powell-official/sets/kung-fu-panda-4',
		answer: 'Kung Fu Panda - Dragon Warrior Rises - John Powell',
	},
	{
		url: 'https://soundcloud.com/john-powell-official/panda-po?in=john-powell-official/sets/kung-fu-panda-4',
		answer: 'Kung Fu Panda - Panda Po - John Powell',
	},
	{
		url: 'https://soundcloud.com/klausbadelt/fog-bound?in=klausbadelt/sets/pirates-of-the-caribbean-the-3',
		answer:
			'Pirates of the Caribbean: The Curse of the Black Pearl - Fog Bound - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/klausbadelt/the-black-pearl?in=klausbadelt/sets/pirates-of-the-caribbean-the-3',
		answer:
			'Pirates of the Caribbean: The Curse of the Black Pearl - The Black Pearl - Hans Zimmer',
	},
	// {
	// 	url: 'https://soundcloud.com/klausbadelt/will-and-elizabeth?in=klausbadelt/sets/pirates-of-the-caribbean-the-3',
	// 	answer:
	// 		'Pirates of the Caribbean: The Curse of the Black Pearl - Will And Elizabeth - Hans Zimmer',
	// },
	// {
	// 	url: 'https://soundcloud.com/klausbadelt/swords-crossed?in=klausbadelt/sets/pirates-of-the-caribbean-the-3',
	// 	answer:
	// 		'Pirates of the Caribbean: The Curse of the Black Pearl - Swords Crossed - Hans Zimmer',
	// },
	// {
	// 	url: 'https://soundcloud.com/klausbadelt/walk-the-plank?in=klausbadelt/sets/pirates-of-the-caribbean-the-3',
	// 	answer:
	// 		'Pirates of the Caribbean: The Curse of the Black Pearl - Walk The Plank - Hans Zimmer',
	// },
	// {
	// 	url: 'https://soundcloud.com/klausbadelt/barbossa-is-hungry?in=klausbadelt/sets/pirates-of-the-caribbean-the-3',
	// 	answer:
	// 		'Pirates of the Caribbean: The Curse of the Black Pearl - Barbossa Is Hungry - Hans Zimmer',
	// },
	// {
	// 	url: 'https://soundcloud.com/klausbadelt/blood-ritual?in=klausbadelt/sets/pirates-of-the-caribbean-the-3',
	// 	answer:
	// 		'Pirates of the Caribbean: The Curse of the Black Pearl - Blood Ritual - Hans Zimmer',
	// },
	// {
	// 	url: 'https://soundcloud.com/klausbadelt/moonlight-serenade?in=klausbadelt/sets/pirates-of-the-caribbean-the-3',
	// 	answer:
	// 		'Pirates of the Caribbean: The Curse of the Black Pearl - Moonlight Serenade - Hans Zimmer',
	// },
	// {
	// 	url: 'https://soundcloud.com/klausbadelt/to-the-pirates-cave?in=klausbadelt/sets/pirates-of-the-caribbean-the-3',
	// 	answer:
	// 		"Pirates of the Caribbean: The Curse of the Black Pearl - To The Pirates' Cave! - Hans Zimmer",
	// },
	// {
	// 	url: 'https://soundcloud.com/klausbadelt/skull-and-crossbones?in=klausbadelt/sets/pirates-of-the-caribbean-the-3',
	// 	answer:
	// 		'Pirates of the Caribbean: The Curse of the Black Pearl - Skull And Crossbones - Hans Zimmer',
	// },
	{
		url: 'https://soundcloud.com/klausbadelt/bootstraps-bootstraps?in=klausbadelt/sets/pirates-of-the-caribbean-the-3',
		answer:
			"Pirates of the Caribbean: The Curse of the Black Pearl - Bootstrap's Bootstraps - Hans Zimmer",
	},
	{
		url: 'https://soundcloud.com/klausbadelt/underwater-march?in=klausbadelt/sets/pirates-of-the-caribbean-the-3',
		answer:
			'Pirates of the Caribbean: The Curse of the Black Pearl - Underwater March - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/klausbadelt/one-last-shot?in=klausbadelt/sets/pirates-of-the-caribbean-the-3',
		answer:
			'Pirates of the Caribbean: The Curse of the Black Pearl - One Last Shot - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/klausbadelt/hes-a-pirate?in=klausbadelt/sets/pirates-of-the-caribbean-the-3',
		answer:
			"Pirates of the Caribbean: The Curse of the Black Pearl - He's a Pirate - Hans Zimmer",
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/star-wars-and-the-revenge-of?in=johnwilliams-official/sets/star-wars-revenge-of-the-1',
		answer:
			'Star Wars: Revenge of the Sith - Star Wars and the Revenge of the Sith - John Williams',
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/anakins-dream?in=johnwilliams-official/sets/star-wars-revenge-of-the-1',
		answer: "Star Wars: Revenge of the Sith - Anakin's Dream - John Williams",
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/battle-of-the-heroes?in=johnwilliams-official/sets/star-wars-revenge-of-the-1',
		answer:
			'Star Wars: Revenge of the Sith - Battle of the Heroes - John Williams',
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/anakins-betrayal?in=johnwilliams-official/sets/star-wars-revenge-of-the-1',
		answer: "Star Wars: Revenge of the Sith - Anakin's Betrayal - John Williams",
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/general-grievous-1?in=johnwilliams-official/sets/star-wars-revenge-of-the-1',
		answer: 'Star Wars: Revenge of the Sith - General Grievous - John Williams',
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/palpatines-teachings?in=johnwilliams-official/sets/star-wars-revenge-of-the-1',
		answer:
			"Star Wars: Revenge of the Sith - Palpatine's Teachings - John Williams",
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/grievous-and-the-droids-1?in=johnwilliams-official/sets/star-wars-revenge-of-the-1',
		answer:
			'Star Wars: Revenge of the Sith - Grievous and the Droids - John Williams',
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/padmes-ruminations?in=johnwilliams-official/sets/star-wars-revenge-of-the-1',
		answer:
			"Star Wars: Revenge of the Sith - Padmé's Ruminations - John Williams",
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/anakin-vs-obi-wan-1?in=johnwilliams-official/sets/star-wars-revenge-of-the-1',
		answer: 'Star Wars: Revenge of the Sith - Anakin vs. Obi-Wan - John Williams',
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/anakins-dark-deeds?in=johnwilliams-official/sets/star-wars-revenge-of-the-1',
		answer:
			"Star Wars: Revenge of the Sith - Anakin's Dark Deeds - John Williams",
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/enter-lord-vader-1?in=johnwilliams-official/sets/star-wars-revenge-of-the-1',
		answer: 'Star Wars: Revenge of the Sith - Enter Lord Vader - John Williams',
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/the-immolation-scene?in=johnwilliams-official/sets/star-wars-revenge-of-the-1',
		answer:
			'Star Wars: Revenge of the Sith - The Immolation Scene - John Williams',
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/grievous-speaks-to-lord-1?in=johnwilliams-official/sets/star-wars-revenge-of-the-1',
		answer:
			'Star Wars: Revenge of the Sith - Grievous Speaks to Lord Sidious - John Williams',
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/the-birth-of-the-twins-and?in=johnwilliams-official/sets/star-wars-revenge-of-the-1',
		answer:
			"Star Wars: Revenge of the Sith - The Birth of the Twins and Padmé's Destiny - John Williams",
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/a-new-hope-and-end-credits-1?in=johnwilliams-official/sets/star-wars-revenge-of-the-1',
		answer:
			'Star Wars: Revenge of the Sith - A New Hope and End Credits - John Williams',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/why-so-serious?in=hans-zimmer-official/sets/the-dark-knight-original',
		answer: 'The Dark Knight - Why so Serious? - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/im-not-a-hero?in=hans-zimmer-official/sets/the-dark-knight-original',
		answer: "The Dark Knight - I'm Not a Hero - Hans Zimmer",
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/harvey-two-face?in=hans-zimmer-official/sets/the-dark-knight-original',
		answer: 'The Dark Knight - Harvey Two-Face - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/aggressive-expansion?in=hans-zimmer-official/sets/the-dark-knight-original',
		answer: 'The Dark Knight - Aggressive Expansion - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/always-a-catch?in=hans-zimmer-official/sets/the-dark-knight-original',
		answer: 'The Dark Knight - Always a Catch - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/blood-on-my-hands?in=hans-zimmer-official/sets/the-dark-knight-original',
		answer: 'The Dark Knight - Blood on My Hands - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/a-little-push?in=hans-zimmer-official/sets/the-dark-knight-original',
		answer: 'The Dark Knight - A Little Push - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/like-a-dog-chasing-cars?in=hans-zimmer-official/sets/the-dark-knight-original',
		answer: 'The Dark Knight - Like a Dog Chasing Cars - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/i-am-the-batman?in=hans-zimmer-official/sets/the-dark-knight-original',
		answer: 'The Dark Knight - I Am the Batman - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/and-i-thought-my-jokes-were?in=hans-zimmer-official/sets/the-dark-knight-original',
		answer: 'The Dark Knight - And I Thought My Jokes Were Bad - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/agent-of-chaos?in=hans-zimmer-official/sets/the-dark-knight-original',
		answer: 'The Dark Knight - Agent of Chaos - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/introduce-a-little-anarchy?in=hans-zimmer-official/sets/the-dark-knight-original',
		answer: 'The Dark Knight - Introduce a Little Anarchy - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/watch-the-world-burn?in=hans-zimmer-official/sets/the-dark-knight-original',
		answer: 'The Dark Knight - Watch the World Burn - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/a-dark-knight?in=hans-zimmer-official/sets/the-dark-knight-original',
		answer: 'The Dark Knight - A Dark Knight - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/dream-of-arrakis?in=hans-zimmer-official/sets/dune-original-motion-picture',
		answer: 'Dune - Dream of Arrakis - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/herald-of-the-change?in=hans-zimmer-official/sets/dune-original-motion-picture',
		answer: 'Dune - Herald of the Change - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/bene-gesserit?in=hans-zimmer-official/sets/dune-original-motion-picture',
		answer: 'Dune - Bene Gesserit - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/gom-jabbar?in=hans-zimmer-official/sets/dune-original-motion-picture',
		answer: 'Dune - Gom Jabbar - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/the-one?in=hans-zimmer-official/sets/dune-original-motion-picture',
		answer: 'Dune - The One - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/leaving-caladan?in=hans-zimmer-official/sets/dune-original-motion-picture',
		answer: 'Dune - Leaving Caladan - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/arrakeen?in=hans-zimmer-official/sets/dune-original-motion-picture',
		answer: 'Dune - Arrakeen - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/ripples-in-the-sand?in=hans-zimmer-official/sets/dune-original-motion-picture',
		answer: 'Dune - Ripples in the Sand - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/visions-of-chani?in=hans-zimmer-official/sets/dune-original-motion-picture',
		answer: 'Dune - Visions of Chani - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/night-on-arrakis?in=hans-zimmer-official/sets/dune-original-motion-picture',
		answer: 'Dune - Night on Arrakis - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/armada?in=hans-zimmer-official/sets/dune-original-motion-picture',
		answer: 'Dune - Armada - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/burning-palms?in=hans-zimmer-official/sets/dune-original-motion-picture',
		answer: 'Dune - Burning Palms - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/stranded?in=hans-zimmer-official/sets/dune-original-motion-picture',
		answer: 'Dune - Stranded - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/blood-for-blood?in=hans-zimmer-official/sets/dune-original-motion-picture',
		answer: 'Dune - Blood for Blood - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/the-fall?in=hans-zimmer-official/sets/dune-original-motion-picture',
		answer: 'Dune - The Fall - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/atlanticrecords/hugh-jackman-keala-settle-zac-efron-zendaya-the-greatest-showman-ensemble-the-greatest-show?in=atlanticrecords/sets/the-greatest-showman',
		answer:
			'The Greatest Showman - Hugh Jackman, Keala Settle, Zac Efron, Zendaya & The Greatest Showman Ensemble - The Greatest Show - Atlantic Records',
	},
	{
		url: 'https://soundcloud.com/atlanticrecords/ziv-zaifman-hugh-jackman-michelle-williams-a-million-dreams?in=atlanticrecords/sets/the-greatest-showman',
		answer:
			'The Greatest Showman - Ziv Zaifman, Hugh Jackman & Michelle Williams - A Million Dreams - Atlantic Records',
	},
	{
		url: 'https://soundcloud.com/atlanticrecords/austyn-johnson-cameron-seely-hugh-jackman-a-million-dreams-reprise?in=atlanticrecords/sets/the-greatest-showman',
		answer:
			'The Greatest Showman - Austyn Johnson, Cameron Seely & Hugh Jackman - A Million Dreams (Reprise) - Atlantic Records',
	},
	{
		url: 'https://soundcloud.com/atlanticrecords/hugh-jackman-keala-settle-daniel-everidge-zendaya-the-greatest-showman-ensemble-come-alive?in=atlanticrecords/sets/the-greatest-showman',
		answer:
			'The Greatest Showman - Hugh Jackman, Keala Settle, Daniel Everidge, Zendaya & The Greatest Showman Ensemble - Come Alive - Atlantic Records',
	},
	{
		url: 'https://soundcloud.com/atlanticrecords/hugh-jackman-zac-efron-the-other-side?in=atlanticrecords/sets/the-greatest-showman',
		answer:
			'The Greatest Showman - Hugh Jackman & Zac Efron - The Other Side - Atlantic Records',
	},
	{
		url: 'https://soundcloud.com/atlanticrecords/loren-allred-never-enough?in=atlanticrecords/sets/the-greatest-showman',
		answer:
			'The Greatest Showman - Loren Allred - Never Enough - Atlantic Records',
	},
	{
		url: 'https://soundcloud.com/atlanticrecords/keala-settle-the-greatest-showman-ensemble-this-is-me?in=atlanticrecords/sets/the-greatest-showman',
		answer:
			'The Greatest Showman - Keala Settle & The Greatest Showman Ensemble - This Is Me - Atlantic Records',
	},
	{
		url: 'https://soundcloud.com/atlanticrecords/zac-efron-zendaya-rewrite-the-stars?in=atlanticrecords/sets/the-greatest-showman',
		answer:
			'The Greatest Showman - Zac Efron & Zendaya - Rewrite The Stars - Atlantic Records',
	},
	{
		url: 'https://soundcloud.com/atlanticrecords/michelle-williams-tightrope?in=atlanticrecords/sets/the-greatest-showman',
		answer:
			'The Greatest Showman - Michelle Williams - Tightrope - Atlantic Records',
	},
	{
		url: 'https://soundcloud.com/atlanticrecords/loren-allred-never-enough-reprise?in=atlanticrecords/sets/the-greatest-showman',
		answer:
			'The Greatest Showman - Loren Allred - Never Enough (Reprise) - Atlantic Records',
	},
	{
		url: 'https://soundcloud.com/atlanticrecords/hugh-jackman-the-greatest-showman-ensemble-from-now-on?in=atlanticrecords/sets/the-greatest-showman',
		answer:
			'The Greatest Showman - Hugh Jackman & The Greatest Showman Ensemble - From Now On - Atlantic Records',
	},
	{
		url: 'https://soundcloud.com/atlanticrecords/the-greatest-showman-ensemble-the-greatest-show-instrumental?in=atlanticrecords/sets/the-greatest-showman',
		answer:
			'The Greatest Showman - The Greatest Showman Ensemble - The Greatest Show [Instrumental] - Atlantic Records',
	},
	{
		url: 'https://soundcloud.com/atlanticrecords/the-greatest-showman-ensemble-a-million-dreams-instrumental?in=atlanticrecords/sets/the-greatest-showman',
		answer:
			'The Greatest Showman - The Greatest Showman Ensemble - A Million Dreams [Instrumental] - Atlantic Records',
	},
	{
		url: 'https://soundcloud.com/atlanticrecords/the-greatest-showman-ensemble-a-million-dreams-reprise-instrumental?in=atlanticrecords/sets/the-greatest-showman',
		answer:
			'The Greatest Showman - The Greatest Showman Ensemble - A Million Dreams (Reprise) [Instrumental] - Atlantic Records',
	},
	{
		url: 'https://soundcloud.com/atlanticrecords/the-greatest-showman-ensemble-come-alive-instrumental?in=atlanticrecords/sets/the-greatest-showman',
		answer:
			'The Greatest Showman - The Greatest Showman Ensemble - Come Alive [Instrumental] - Atlantic Records',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/look-to-the-stars?in=hans-zimmer-official/sets/man-of-steel-original-motion-2',
		answer: 'Man Of Steel: - Look to the Stars - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/oil-rig?in=hans-zimmer-official/sets/man-of-steel-original-motion-2',
		answer: 'Man Of Steel: - Oil Rig - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/sent-here-for-a-reason?in=hans-zimmer-official/sets/man-of-steel-original-motion-2',
		answer: 'Man Of Steel: - Sent Here for a Reason - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/dna?in=hans-zimmer-official/sets/man-of-steel-original-motion-2',
		answer: 'Man Of Steel: - DNA - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/goodbye-my-son?in=hans-zimmer-official/sets/man-of-steel-original-motion-2',
		answer: 'Man Of Steel: - Goodbye My Son - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/if-you-love-these-people?in=hans-zimmer-official/sets/man-of-steel-original-motion-2',
		answer: 'Man Of Steel: - If You Love These People - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/kryptons-last?in=hans-zimmer-official/sets/man-of-steel-original-motion-2',
		answer: "Man Of Steel: - Krypton's Last - Hans Zimmer",
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/terraforming?in=hans-zimmer-official/sets/man-of-steel-original-motion-2',
		answer: 'Man Of Steel: - Terraforming - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/tornado?in=hans-zimmer-official/sets/man-of-steel-original-motion-2',
		answer: 'Man Of Steel: - Tornado - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/you-die-or-i-do?in=hans-zimmer-official/sets/man-of-steel-original-motion-2',
		answer: 'Man Of Steel: - You Die or I Do - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/launch?in=hans-zimmer-official/sets/man-of-steel-original-motion-2',
		answer: 'Man Of Steel: - Launch - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/ignition?in=hans-zimmer-official/sets/man-of-steel-original-motion-2',
		answer: 'Man Of Steel: - Ignition - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/i-will-find-him?in=hans-zimmer-official/sets/man-of-steel-original-motion-2',
		answer: 'Man Of Steel: - I Will Find Him - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/this-is-clark-kent?in=hans-zimmer-official/sets/man-of-steel-original-motion-2',
		answer: 'Man Of Steel: - This Is Clark Kent - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/i-have-so-many-questions?in=hans-zimmer-official/sets/man-of-steel-original-motion-2',
		answer: 'Man Of Steel: - I Have So Many Questions - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/cant-fight-city-halloween?in=michael-giacchino/sets/the-batman-original-motion-1',
		answer: "The Batman - Can't Fight City Halloween - Michael Giacchino",
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/mayoral-ducting?in=michael-giacchino/sets/the-batman-original-motion-1',
		answer: 'The Batman - Mayoral Ducting - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/its-raining-vengeance?in=michael-giacchino/sets/the-batman-original-motion-1',
		answer: "The Batman - It's Raining Vengeance - Michael Giacchino",
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/dont-be-voyeur-with-me?in=michael-giacchino/sets/the-batman-original-motion-1',
		answer: "The Batman - Don't Be Voyeur with Me - Michael Giacchino",
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/crossing-the-feline?in=michael-giacchino/sets/the-batman-original-motion-1',
		answer: 'The Batman - Crossing the Feline - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/gannika-girl?in=michael-giacchino/sets/the-batman-original-motion-1',
		answer: 'The Batman - Gannika Girl - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/moving-in-for-the-gil?in=michael-giacchino/sets/the-batman-original-motion-1',
		answer: 'The Batman - Moving in for the Gil - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/funeral-and-far-between?in=michael-giacchino/sets/the-batman-original-motion-1',
		answer: 'The Batman - Funeral and Far Between - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/collar-id?in=michael-giacchino/sets/the-batman-original-motion-1',
		answer: 'The Batman - Collar ID - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/escaped-crusader?in=michael-giacchino/sets/the-batman-original-motion-1',
		answer: 'The Batman - Escaped Crusader - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/penguin-of-guilt?in=michael-giacchino/sets/the-batman-original-motion-1',
		answer: 'The Batman - Penguin of Guilt - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/highway-to-the-anger-zone?in=michael-giacchino/sets/the-batman-original-motion-1',
		answer: 'The Batman - Highway to the Anger Zone - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/worlds-worst-translator?in=michael-giacchino/sets/the-batman-original-motion-1',
		answer: "The Batman - World's Worst Translator - Michael Giacchino",
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/riddles-riddles-everywhere?in=michael-giacchino/sets/the-batman-original-motion-1',
		answer: 'The Batman - Riddles, Riddles Everywhere - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/meow-and-you-and-everyone-we?in=michael-giacchino/sets/the-batman-original-motion-1',
		answer: 'The Batman - Meow and You and Everyone We Know - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/daftpunkofficialmusic/overture?in=daftpunkofficialmusic/sets/tron-legacy-the-complete',
		answer: 'TRON: Legacy - The Complete Edition - Overture - Daft Punk',
	},
	{
		url: 'https://soundcloud.com/daftpunkofficialmusic/the-grid?in=daftpunkofficialmusic/sets/tron-legacy-the-complete',
		answer: 'TRON: Legacy - The Complete Edition - The Grid - Daft Punk',
	},
	{
		url: 'https://soundcloud.com/daftpunkofficialmusic/the-son-of-flynn?in=daftpunkofficialmusic/sets/tron-legacy-the-complete',
		answer: 'TRON: Legacy - The Complete Edition - The Son of Flynn - Daft Punk',
	},
	{
		url: 'https://soundcloud.com/daftpunkofficialmusic/recognizer?in=daftpunkofficialmusic/sets/tron-legacy-the-complete',
		answer: 'TRON: Legacy - The Complete Edition - Recognizer - Daft Punk',
	},
	{
		url: 'https://soundcloud.com/daftpunkofficialmusic/armory?in=daftpunkofficialmusic/sets/tron-legacy-the-complete',
		answer: 'TRON: Legacy - The Complete Edition - Armory - Daft Punk',
	},
	{
		url: 'https://soundcloud.com/daftpunkofficialmusic/arena?in=daftpunkofficialmusic/sets/tron-legacy-the-complete',
		answer: 'TRON: Legacy - The Complete Edition - Arena - Daft Punk',
	},
	{
		url: 'https://soundcloud.com/daftpunkofficialmusic/rinzler?in=daftpunkofficialmusic/sets/tron-legacy-the-complete',
		answer: 'TRON: Legacy - The Complete Edition - Rinzler - Daft Punk',
	},
	{
		url: 'https://soundcloud.com/daftpunkofficialmusic/the-game-has-changed?in=daftpunkofficialmusic/sets/tron-legacy-the-complete',
		answer:
			'TRON: Legacy - The Complete Edition - The Game Has Changed - Daft Punk',
	},
	{
		url: 'https://soundcloud.com/daftpunkofficialmusic/outlands?in=daftpunkofficialmusic/sets/tron-legacy-the-complete',
		answer: 'TRON: Legacy - The Complete Edition - Outlands - Daft Punk',
	},
	{
		url: 'https://soundcloud.com/daftpunkofficialmusic/adagio-for-tron?in=daftpunkofficialmusic/sets/tron-legacy-the-complete',
		answer: 'TRON: Legacy - The Complete Edition - Adagio For TRON - Daft Punk',
	},
	{
		url: 'https://soundcloud.com/daftpunkofficialmusic/nocturne?in=daftpunkofficialmusic/sets/tron-legacy-the-complete',
		answer: 'TRON: Legacy - The Complete Edition - Nocturne - Daft Punk',
	},
	{
		url: 'https://soundcloud.com/daftpunkofficialmusic/end-of-line?in=daftpunkofficialmusic/sets/tron-legacy-the-complete',
		answer: 'TRON: Legacy - The Complete Edition - End of Line - Daft Punk',
	},
	{
		url: 'https://soundcloud.com/daftpunkofficialmusic/derezzed?in=daftpunkofficialmusic/sets/tron-legacy-the-complete',
		answer: 'TRON: Legacy - The Complete Edition - Derezzed - Daft Punk',
	},
	{
		url: 'https://soundcloud.com/daftpunkofficialmusic/fall?in=daftpunkofficialmusic/sets/tron-legacy-the-complete',
		answer: 'TRON: Legacy - The Complete Edition - Fall - Daft Punk',
	},
	{
		url: 'https://soundcloud.com/daftpunkofficialmusic/solar-sailer?in=daftpunkofficialmusic/sets/tron-legacy-the-complete',
		answer: 'TRON: Legacy - The Complete Edition - Solar Sailer - Daft Punk',
	},
	{
		url: 'https://soundcloud.com/alan-menken/tritons-kingdom?in=alan-menken/sets/the-little-mermaid-original-2',
		answer: "The Little Mermaid - Triton's Kingdom - Alan Menken",
	},
	{
		url: 'https://soundcloud.com/halle_bailey/part-of-your-world-from-the?in=alan-menken/sets/the-little-mermaid-original-2',
		answer: 'The Little Mermaid - Part of Your World - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/ensemble-thelittlemermaid/fathoms-below?in=alan-menken/sets/the-little-mermaid-original-2',
		answer: 'The Little Mermaid - Fathoms Below - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/halle_bailey/part-of-your-world-reprise?in=alan-menken/sets/the-little-mermaid-original-2',
		answer: 'The Little Mermaid - Part of Your World (Reprise) - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/daveeddiggs/under-the-sea?in=alan-menken/sets/the-little-mermaid-original-2',
		answer: 'The Little Mermaid - Under the Sea - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/jonahhauer-king/wild-uncharted-waters?in=alan-menken/sets/the-little-mermaid-original-2',
		answer: 'The Little Mermaid - Wild Uncharted Waters - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/melissamccarthy-music/poor-unfortunate-souls?in=alan-menken/sets/the-little-mermaid-original-2',
		answer: 'The Little Mermaid - Poor Unfortunate Souls - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/halle_bailey/for-the-first-time?in=alan-menken/sets/the-little-mermaid-original-2',
		answer: 'The Little Mermaid - For the First Time - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/daveeddiggs/kiss-the-girl?in=alan-menken/sets/the-little-mermaid-original-2',
		answer: 'The Little Mermaid - Kiss the Girl - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/daveeddiggs/the-scuttlebutt?in=alan-menken/sets/the-little-mermaid-original-2',
		answer: 'The Little Mermaid - The Scuttlebutt - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/alan-menken/erics-decision?in=alan-menken/sets/the-little-mermaid-original-2',
		answer: "The Little Mermaid - Eric's Decision - Alan Menken",
	},
	{
		url: 'https://soundcloud.com/alan-menken/vanessas-trick?in=alan-menken/sets/the-little-mermaid-original-2',
		answer: "The Little Mermaid - Vanessa's Trick - Alan Menken",
	},
	{
		url: 'https://soundcloud.com/halle_bailey/part-of-your-world-reprise-ii?in=alan-menken/sets/the-little-mermaid-original-2',
		answer: 'The Little Mermaid - Part of Your World (Reprise II) - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/alan-menken/kiss-the-girl-island-band?in=alan-menken/sets/the-little-mermaid-original-2',
		answer:
			'The Little Mermaid - Kiss the Girl (Island Band Reprise) - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/alan-menken/finale?in=alan-menken/sets/the-little-mermaid-original-2',
		answer: 'The Little Mermaid - Finale - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/oliviafoai/tulou-tagaloa?in=mark-mancina-official/sets/moana-10',
		answer: 'Moana - Tulou Tagaloa - Mark Mancina',
	},
	{
		url: 'https://soundcloud.com/vaimahina/an-innocent-warrior?in=mark-mancina-official/sets/moana-10',
		answer: 'Moana - An Innocent Warrior - Mark Mancina',
	},
	{
		url: 'https://soundcloud.com/christopherjacksonofficial/where-you-are-1?in=mark-mancina-official/sets/moana-10',
		answer: 'Moana - Where You Are - Mark Mancina',
	},
	{
		url: 'https://soundcloud.com/auliicravalho/how-far-ill-go?in=mark-mancina-official/sets/moana-10',
		answer: "Moana - How Far I'll Go - Mark Mancina",
	},
	{
		url: 'https://soundcloud.com/lin-manuelmiranda/we-know-the-way-from-moana?in=mark-mancina-official/sets/moana-10',
		answer: 'Moana - We Know The Way (From "Oceania") - Mark Mancina',
	},
	{
		url: 'https://soundcloud.com/auliicravalho/how-far-ill-go-reprise?in=mark-mancina-official/sets/moana-10',
		answer: "Moana - How Far I'll Go (Reprise) - Mark Mancina",
	},
	{
		url: 'https://soundcloud.com/dwaynejohnsonofficial/youre-welcome?in=mark-mancina-official/sets/moana-10',
		answer: "Moana - You're Welcome - Mark Mancina",
	},
	{
		url: 'https://soundcloud.com/jemaine-clement-official/shiny?in=mark-mancina-official/sets/moana-10',
		answer: 'Moana - Shiny - Mark Mancina',
	},
	{
		url: 'https://soundcloud.com/oliviafoai/logo-te-pate?in=mark-mancina-official/sets/moana-10',
		answer: 'Moana - Logo Te Pate - Mark Mancina',
	},
	{
		url: 'https://soundcloud.com/rachelhouseofficial/i-am-moana-song-of-the?in=mark-mancina-official/sets/moana-10',
		answer: 'Moana - I Am Moana (Song of the Ancestors) - Mark Mancina',
	},
	{
		url: 'https://soundcloud.com/auliicravalho/know-who-you-are?in=mark-mancina-official/sets/moana-10',
		answer: 'Moana - Know Who You Are - Mark Mancina',
	},
	{
		url: 'https://soundcloud.com/lin-manuelmiranda/we-know-the-way-finale?in=mark-mancina-official/sets/moana-10',
		answer: 'Moana - We Know The Way (Finale) - Mark Mancina',
	},
	{
		url: 'https://soundcloud.com/alessiacara/how-far-ill-go-alessia-cara?in=mark-mancina-official/sets/moana-10',
		answer: "Moana - How Far I'll Go (Alessia Cara Version) - Mark Mancina",
	},
	{
		url: 'https://soundcloud.com/jordan_fisher-2/youre-welcome-jordan-fisher?in=mark-mancina-official/sets/moana-10',
		answer:
			"Moana - You're Welcome (Jordan Fisher/Lin-Manuel Miranda Version) - Mark Mancina",
	},
	{
		url: 'https://soundcloud.com/mark-mancina-official/prologue?in=mark-mancina-official/sets/moana-10',
		answer: 'Moana - Prologue - Mark Mancina',
	},
	{
		url: 'https://soundcloud.com/briantyler/super-mario-bros-opus?in=briantyler/sets/the-super-mario-bros-movie-1',
		answer: 'The Super Mario Bros. Movie - Super Mario Bros. Opus - Brian Tyler',
	},
	{
		url: 'https://soundcloud.com/briantyler/press-start?in=briantyler/sets/the-super-mario-bros-movie-1',
		answer: 'The Super Mario Bros. Movie - Press Start - Brian Tyler',
	},
	{
		url: 'https://soundcloud.com/briantyler/king-of-the-koopas?in=briantyler/sets/the-super-mario-bros-movie-1',
		answer: 'The Super Mario Bros. Movie - King of the Koopas - Brian Tyler',
	},
	{
		url: 'https://soundcloud.com/briantyler/plumbin-aint-easy?in=briantyler/sets/the-super-mario-bros-movie-1',
		answer: "The Super Mario Bros. Movie - Plumbin' Ain't Easy - Brian Tyler",
	},
	{
		url: 'https://soundcloud.com/briantyler/its-a-dog-eat-plumber-world?in=briantyler/sets/the-super-mario-bros-movie-1',
		answer:
			'The Super Mario Bros. Movie - It’s a Dog Eat Plumber World - Brian Tyler',
	},
	{
		url: 'https://soundcloud.com/briantyler/saving-brooklyn?in=briantyler/sets/the-super-mario-bros-movie-1',
		answer: 'The Super Mario Bros. Movie - Saving Brooklyn - Brian Tyler',
	},
	{
		url: 'https://soundcloud.com/briantyler/the-warp-pipe?in=briantyler/sets/the-super-mario-bros-movie-1',
		answer: 'The Super Mario Bros. Movie - The Warp Pipe - Brian Tyler',
	},
	{
		url: 'https://soundcloud.com/briantyler/strange-new-world?in=briantyler/sets/the-super-mario-bros-movie-1',
		answer: 'The Super Mario Bros. Movie - Strange New World - Brian Tyler',
	},
	{
		url: 'https://soundcloud.com/briantyler/the-darklands?in=briantyler/sets/the-super-mario-bros-movie-1',
		answer: 'The Super Mario Bros. Movie - The Darklands - Brian Tyler',
	},
	{
		url: 'https://soundcloud.com/briantyler/welcome-to-the-mushroom?in=briantyler/sets/the-super-mario-bros-movie-1',
		answer:
			'The Super Mario Bros. Movie - Welcome to the Mushroom Kingdom - Brian Tyler',
	},
	{
		url: 'https://soundcloud.com/briantyler/2-player-game?in=briantyler/sets/the-super-mario-bros-movie-1',
		answer: 'The Super Mario Bros. Movie - 2 Player Game - Brian Tyler',
	},
	{
		url: 'https://soundcloud.com/briantyler/the-mushroom-council?in=briantyler/sets/the-super-mario-bros-movie-1',
		answer: 'The Super Mario Bros. Movie - The Mushroom Council - Brian Tyler',
	},
	{
		url: 'https://soundcloud.com/briantyler/the-plumber-and-the-peach?in=briantyler/sets/the-super-mario-bros-movie-1',
		answer:
			'The Super Mario Bros. Movie - The Plumber and the Peach - Brian Tyler',
	},
	{
		url: 'https://soundcloud.com/briantyler/platforming-princess?in=briantyler/sets/the-super-mario-bros-movie-1',
		answer: 'The Super Mario Bros. Movie - Platforming Princess - Brian Tyler',
	},
	{
		url: 'https://soundcloud.com/briantyler/world-1-1?in=briantyler/sets/the-super-mario-bros-movie-1',
		answer: 'The Super Mario Bros. Movie - World 1-1 - Brian Tyler',
	},
	{
		url: 'https://soundcloud.com/john-carpenter-official/where-is-jeremy?in=john-carpenter-official/sets/halloween-ends-original-motion',
		answer: 'Halloween Ends - Where is Jeremy? - John Carpenter',
	},
	{
		url: 'https://soundcloud.com/john-carpenter-official/halloween-ends-main-title?in=john-carpenter-official/sets/halloween-ends-original-motion',
		answer: 'Halloween Ends - Halloween Ends (Main Title) - John Carpenter',
	},
	{
		url: 'https://soundcloud.com/john-carpenter-official/lauries-theme-ends?in=john-carpenter-official/sets/halloween-ends-original-motion',
		answer: "Halloween Ends - Laurie's Theme Ends - John Carpenter",
	},
	{
		url: 'https://soundcloud.com/john-carpenter-official/the-cave?in=john-carpenter-official/sets/halloween-ends-original-motion',
		answer: 'Halloween Ends - The Cave - John Carpenter',
	},
	{
		url: 'https://soundcloud.com/john-carpenter-official/cool-kid?in=john-carpenter-official/sets/halloween-ends-original-motion',
		answer: 'Halloween Ends - Cool Kid - John Carpenter',
	},
	{
		url: 'https://soundcloud.com/john-carpenter-official/drags-to-the-cave?in=john-carpenter-official/sets/halloween-ends-original-motion',
		answer: 'Halloween Ends - Drags to the Cave - John Carpenter',
	},
	{
		url: 'https://soundcloud.com/john-carpenter-official/evil-eyes?in=john-carpenter-official/sets/halloween-ends-original-motion',
		answer: 'Halloween Ends - Evil Eyes - John Carpenter',
	},
	{
		url: 'https://soundcloud.com/john-carpenter-official/transformation?in=john-carpenter-official/sets/halloween-ends-original-motion',
		answer: 'Halloween Ends - Transformation - John Carpenter',
	},
	{
		url: 'https://soundcloud.com/john-carpenter-official/because-of-you?in=john-carpenter-official/sets/halloween-ends-original-motion',
		answer: 'Halloween Ends - Because of You - John Carpenter',
	},
	{
		url: 'https://soundcloud.com/john-carpenter-official/requiem-for-jeremy?in=john-carpenter-official/sets/halloween-ends-original-motion',
		answer: 'Halloween Ends - Requiem For Jeremy - John Carpenter',
	},
	{
		url: 'https://soundcloud.com/john-carpenter-official/kill-the-cop?in=john-carpenter-official/sets/halloween-ends-original-motion',
		answer: 'Halloween Ends - Kill The Cop - John Carpenter',
	},
	{
		url: 'https://soundcloud.com/john-carpenter-official/corey-and-michael?in=john-carpenter-official/sets/halloween-ends-original-motion',
		answer: 'Halloween Ends - Corey and Michael - John Carpenter',
	},
	{
		url: 'https://soundcloud.com/john-carpenter-official/coreys-requiem?in=john-carpenter-official/sets/halloween-ends-original-motion',
		answer: 'Halloween Ends - Corey’s Requiem - John Carpenter',
	},
	{
		url: 'https://soundcloud.com/john-carpenter-official/the-junk-yard?in=john-carpenter-official/sets/halloween-ends-original-motion',
		answer: 'Halloween Ends - The Junk Yard - John Carpenter',
	},
	{
		url: 'https://soundcloud.com/john-carpenter-official/where-are-you?in=john-carpenter-official/sets/halloween-ends-original-motion',
		answer: 'Halloween Ends - Where Are You? - John Carpenter',
	},
	{
		url: 'https://soundcloud.com/watertowermusic/01-mydearfrodo-90secclip?in=watertowermusic/sets/the-hobbit-an-unexpected',
		answer: 'The Hobbit: An Unexpected Journey - My Dear Frodo - Howard Shore',
	},
	{
		url: 'https://soundcloud.com/watertowermusic/02-oldfriends-90secclip?in=watertowermusic/sets/the-hobbit-an-unexpected',
		answer: 'The Hobbit: An Unexpected Journey - Old Friends - Howard Shore',
	},
	{
		url: 'https://soundcloud.com/watertowermusic/03-anunexpectedparty-90secclip?in=watertowermusic/sets/the-hobbit-an-unexpected',
		answer:
			'The Hobbit: An Unexpected Journey - An Unexpected Party - Howard Shore',
	},
	{
		url: 'https://soundcloud.com/watertowermusic/04-blunttheknives-90secclip?in=watertowermusic/sets/the-hobbit-an-unexpected',
		answer: 'The Hobbit: An Unexpected Journey - Blunt The Knives - Howard Shore',
	},
	{
		url: 'https://soundcloud.com/watertowermusic/06-mistymountains-90secclip?in=watertowermusic/sets/the-hobbit-an-unexpected',
		answer: 'The Hobbit: An Unexpected Journey - Misty Mountains - Howard Shore',
	},
	{
		url: 'https://soundcloud.com/watertowermusic/07-theadventurebegins?in=watertowermusic/sets/the-hobbit-an-unexpected',
		answer:
			'The Hobbit: An Unexpected Journey - The Adventure Begins - Howard Shore',
	},
	{
		url: 'https://soundcloud.com/watertowermusic/08-theworldisahead-90secclip?in=watertowermusic/sets/the-hobbit-an-unexpected',
		answer:
			'The Hobbit: An Unexpected Journey - The World Is Ahead - Howard Shore',
	},
	{
		url: 'https://soundcloud.com/watertowermusic/09-anancientenemy-90secclip?in=watertowermusic/sets/the-hobbit-an-unexpected',
		answer: 'The Hobbit: An Unexpected Journey - An Ancient Enemy - Howard Shore',
	},
	{
		url: 'https://soundcloud.com/watertowermusic/10-radagastthebrown-90secclip?in=watertowermusic/sets/the-hobbit-an-unexpected',
		answer:
			'The Hobbit: An Unexpected Journey - Radagast The Brown - Howard Shore',
	},
	{
		url: 'https://soundcloud.com/watertowermusic/11-thetrollshaws-90secclip?in=watertowermusic/sets/the-hobbit-an-unexpected',
		answer: 'The Hobbit: An Unexpected Journey - The Trollshaws - Howard Shore',
	},
	{
		url: 'https://soundcloud.com/watertowermusic/12-roastmutton-90secclip?in=watertowermusic/sets/the-hobbit-an-unexpected',
		answer: 'The Hobbit: An Unexpected Journey - Roast Mutton - Howard Shore',
	},
	{
		url: 'https://soundcloud.com/watertowermusic/13-atrollhoard-90secclip?in=watertowermusic/sets/the-hobbit-an-unexpected',
		answer: 'The Hobbit: An Unexpected Journey - A Troll-hoard - Howard Shore',
	},
	{
		url: 'https://soundcloud.com/watertowermusic/14-thehillofsorcery-90secclip?in=watertowermusic/sets/the-hobbit-an-unexpected',
		answer:
			'The Hobbit: An Unexpected Journey - The Hill Of Sorcery - Howard Shore',
	},
	{
		url: 'https://soundcloud.com/watertowermusic/15-wargscouts-90secclip?in=watertowermusic/sets/the-hobbit-an-unexpected',
		answer: 'The Hobbit: An Unexpected Journey - Warg-scouts - Howard Shore',
	},
	{
		url: 'https://soundcloud.com/watertowermusic/16-thehiddenvalley-90secclip?in=watertowermusic/sets/the-hobbit-an-unexpected',
		answer:
			'The Hobbit: An Unexpected Journey - The Hidden Valley - Howard Shore',
	},
	{
		url: 'https://soundcloud.com/lildurk/spinnin-feat-est-gee?in=fast-furious-the-fast-saga/sets/fast-x-original-motion-picture',
		answer: "Fast X - Spinnin' (feat. EST Gee) - Fast & Furious: The Fast Saga",
	},
	{
		url: 'https://soundcloud.com/antidamenace/get-it?in=fast-furious-the-fast-saga/sets/fast-x-original-motion-picture',
		answer: 'Fast X - Get It - Fast & Furious: The Fast Saga',
	},
	{
		url: 'https://soundcloud.com/dermot-kennedy-777714337/wont-back-down-feat-youngboy?in=fast-furious-the-fast-saga/sets/fast-x-original-motion-picture',
		answer:
			'Fast X - Won’t Back Down (feat. YoungBoy Never Broke Again, Dermot Kennedy & Bailey Zimmerman) - Fast & Furious: The Fast Saga',
	},
	{
		url: 'https://soundcloud.com/jimin-995/angel-pt-1-feat-jimin-of-bts-1?in=fast-furious-the-fast-saga/sets/fast-x-original-motion-picture',
		answer:
			'Fast X - Angel Pt. 1 (feat. Jimin of BTS, JVKE & Muni Long) - Fast & Furious: The Fast Saga',
	},
	{
		url: 'https://soundcloud.com/gherbo/my-city-feat-24kgoldn-kane?in=fast-furious-the-fast-saga/sets/fast-x-original-motion-picture',
		answer: 'Fast X - My City (feat. G Herbo) - Fast & Furious: The Fast Saga',
	},
	{
		url: 'https://soundcloud.com/fridayy1/countin-on-you-feat-lil-tjay?in=fast-furious-the-fast-saga/sets/fast-x-original-motion-picture',
		answer:
			"Fast X - Countin' On You (feat. Lil Tjay) - Fast & Furious: The Fast Saga",
	},
	{
		url: 'https://soundcloud.com/bigcootie/supafly-feat-bigxthaplug?in=fast-furious-the-fast-saga/sets/fast-x-original-motion-picture',
		answer:
			'Fast X - Supafly (feat. BigXthaPlug) - Fast & Furious: The Fast Saga',
	},
	{
		url: 'https://soundcloud.com/peezy-team-eastside/peezy-babytron-reaper-feat?in=fast-furious-the-fast-saga/sets/fast-x-original-motion-picture',
		answer:
			'Fast X - Peezy, BabyTron, Fast & Furious: The Fast Saga - Reaper (feat. Babyface Ray) - Fast & Furious: The Fast Saga',
	},
	{
		url: 'https://soundcloud.com/nlechoppa/nle-choppa-nardo-wick-steppers?in=fast-furious-the-fast-saga/sets/fast-x-original-motion-picture',
		answer:
			'Fast X - NLE Choppa, Nardo Wick, Fast & Furious: The Fast Saga - Steppers - Fast & Furious: The Fast Saga',
	},
	{
		url: 'https://soundcloud.com/kordhell/9-in-my-hand-fast-x-remix?in=fast-furious-the-fast-saga/sets/fast-x-original-motion-picture',
		answer:
			'Fast X - 9 In My Hand (FAST X Remix) - Fast & Furious: The Fast Saga',
	},
	{
		url: 'https://soundcloud.com/g59/datura?in=fast-furious-the-fast-saga/sets/fast-x-original-motion-picture',
		answer: 'Fast X - Datura - Fast & Furious: The Fast Saga',
	},
	{
		url: 'https://soundcloud.com/bia/bia-furious?in=fast-furious-the-fast-saga/sets/fast-x-original-motion-picture',
		answer:
			'Fast X - BIA, Fast & Furious: The Fast Saga - Furious - Fast & Furious: The Fast Saga',
	},
	{
		url: 'https://soundcloud.com/j-balvin-official/toretto?in=fast-furious-the-fast-saga/sets/fast-x-original-motion-picture',
		answer: 'Fast X - Toretto - Fast & Furious: The Fast Saga',
	},
	{
		url: 'https://soundcloud.com/mariabecerra/te-cura?in=fast-furious-the-fast-saga/sets/fast-x-original-motion-picture',
		answer:
			'Fast X - Maria Becerra, Fast & Furious: The Fast Saga - Te Cura - Fast & Furious: The Fast Saga',
	},
	{
		url: 'https://soundcloud.com/justinquiles/justin-quiles-dalex-sigue-la?in=fast-furious-the-fast-saga/sets/fast-x-original-motion-picture',
		answer:
			'Fast X - Justin Quiles, Dalex, Fast & Furious: The Fast Saga - Sigue La Fiesta (feat. Santa Fe Klan) - Fast & Furious: The Fast Saga',
	},
	{
		url: 'https://soundcloud.com/son-lux/this-is-a-life-extended?in=son-lux/sets/everything-everywhere-all-at',
		answer:
			'Everything Everywhere All at Once - This Is A Life (Extended) - Son Lux',
	},
	{
		url: 'https://soundcloud.com/son-lux/wang-family-portrait?in=son-lux/sets/everything-everywhere-all-at',
		answer: 'Everything Everywhere All at Once - Wang Family Portrait - Son Lux',
	},
	{
		url: 'https://soundcloud.com/son-lux/very-busy?in=son-lux/sets/everything-everywhere-all-at',
		answer: 'Everything Everywhere All at Once - Very Busy - Son Lux',
	},
	{
		url: 'https://soundcloud.com/son-lux/vvvery-busy?in=son-lux/sets/everything-everywhere-all-at',
		answer: 'Everything Everywhere All at Once - Vvvery Busy - Son Lux',
	},
	{
		url: 'https://soundcloud.com/son-lux/what-are-you-thinking-about?in=son-lux/sets/everything-everywhere-all-at',
		answer:
			'Everything Everywhere All at Once - What Are You Thinking About? - Son Lux',
	},
	{
		url: 'https://soundcloud.com/son-lux/what-a-fast-elevator?in=son-lux/sets/everything-everywhere-all-at',
		answer: 'Everything Everywhere All at Once - What a Fast Elevator! - Son Lux',
	},
	{
		url: 'https://soundcloud.com/son-lux/switch-shoes-to-the-wrong-feet?in=son-lux/sets/everything-everywhere-all-at',
		answer:
			'Everything Everywhere All at Once - Switch Shoes to the Wrong Feet - Son Lux',
	},
	{
		url: 'https://soundcloud.com/son-lux/nothing-could-possibly-matter?in=son-lux/sets/everything-everywhere-all-at',
		answer:
			'Everything Everywhere All at Once - Nothing Could Possibly Matter More - Son Lux',
	},
	{
		url: 'https://soundcloud.com/son-lux/a-choice?in=son-lux/sets/everything-everywhere-all-at',
		answer: 'Everything Everywhere All at Once - A Choice - Son Lux',
	},
	{
		url: 'https://soundcloud.com/son-lux/chapstick?in=son-lux/sets/everything-everywhere-all-at',
		answer: 'Everything Everywhere All at Once - Chapstick - Son Lux',
	},
	{
		url: 'https://soundcloud.com/son-lux/the-fanny-pack?in=son-lux/sets/everything-everywhere-all-at',
		answer: 'Everything Everywhere All at Once - The Fanny Pack - Son Lux',
	},
	{
		url: 'https://soundcloud.com/son-lux/jobu-tupaki?in=son-lux/sets/everything-everywhere-all-at',
		answer:
			'Everything Everywhere All at Once - Jobu Tupaki (feat. Nina Moffitt) - Son Lux',
	},
	{
		url: 'https://soundcloud.com/son-lux/the-alphaverse?in=son-lux/sets/everything-everywhere-all-at',
		answer: 'Everything Everywhere All at Once - The Alphaverse - Son Lux',
	},
	{
		url: 'https://soundcloud.com/son-lux/the-mission?in=son-lux/sets/everything-everywhere-all-at',
		answer: 'Everything Everywhere All at Once - The Mission - Son Lux',
	},
	{
		url: 'https://soundcloud.com/son-lux/deirdre-fight?in=son-lux/sets/everything-everywhere-all-at',
		answer: 'Everything Everywhere All at Once - Deirdre Fight - Son Lux',
	},
	// {
	// 	url: 'https://soundcloud.com/theweeknd/the-weeknd-nothing-is-lost-you?in=simon-franglen/sets/avatar-the-way-of-water-1',
	// 	answer:
	// 		'Avatar: The Way of Water - The Weeknd - Nothing Is Lost (You Give Me Strength) - Simon Franglen',
	// },
	// {
	// 	url: 'https://soundcloud.com/simon-franglen/into-the-water?in=simon-franglen/sets/avatar-the-way-of-water-1',
	// 	answer: 'Avatar: The Way of Water - Into the Water - Simon Franglen',
	// },
	// {
	// 	url: 'https://soundcloud.com/simon-franglen/happiness-is-simple?in=simon-franglen/sets/avatar-the-way-of-water-1',
	// 	answer: 'Avatar: The Way of Water - Happiness Is Simple - Simon Franglen',
	// },
	// {
	// 	url: 'https://soundcloud.com/simon-franglen/a-new-star?in=simon-franglen/sets/avatar-the-way-of-water-1',
	// 	answer: 'Avatar: The Way of Water - A New Star - Simon Franglen',
	// },
	// {
	// 	url: 'https://soundcloud.com/simon-franglen/converging-paths?in=simon-franglen/sets/avatar-the-way-of-water-1',
	// 	answer: 'Avatar: The Way of Water - Converging Paths - Simon Franglen',
	// },
	// {
	// 	url: 'https://soundcloud.com/simon-franglen/rescue-and-loss?in=simon-franglen/sets/avatar-the-way-of-water-1',
	// 	answer: 'Avatar: The Way of Water - Rescue and Loss - Simon Franglen',
	// },
	// {
	// 	url: 'https://soundcloud.com/simon-franglen/family-is-our-fortress?in=simon-franglen/sets/avatar-the-way-of-water-1',
	// 	answer: 'Avatar: The Way of Water - Family Is Our Fortress - Simon Franglen',
	// },
	// {
	// 	url: 'https://soundcloud.com/simon-franglen/hometree?in=simon-franglen/sets/avatar-the-way-of-water-1',
	// 	answer: 'Avatar: The Way of Water - Leaving Home - Simon Franglen',
	// },
	// {
	// 	url: 'https://soundcloud.com/simon-franglen/the-way-of-water?in=simon-franglen/sets/avatar-the-way-of-water-1',
	// 	answer: 'Avatar: The Way of Water - The Way of Water - Simon Franglen',
	// },
	// {
	// 	url: 'https://soundcloud.com/simon-franglen/payakan?in=simon-franglen/sets/avatar-the-way-of-water-1',
	// 	answer: 'Avatar: The Way of Water - Payakan - Simon Franglen',
	// },
	// {
	// 	url: 'https://soundcloud.com/simon-franglen/mighty-eywa?in=simon-franglen/sets/avatar-the-way-of-water-1',
	// 	answer: 'Avatar: The Way of Water - Mighty Eywa - Simon Franglen',
	// },
	// {
	// 	url: 'https://soundcloud.com/simon-franglen/friends?in=simon-franglen/sets/avatar-the-way-of-water-1',
	// 	answer: 'Avatar: The Way of Water - Friends - Simon Franglen',
	// },
	// {
	// 	url: 'https://soundcloud.com/simon-franglen/cove-of-the-ancestors?in=simon-franglen/sets/avatar-the-way-of-water-1',
	// 	answer: 'Avatar: The Way of Water - Cove of the Ancestors - Simon Franglen',
	// },
	// {
	// 	url: 'https://soundcloud.com/simon-franglen/the-tulkun-return?in=simon-franglen/sets/avatar-the-way-of-water-1',
	// 	answer: 'Avatar: The Way of Water - The Tulkun Return - Simon Franglen',
	// },
	// {
	// 	url: 'https://soundcloud.com/simon-franglen/the-hunt?in=simon-franglen/sets/avatar-the-way-of-water-1',
	// 	answer: 'Avatar: The Way of Water - The Hunt - Simon Franglen',
	// },
	{
		url: 'https://soundcloud.com/nikki-blonsky/good-morning-baltimore?in=juliasuttonofficial/sets/hairspray-soundtrack-to-the',
		answer: 'Hairspray - Good Morning Baltimore - Marc Shaiman',
	},
	{
		url: 'https://soundcloud.com/james-marsden-official/the-nicest-kids-in-town?in=juliasuttonofficial/sets/hairspray-soundtrack-to-the',
		answer: 'Hairspray - The Nicest Kids In Town - Marc Shaiman',
	},
	{
		url: 'https://soundcloud.com/zac-efron-official/it-takes-two-hairspray?in=juliasuttonofficial/sets/hairspray-soundtrack-to-the',
		answer: 'Hairspray - It Takes Two - Marc Shaiman',
	},
	{
		url: 'https://soundcloud.com/michelle-pfeiffer-official/the-legend-of-miss-baltimore?in=juliasuttonofficial/sets/hairspray-soundtrack-to-the',
		answer: 'Hairspray - (The Legend Of) Miss Baltimore Crabs - Marc Shaiman',
	},
	{
		url: 'https://soundcloud.com/nikki-blonsky/i-can-hear-the-bells-hairspray?in=juliasuttonofficial/sets/hairspray-soundtrack-to-the',
		answer: 'Hairspray - I Can Hear The Bells - Marc Shaiman',
	},
	{
		url: 'https://soundcloud.com/zac-efron-official/ladies-choice-hairspray?in=juliasuttonofficial/sets/hairspray-soundtrack-to-the',
		answer: "Hairspray - Ladies' Choice - Marc Shaiman",
	},
	{
		url: 'https://soundcloud.com/brittanysnowofficial/the-new-girl-in-town-hairspray?in=juliasuttonofficial/sets/hairspray-soundtrack-to-the',
		answer: 'Hairspray - The New Girl In Town - Marc Shaiman',
	},
	{
		url: 'https://soundcloud.com/nikki-blonsky/welcome-to-the-60s-hairspray?in=juliasuttonofficial/sets/hairspray-soundtrack-to-the',
		answer: "Hairspray - Welcome To The 60's - Marc Shaiman",
	},
	{
		url: 'https://soundcloud.com/elijah-kelley-official/run-and-tell-that-hairspray?in=juliasuttonofficial/sets/hairspray-soundtrack-to-the',
		answer: 'Hairspray - Run And Tell That - Marc Shaiman',
	},
	{
		url: 'https://soundcloud.com/queenlatifahofficial/big-blonde-and-beautiful?in=juliasuttonofficial/sets/hairspray-soundtrack-to-the',
		answer: 'Hairspray - Big, Blonde and Beautiful - Marc Shaiman',
	},
	{
		url: 'https://soundcloud.com/john-travolta-official/big-blonde-and-beautiful?in=juliasuttonofficial/sets/hairspray-soundtrack-to-the',
		answer: 'Hairspray - Big, Blonde and Beautiful (Reprise) - Marc Shaiman',
	},
	{
		url: 'https://soundcloud.com/john-travolta-official/youre-timeless-to-me-hairspray?in=juliasuttonofficial/sets/hairspray-soundtrack-to-the',
		answer: "Hairspray - (You're) Timeless To Me - Marc Shaiman",
	},
	{
		url: 'https://soundcloud.com/queenlatifahofficial/i-know-where-youve-been?in=juliasuttonofficial/sets/hairspray-soundtrack-to-the',
		answer: "Hairspray - I Know Where I've Been - Marc Shaiman",
	},
	{
		url: 'https://soundcloud.com/zac-efron-official/without-love-hairspray?in=juliasuttonofficial/sets/hairspray-soundtrack-to-the',
		answer: 'Hairspray - Without Love - Marc Shaiman',
	},
	{
		url: 'https://soundcloud.com/james-marsden-official/its-hairspray-hairspray?in=juliasuttonofficial/sets/hairspray-soundtrack-to-the',
		answer: "Hairspray - (It's) Hairspray - Marc Shaiman",
	},
	{
		url: 'https://soundcloud.com/dina-wahba/01-danny-elfman-main-titles?in=samantha-allen-400865081/sets/corpse-bride',
		answer:
			"Tim Burton's Corpse Bride - 01 - Danny Elfman - Main Titles - Samantha Allen",
	},
	{
		url: 'https://soundcloud.com/adventure_time_dorkster/corpse-bride-according-to-plan?in=samantha-allen-400865081/sets/corpse-bride',
		answer:
			"Tim Burton's Corpse Bride - Corpse Bride - According To Plan - Samantha Allen",
	},
	{
		url: 'https://soundcloud.com/pablito-miguel-lopez/the-corpse-bride-victors-piano?in=samantha-allen-400865081/sets/corpse-bride',
		answer:
			"Tim Burton's Corpse Bride - The Corpse Bride - Victor's Piano Solo - Samantha Allen",
	},
	{
		url: 'https://soundcloud.com/matt-cather-564759520/tim-burtons-corpse-bride-die-die-we-all-pass-away-remains-of-the-day-rcqxl4ae84w-youtube?in=samantha-allen-400865081/sets/corpse-bride',
		answer:
			"Tim Burton's Corpse Bride - Tim Burton's Corpse Bride - Die Die, We All Pass Away (Remains Of The Day) RCQxl4Ae84w Youtube - Samantha Allen",
	},
	{
		url: 'https://soundcloud.com/cath-gil/casting-a-spell?in=samantha-allen-400865081/sets/corpse-bride',
		answer: "Tim Burton's Corpse Bride - Casting A Spell - Samantha Allen",
	},
	{
		url: 'https://soundcloud.com/troth-3/07-emilys-moon-dance?in=samantha-allen-400865081/sets/corpse-bride',
		answer:
			"Tim Burton's Corpse Bride - 07 - Emily's Moon Dance - Samantha Allen",
	},
	{
		url: 'https://soundcloud.com/user-976097667/the-corpse-bride-tears-to-shed-lyrics?in=samantha-allen-400865081/sets/corpse-bride',
		answer:
			"Tim Burton's Corpse Bride - The Corpse Bride Tears To Shed Lyrics - Samantha Allen",
	},
	{
		url: 'https://soundcloud.com/dina-wahba/11-danny-elfman-the-piano-duet?in=samantha-allen-400865081/sets/corpse-bride',
		answer:
			"Tim Burton's Corpse Bride - 11 - Danny Elfman - The Piano Duet - Samantha Allen",
	},
	{
		url: 'https://soundcloud.com/user-460515374/the-wedding-song-corpse-bride?in=samantha-allen-400865081/sets/corpse-bride',
		answer:
			"Tim Burton's Corpse Bride - The Wedding Song - Corpse Bride - Samantha Allen",
	},
	{
		url: 'https://soundcloud.com/cath-gil/barkiss-bummer?in=samantha-allen-400865081/sets/corpse-bride',
		answer: "Tim Burton's Corpse Bride - Barkis's Bummer - Samantha Allen",
	},
	{
		url: 'https://soundcloud.com/kreasoft/the-finale-danny-elfman?in=samantha-allen-400865081/sets/corpse-bride',
		answer:
			"Tim Burton's Corpse Bride - The finale Danny Elfman - Samantha Allen",
	},
	{
		url: 'https://soundcloud.com/dina-wahba/19-danny-elfman-end-credits?in=samantha-allen-400865081/sets/corpse-bride',
		answer:
			"Tim Burton's Corpse Bride - 19 - Danny Elfman - End Credits Part 1 - Samantha Allen",
	},
	{
		url: 'https://soundcloud.com/tyler-bates-official/big-wick-energy?in=tyler-bates-official/sets/john-wick-chapter-4-original-1',
		answer: 'John Wick: Chapter 4 - Big Wick Energy - Tyler Bates',
	},
	{
		url: 'https://soundcloud.com/lolacolette/nowhere-to-run?in=tyler-bates-official/sets/john-wick-chapter-4-original-1',
		answer: 'John Wick: Chapter 4 - Nowhere to Run - Tyler Bates',
	},
	{
		url: 'https://soundcloud.com/tyler-bates-official/sand-wick?in=tyler-bates-official/sets/john-wick-chapter-4-original-1',
		answer: 'John Wick: Chapter 4 - Sand Wick - Tyler Bates',
	},
	{
		url: 'https://soundcloud.com/tyler-bates-official/killing-the-elder?in=tyler-bates-official/sets/john-wick-chapter-4-original-1',
		answer: 'John Wick: Chapter 4 - Change Your Nature - Tyler Bates',
	},
	{
		url: 'https://soundcloud.com/tyler-bates-official/hotel-condemned?in=tyler-bates-official/sets/john-wick-chapter-4-original-1',
		answer: 'John Wick: Chapter 4 - Continental Breakfast - Tyler Bates',
	},
	{
		url: 'https://soundcloud.com/tyler-bates-official/wick-in-osaka?in=tyler-bates-official/sets/john-wick-chapter-4-original-1',
		answer: 'John Wick: Chapter 4 - Wick in Osaka - Tyler Bates',
	},
	{
		url: 'https://soundcloud.com/tyler-bates-official/high-table-in-osaka?in=tyler-bates-official/sets/john-wick-chapter-4-original-1',
		answer: 'John Wick: Chapter 4 - High Table in Osaka - Tyler Bates',
	},
	{
		url: 'https://soundcloud.com/tyler-bates-official/a-grave-accusation?in=tyler-bates-official/sets/john-wick-chapter-4-original-1',
		answer: 'John Wick: Chapter 4 - A Grave Accusation - Tyler Bates',
	},
	{
		url: 'https://soundcloud.com/tyler-bates-official/grief-on-a-train?in=tyler-bates-official/sets/john-wick-chapter-4-original-1',
		answer: 'John Wick: Chapter 4 - Grief on a Train - Tyler Bates',
	},
	{
		url: 'https://soundcloud.com/inthismomentofficial/i-would-die-for-you-1?in=tyler-bates-official/sets/john-wick-chapter-4-original-1',
		answer: 'John Wick: Chapter 4 - I Would Die for You - Tyler Bates',
	},
	{
		url: 'https://soundcloud.com/tyler-bates-official/of-mincing-men?in=tyler-bates-official/sets/john-wick-chapter-4-original-1',
		answer: 'John Wick: Chapter 4 - Of Mincing & Men - Tyler Bates',
	},
	{
		url: 'https://soundcloud.com/tyler-bates-official/a-grave-situation?in=tyler-bates-official/sets/john-wick-chapter-4-original-1',
		answer: 'John Wick: Chapter 4 - A Grave Situation - Tyler Bates',
	},
	{
		url: 'https://soundcloud.com/tyler-bates-official/to-get-back-in?in=tyler-bates-official/sets/john-wick-chapter-4-original-1',
		answer: 'John Wick: Chapter 4 - To Get Back In - Tyler Bates',
	},
	{
		url: 'https://soundcloud.com/tyler-bates-official/killas-teeth?in=tyler-bates-official/sets/john-wick-chapter-4-original-1',
		answer: 'John Wick: Chapter 4 - Killa’s Teeth - Tyler Bates',
	},
	{
		url: 'https://soundcloud.com/tyler-bates-official/ambition-and-worth?in=tyler-bates-official/sets/john-wick-chapter-4-original-1',
		answer: 'John Wick: Chapter 4 - Ambition and Worth - Tyler Bates',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/bury-the-hatchling?in=michael-giacchino/sets/jurassic-world-original-1',
		answer: 'Jurassic World - Bury the Hatchling - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/the-family-that-strays?in=michael-giacchino/sets/jurassic-world-original-1',
		answer:
			'Jurassic World - The Family That Strays Together - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/welcome-to-jurassic-world?in=michael-giacchino/sets/jurassic-world-original-1',
		answer: 'Jurassic World - Welcome to Jurassic World - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/as-the-jurassic-world-turns?in=michael-giacchino/sets/jurassic-world-original-1',
		answer: 'Jurassic World - As the Jurassic World Turns - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/clearly-his-first-rodeo?in=michael-giacchino/sets/jurassic-world-original-1',
		answer: 'Jurassic World - Clearly His First Rodeo - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/owen-you-nothing?in=michael-giacchino/sets/jurassic-world-original-1',
		answer: 'Jurassic World - Owen You Nothing - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/indominus-wrecks?in=michael-giacchino/sets/jurassic-world-original-1',
		answer: 'Jurassic World - Indominus Wrecks - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/gyrosphere-of-influence?in=michael-giacchino/sets/jurassic-world-original-1',
		answer: 'Jurassic World - Gyrosphere of Influence - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/pavane-for-a-dead-apatosaurus?in=michael-giacchino/sets/jurassic-world-original-1',
		answer: 'Jurassic World - Pavane for a Dead Apatosaurus - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/fits-and-jumpstarts?in=michael-giacchino/sets/jurassic-world-original-1',
		answer: 'Jurassic World - Fits and Jumpstarts - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/the-dimorphodon-shuffle?in=michael-giacchino/sets/jurassic-world-original-1',
		answer: 'Jurassic World - The Dimorphodon Shuffle - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/love-in-the-time-of?in=michael-giacchino/sets/jurassic-world-original-1',
		answer:
			'Jurassic World - Love In the Time of Pterosauria - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/chasing-the-dragons?in=michael-giacchino/sets/jurassic-world-original-1',
		answer: 'Jurassic World - Chasing the Dragons - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/raptor-your-heart-out?in=michael-giacchino/sets/jurassic-world-original-1',
		answer: 'Jurassic World - Raptor Your Heart Out - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/costa-rican-standoff?in=michael-giacchino/sets/jurassic-world-original-1',
		answer: 'Jurassic World - Costa Rican Standoff - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/danny-elfman-official/wonkas-welcome-song-1?in=danny-elfman-official/sets/charlie-and-the-chocolate-5',
		answer:
			"Charlie And The Chocolate Factory - Wonka's Welcome Song - Danny Elfman",
	},
	{
		url: 'https://soundcloud.com/danny-elfman-official/augustus-gloop-1?in=danny-elfman-official/sets/charlie-and-the-chocolate-5',
		answer: 'Charlie And The Chocolate Factory - Augustus Gloop - Danny Elfman',
	},
	{
		url: 'https://soundcloud.com/danny-elfman-official/violet-beauregarde-1?in=danny-elfman-official/sets/charlie-and-the-chocolate-5',
		answer:
			'Charlie And The Chocolate Factory - Violet Beauregarde - Danny Elfman',
	},
	{
		url: 'https://soundcloud.com/danny-elfman-official/veruca-salt-1?in=danny-elfman-official/sets/charlie-and-the-chocolate-5',
		answer: 'Charlie And The Chocolate Factory - Veruca Salt - Danny Elfman',
	},
	{
		url: 'https://soundcloud.com/danny-elfman-official/mike-teavee-1?in=danny-elfman-official/sets/charlie-and-the-chocolate-5',
		answer: 'Charlie And The Chocolate Factory - Mike Teavee - Danny Elfman',
	},
	{
		url: 'https://soundcloud.com/danny-elfman-official/main-titles-charlie-and-the?in=danny-elfman-official/sets/charlie-and-the-chocolate-5',
		answer: 'Charlie And The Chocolate Factory - Main Titles - Danny Elfman',
	},
	{
		url: 'https://soundcloud.com/danny-elfman-official/wonkas-first-shop-1?in=danny-elfman-official/sets/charlie-and-the-chocolate-5',
		answer:
			"Charlie And The Chocolate Factory - Wonka's First Shop - Danny Elfman",
	},
	{
		url: 'https://soundcloud.com/danny-elfman-official/the-indian-palace-1?in=danny-elfman-official/sets/charlie-and-the-chocolate-5',
		answer:
			'Charlie And The Chocolate Factory - The Indian Palace - Danny Elfman',
	},
	{
		url: 'https://soundcloud.com/danny-elfman-official/wheels-in-motion-2?in=danny-elfman-official/sets/charlie-and-the-chocolate-5',
		answer: 'Charlie And The Chocolate Factory - Wheels In Motion - Danny Elfman',
	},
	{
		url: 'https://soundcloud.com/danny-elfman-official/charlies-birthday-bar-1?in=danny-elfman-official/sets/charlie-and-the-chocolate-5',
		answer:
			"Charlie And The Chocolate Factory - Charlie's Birthday Bar - Danny Elfman",
	},
	{
		url: 'https://soundcloud.com/danny-elfman-official/the-golden-ticket-factory-1?in=danny-elfman-official/sets/charlie-and-the-chocolate-5',
		answer:
			'Charlie And The Chocolate Factory - The Golden Ticket/Factory - Danny Elfman',
	},
	{
		url: 'https://soundcloud.com/danny-elfman-official/chocolate-explorers-1?in=danny-elfman-official/sets/charlie-and-the-chocolate-5',
		answer:
			'Charlie And The Chocolate Factory - Chocolate Explorers - Danny Elfman',
	},
	{
		url: 'https://soundcloud.com/danny-elfman-official/loompa-land-1?in=danny-elfman-official/sets/charlie-and-the-chocolate-5',
		answer: 'Charlie And The Chocolate Factory - Loompa Land - Danny Elfman',
	},
	{
		url: 'https://soundcloud.com/danny-elfman-official/the-boat-arrives-1?in=danny-elfman-official/sets/charlie-and-the-chocolate-5',
		answer: 'Charlie And The Chocolate Factory - The Boat Arrives - Danny Elfman',
	},
	{
		url: 'https://soundcloud.com/danny-elfman-official/the-river-cruise-1?in=danny-elfman-official/sets/charlie-and-the-chocolate-5',
		answer: 'Charlie And The Chocolate Factory - The River Cruise - Danny Elfman',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/the-mole?in=hans-zimmer-official/sets/dunkirk-original-motion',
		answer: 'Dunkirk - The Mole - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/we-need-our-army-back?in=hans-zimmer-official/sets/dunkirk-original-motion',
		answer: 'Dunkirk - We Need Our Army Back - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/shivering-soldier?in=hans-zimmer-official/sets/dunkirk-original-motion',
		answer: 'Dunkirk - Shivering Soldier - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/supermarine?in=hans-zimmer-official/sets/dunkirk-original-motion',
		answer: 'Dunkirk - Supermarine - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/the-tide?in=hans-zimmer-official/sets/dunkirk-original-motion',
		answer: 'Dunkirk - The Tide - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/regimental-brothers?in=hans-zimmer-official/sets/dunkirk-original-motion',
		answer: 'Dunkirk - Regimental Brothers - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/impulse?in=hans-zimmer-official/sets/dunkirk-original-motion',
		answer: 'Dunkirk - Impulse - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/home-2?in=hans-zimmer-official/sets/dunkirk-original-motion',
		answer: 'Dunkirk - Home - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/the-oil?in=hans-zimmer-official/sets/dunkirk-original-motion',
		answer: 'Dunkirk - The Oil - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/benjamin-wallfisch-official/variation-15-dunkirk?in=hans-zimmer-official/sets/dunkirk-original-motion',
		answer: 'Dunkirk - Variation 15 - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/benjamin-wallfisch-official/end-titles-dunkirk?in=hans-zimmer-official/sets/dunkirk-original-motion',
		answer: 'Dunkirk - End Titles - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/stephaniebeatriz/the-family-madrigal?in=germainefranco-music/sets/encanto-original-motion',
		answer: 'Encanto - The Family Madrigal - Germaine Franco',
	},
	{
		url: 'https://soundcloud.com/stephaniebeatriz/waiting-on-a-miracle?in=germainefranco-music/sets/encanto-original-motion',
		answer: 'Encanto - Waiting On A Miracle - Germaine Franco',
	},
	{
		url: 'https://soundcloud.com/jessicadarrow/surface-pressure?in=germainefranco-music/sets/encanto-original-motion',
		answer: 'Encanto - Surface Pressure - Germaine Franco',
	},
	{
		url: 'https://soundcloud.com/carolinagaitan-music/we-dont-talk-about-bruno?in=germainefranco-music/sets/encanto-original-motion',
		answer: "Encanto - We Don't Talk About Bruno - Germaine Franco",
	},
	{
		url: 'https://soundcloud.com/dianeguerrero-music/what-else-can-i-do?in=germainefranco-music/sets/encanto-original-motion',
		answer: 'Encanto - What Else Can I Do? - Germaine Franco',
	},
	{
		url: 'https://soundcloud.com/sebastianyatra/sebastian-yatra-dos-oruguitas?in=germainefranco-music/sets/encanto-original-motion',
		answer: 'Encanto - Sebastián Yatra - Dos Oruguitas - Germaine Franco',
	},
	{
		url: 'https://soundcloud.com/stephaniebeatriz/all-of-you?in=germainefranco-music/sets/encanto-original-motion',
		answer: 'Encanto - All Of You - Germaine Franco',
	},
	{
		url: 'https://soundcloud.com/germainefranco-music/hola-casita?in=germainefranco-music/sets/encanto-original-motion',
		answer: 'Encanto - ¡Hola Casita! - Germaine Franco',
	},
	{
		url: 'https://soundcloud.com/carlos-vives-official/colombia-mi-encanto?in=germainefranco-music/sets/encanto-original-motion',
		answer: 'Encanto - Carlos Vives - Colombia, Mi Encanto - Germaine Franco',
	},
	{
		url: 'https://soundcloud.com/sebastianyatra/sebastian-yatra-two-oruguitas?in=germainefranco-music/sets/encanto-original-motion',
		answer: 'Encanto - Sebastián Yatra - Two Oruguitas - Germaine Franco',
	},
	{
		url: 'https://soundcloud.com/germainefranco-music/oeffne-die-augen?in=germainefranco-music/sets/encanto-original-motion',
		answer: 'Encanto - Abre Los Ojos - Germaine Franco',
	},
	{
		url: 'https://soundcloud.com/germainefranco-music/poznajcie-nasz-rodzin?in=germainefranco-music/sets/encanto-original-motion',
		answer: 'Encanto - Meet La Familia - Germaine Franco',
	},
	{
		url: 'https://soundcloud.com/germainefranco-music/ich-brauche-dich?in=germainefranco-music/sets/encanto-original-motion',
		answer: 'Encanto - I Need You - Germaine Franco',
	},
	{
		url: 'https://soundcloud.com/germainefranco-music/la-voix-dantonio?in=germainefranco-music/sets/encanto-original-motion',
		answer: "Encanto - Antonio's Voice - Germaine Franco",
	},
	{
		url: 'https://soundcloud.com/germainefranco-music/el-baile-madrigal?in=germainefranco-music/sets/encanto-original-motion',
		answer: 'Encanto - El Baile Madrigal - Germaine Franco',
	},
	{
		url: 'https://soundcloud.com/lalalandcast/another-day-of-sun?in=justin-hurwitz/sets/la-la-land-9',
		answer: 'La La Land - Another Day Of Sun - Justin Hurwitz',
	},
	{
		url: 'https://soundcloud.com/lalalandcast/someone-in-the-crowd?in=justin-hurwitz/sets/la-la-land-9',
		answer: 'La La Land - Someone In The Crowd - Justin Hurwitz',
	},
	{
		url: 'https://soundcloud.com/justin-hurwitz/mia-sebastians-theme?in=justin-hurwitz/sets/la-la-land-9',
		answer: 'La La Land - Mia & Sebastian’s Theme - Justin Hurwitz',
	},
	{
		url: 'https://soundcloud.com/lalalandcast/a-lovely-night?in=justin-hurwitz/sets/la-la-land-9',
		answer: 'La La Land - A Lovely Night - Justin Hurwitz',
	},
	{
		url: 'https://soundcloud.com/justin-hurwitz/hermans-habit?in=justin-hurwitz/sets/la-la-land-9',
		answer: 'La La Land - Herman’s Habit - Justin Hurwitz',
	},
	{
		url: 'https://soundcloud.com/lalalandcast/city-of-stars-pier?in=justin-hurwitz/sets/la-la-land-9',
		answer: 'La La Land - City Of Stars - Justin Hurwitz',
	},
	{
		url: 'https://soundcloud.com/justin-hurwitz/planetarium?in=justin-hurwitz/sets/la-la-land-9',
		answer: 'La La Land - Planetarium - Justin Hurwitz',
	},
	{
		url: 'https://soundcloud.com/justin-hurwitz/summer-montage-madeline?in=justin-hurwitz/sets/la-la-land-9',
		answer: 'La La Land - Summer Montage / Madeline - Justin Hurwitz',
	},
	{
		url: 'https://soundcloud.com/lalalandcast/city-of-stars-1?in=justin-hurwitz/sets/la-la-land-9',
		answer: 'La La Land - City Of Stars - Justin Hurwitz',
	},
	{
		url: 'https://soundcloud.com/johnlegend/start-a-fire?in=justin-hurwitz/sets/la-la-land-9',
		answer: 'La La Land - John Legend - Start A Fire - Justin Hurwitz',
	},
	{
		url: 'https://soundcloud.com/justin-hurwitz/engagement-party?in=justin-hurwitz/sets/la-la-land-9',
		answer: 'La La Land - Engagement Party - Justin Hurwitz',
	},
	{
		url: 'https://soundcloud.com/lalalandcast/audition-the-fools-who-dream-1?in=justin-hurwitz/sets/la-la-land-9',
		answer: 'La La Land - Audition (The Fools Who Dream) - Justin Hurwitz',
	},
	{
		url: 'https://soundcloud.com/justin-hurwitz/epilogue?in=justin-hurwitz/sets/la-la-land-9',
		answer: 'La La Land - Epilogue - Justin Hurwitz',
	},
	{
		url: 'https://soundcloud.com/justin-hurwitz/the-end?in=justin-hurwitz/sets/la-la-land-9',
		answer: 'La La Land - The End - Justin Hurwitz',
	},
	{
		url: 'https://soundcloud.com/justin-hurwitz/city-of-stars-humming?in=justin-hurwitz/sets/la-la-land-9',
		answer:
			'La La Land - City Of Stars (Humming) [feat. Emma Stone] - Justin Hurwitz',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/obliviate?in=alexandre-desplat-official/sets/harry-potter-the-deathly-1',
		answer:
			'Harry Potter and the Deathly Hallows, Pt. 1 - Obliviate - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/snape-to-malfoy-manor?in=alexandre-desplat-official/sets/harry-potter-the-deathly-1',
		answer:
			'Harry Potter and the Deathly Hallows, Pt. 1 - Snape to Malfoy Manor - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/polyjuice-potion?in=alexandre-desplat-official/sets/harry-potter-the-deathly-1',
		answer:
			'Harry Potter and the Deathly Hallows, Pt. 1 - Polyjuice Potion - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/sky-battle?in=alexandre-desplat-official/sets/harry-potter-the-deathly-1',
		answer:
			'Harry Potter and the Deathly Hallows, Pt. 1 - Sky Battle - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/at-the-burrow?in=alexandre-desplat-official/sets/harry-potter-the-deathly-1',
		answer:
			'Harry Potter and the Deathly Hallows, Pt. 1 - At The Burrow - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/harry-and-ginny?in=alexandre-desplat-official/sets/harry-potter-the-deathly-1',
		answer:
			'Harry Potter and the Deathly Hallows, Pt. 1 - Harry and Ginny - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/the-will?in=alexandre-desplat-official/sets/harry-potter-the-deathly-1',
		answer:
			'Harry Potter and the Deathly Hallows, Pt. 1 - The Will - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/death-eaters?in=alexandre-desplat-official/sets/harry-potter-the-deathly-1',
		answer:
			'Harry Potter and the Deathly Hallows, Pt. 1 - Death Eaters - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/dobby?in=alexandre-desplat-official/sets/harry-potter-the-deathly-1',
		answer:
			'Harry Potter and the Deathly Hallows, Pt. 1 - Dobby - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/ministry-of-magic?in=alexandre-desplat-official/sets/harry-potter-the-deathly-1',
		answer:
			'Harry Potter and the Deathly Hallows, Pt. 1 - Ministry of Magic - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/detonators?in=alexandre-desplat-official/sets/harry-potter-the-deathly-1',
		answer:
			'Harry Potter and the Deathly Hallows, Pt. 1 - Detonators - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/the-locket?in=alexandre-desplat-official/sets/harry-potter-the-deathly-1',
		answer:
			'Harry Potter and the Deathly Hallows, Pt. 1 - The Locket - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/fireplaces-escape?in=alexandre-desplat-official/sets/harry-potter-the-deathly-1',
		answer:
			'Harry Potter and the Deathly Hallows, Pt. 1 - Fireplaces Escape - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/ron-leaves?in=alexandre-desplat-official/sets/harry-potter-the-deathly-1',
		answer:
			'Harry Potter and the Deathly Hallows, Pt. 1 - Ron Leaves - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/the-exodus?in=alexandre-desplat-official/sets/harry-potter-the-deathly-1',
		answer:
			'Harry Potter and the Deathly Hallows, Pt. 1 - The Exodus - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/godrics-hollow-graveyard?in=alexandre-desplat-official/sets/harry-potter-the-deathly-1',
		answer:
			"Harry Potter and the Deathly Hallows, Pt. 1 - Godric's Hollow Graveyard - Alexandre Desplat",
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/bathilda-bagshot?in=alexandre-desplat-official/sets/harry-potter-the-deathly-1',
		answer:
			'Harry Potter and the Deathly Hallows, Pt. 1 - Bathilda Bagshot - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/hermiones-parents?in=alexandre-desplat-official/sets/harry-potter-the-deathly-1',
		answer:
			"Harry Potter and the Deathly Hallows, Pt. 1 - Hermione's Parents - Alexandre Desplat",
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/destroying-the-locket?in=alexandre-desplat-official/sets/harry-potter-the-deathly-1',
		answer:
			'Harry Potter and the Deathly Hallows, Pt. 1 - Destroying the Locket - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/rons-speech?in=alexandre-desplat-official/sets/harry-potter-the-deathly-1',
		answer:
			"Harry Potter and the Deathly Hallows, Pt. 1 - Ron's Speech - Alexandre Desplat",
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/lovegood?in=alexandre-desplat-official/sets/harry-potter-the-deathly-1',
		answer:
			'Harry Potter and the Deathly Hallows, Pt. 1 - Lovegood - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/the-deathly-hallows?in=alexandre-desplat-official/sets/harry-potter-the-deathly-1',
		answer:
			'Harry Potter and the Deathly Hallows, Pt. 1 - The Deathly Hallows - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/captured-and-tortured?in=alexandre-desplat-official/sets/harry-potter-the-deathly-1',
		answer:
			'Harry Potter and the Deathly Hallows, Pt. 1 - Captured and Tortured - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/rescuing-hermione?in=alexandre-desplat-official/sets/harry-potter-the-deathly-1',
		answer:
			'Harry Potter and the Deathly Hallows, Pt. 1 - Rescuing Hermione - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/farewell-to-dobby?in=alexandre-desplat-official/sets/harry-potter-the-deathly-1',
		answer:
			'Harry Potter and the Deathly Hallows, Pt. 1 - Farewell to Dobby - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/the-elder-wand?in=alexandre-desplat-official/sets/harry-potter-the-deathly-1',
		answer:
			'Harry Potter and the Deathly Hallows, Pt. 1 - The Elder Wand - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alan-silvestri/back-to-back-court-house?in=alan-silvestri/sets/back-to-the-future-part-iii',
		answer:
			'Back To The Future Part III: 25th Anniversary Edition - Back To Back / Court House - Alan Silvestri',
	},
	{
		url: 'https://soundcloud.com/alan-silvestri/main-title?in=alan-silvestri/sets/back-to-the-future-part-iii',
		answer:
			'Back To The Future Part III: 25th Anniversary Edition - Main Title - Alan Silvestri',
	},
	{
		url: 'https://soundcloud.com/alan-silvestri/into-the-mine-tombstone-its-me?in=alan-silvestri/sets/back-to-the-future-part-iii',
		answer:
			"Back To The Future Part III: 25th Anniversary Edition - Into The Mine / Tombstone / It's Me - Alan Silvestri",
	},
	{
		url: 'https://soundcloud.com/alan-silvestri/warmed-up?in=alan-silvestri/sets/back-to-the-future-part-iii',
		answer:
			'Back To The Future Part III: 25th Anniversary Edition - Warmed Up - Alan Silvestri',
	},
	{
		url: 'https://soundcloud.com/alan-silvestri/indians-film-version?in=alan-silvestri/sets/back-to-the-future-part-iii',
		answer:
			'Back To The Future Part III: 25th Anniversary Edition - Indians (Film Version) - Alan Silvestri',
	},
	{
		url: 'https://soundcloud.com/alan-silvestri/safe-and-sound?in=alan-silvestri/sets/back-to-the-future-part-iii',
		answer:
			'Back To The Future Part III: 25th Anniversary Edition - Safe And Sound - Alan Silvestri',
	},
	{
		url: 'https://soundcloud.com/alan-silvestri/hill-valley?in=alan-silvestri/sets/back-to-the-future-part-iii',
		answer:
			'Back To The Future Part III: 25th Anniversary Edition - Hill Valley - Alan Silvestri',
	},
	{
		url: 'https://soundcloud.com/alan-silvestri/the-hanging?in=alan-silvestri/sets/back-to-the-future-part-iii',
		answer:
			'Back To The Future Part III: 25th Anniversary Edition - The Hanging - Alan Silvestri',
	},
	{
		url: 'https://soundcloud.com/alan-silvestri/were-out-of-gas-1?in=alan-silvestri/sets/back-to-the-future-part-iii',
		answer:
			"Back To The Future Part III: 25th Anniversary Edition - We're Out Of Gas - Alan Silvestri",
	},
	{
		url: 'https://soundcloud.com/alan-silvestri/there-is-no-bridge-doc-to-the?in=alan-silvestri/sets/back-to-the-future-part-iii',
		answer:
			'Back To The Future Part III: 25th Anniversary Edition - There Is No Bridge / Doc To The Rescue - Alan Silvestri',
	},
	{
		url: 'https://soundcloud.com/alan-silvestri/at-first-sight?in=alan-silvestri/sets/back-to-the-future-part-iii',
		answer:
			'Back To The Future Part III: 25th Anniversary Edition - At First Sight - Alan Silvestri',
	},
	{
		url: 'https://soundcloud.com/alan-silvestri/yellow?in=alan-silvestri/sets/back-to-the-future-part-iii',
		answer:
			'Back To The Future Part III: 25th Anniversary Edition - Yellow - Alan Silvestri',
	},
	{
		url: 'https://soundcloud.com/alan-silvestri/the-kiss?in=alan-silvestri/sets/back-to-the-future-part-iii',
		answer:
			'Back To The Future Part III: 25th Anniversary Edition - The Kiss - Alan Silvestri',
	},
	{
		url: 'https://soundcloud.com/alan-silvestri/you-talkin-to-me?in=alan-silvestri/sets/back-to-the-future-part-iii',
		answer:
			"Back To The Future Part III: 25th Anniversary Edition - You Talkin' To Me? - Alan Silvestri",
	},
	{
		url: 'https://soundcloud.com/alan-silvestri/the-future-isnt-written-1?in=alan-silvestri/sets/back-to-the-future-part-iii',
		answer:
			"Back To The Future Part III: 25th Anniversary Edition - The Future Isn't Written - Alan Silvestri",
	},
	{
		url: 'https://soundcloud.com/howard-shore-official/prologue-one-ring-to-rule-them?in=howard-shore-official/sets/the-lord-of-the-rings-the-4',
		answer:
			'The Lord of the Rings: The Fellowship of the Ring - Prologue: One Ring to Rule Them All - Howard Shore',
	},
	{
		url: 'https://soundcloud.com/howard-shore-official/the-shire?in=howard-shore-official/sets/the-lord-of-the-rings-the-4',
		answer:
			'The Lord of the Rings: The Fellowship of the Ring - The Shire - Howard Shore',
	},
	{
		url: 'https://soundcloud.com/howard-shore-official/bag-end?in=howard-shore-official/sets/the-lord-of-the-rings-the-4',
		answer:
			'The Lord of the Rings: The Fellowship of the Ring - Bag End - Howard Shore',
	},
	{
		url: 'https://soundcloud.com/howard-shore-official/very-old-friends?in=howard-shore-official/sets/the-lord-of-the-rings-the-4',
		answer:
			'The Lord of the Rings: The Fellowship of the Ring - Very Old Friends - Howard Shore',
	},
	{
		url: 'https://soundcloud.com/howard-shore-official/flaming-red-hair?in=howard-shore-official/sets/the-lord-of-the-rings-the-4',
		answer:
			'The Lord of the Rings: The Fellowship of the Ring - Flaming Red Hair - Howard Shore',
	},
	{
		url: 'https://soundcloud.com/howard-shore-official/farewell-dear-bilbo?in=howard-shore-official/sets/the-lord-of-the-rings-the-4',
		answer:
			'The Lord of the Rings: The Fellowship of the Ring - Farewell Dear Bilbo - Howard Shore',
	},
	{
		url: 'https://soundcloud.com/howard-shore-official/keep-it-secret-keep-it-safe?in=howard-shore-official/sets/the-lord-of-the-rings-the-4',
		answer:
			'The Lord of the Rings: The Fellowship of the Ring - Keep It Secret, Keep It Safe - Howard Shore',
	},
	{
		url: 'https://soundcloud.com/howard-shore-official/a-conspiracy-unmasked?in=howard-shore-official/sets/the-lord-of-the-rings-the-4',
		answer:
			'The Lord of the Rings: The Fellowship of the Ring - A Conspiracy Unmasked - Howard Shore',
	},
	{
		url: 'https://soundcloud.com/howard-shore-official/three-is-company?in=howard-shore-official/sets/the-lord-of-the-rings-the-4',
		answer:
			'The Lord of the Rings: The Fellowship of the Ring - Three Is Company - Howard Shore',
	},
	{
		url: 'https://soundcloud.com/howard-shore-official/the-passing-of-the-elves?in=howard-shore-official/sets/the-lord-of-the-rings-the-4',
		answer:
			'The Lord of the Rings: The Fellowship of the Ring - The Passing of the Elves - Howard Shore',
	},
	{
		url: 'https://soundcloud.com/howard-shore-official/saruman-the-white?in=howard-shore-official/sets/the-lord-of-the-rings-the-4',
		answer:
			'The Lord of the Rings: The Fellowship of the Ring - Saruman the White - Howard Shore',
	},
	{
		url: 'https://soundcloud.com/howard-shore-official/a-shortcut-to-mushrooms?in=howard-shore-official/sets/the-lord-of-the-rings-the-4',
		answer:
			'The Lord of the Rings: The Fellowship of the Ring - A Shortcut to Mushrooms - Howard Shore',
	},
	{
		url: 'https://soundcloud.com/howard-shore-official/strider?in=howard-shore-official/sets/the-lord-of-the-rings-the-4',
		answer:
			'The Lord of the Rings: The Fellowship of the Ring - Strider - Howard Shore',
	},
	{
		url: 'https://soundcloud.com/howard-shore-official/the-nazgul?in=howard-shore-official/sets/the-lord-of-the-rings-the-4',
		answer:
			'The Lord of the Rings: The Fellowship of the Ring - The Nazgûl - Howard Shore',
	},
	{
		url: 'https://soundcloud.com/howard-shore-official/weathertop?in=howard-shore-official/sets/the-lord-of-the-rings-the-4',
		answer:
			'The Lord of the Rings: The Fellowship of the Ring - Weathertop - Howard Shore',
	},
	{
		url: 'https://soundcloud.com/lisa-gerrard-official/progeny?in=lisa-gerrard-official/sets/gladiator-music-from-the-1',
		answer: 'Gladiator - Progeny - Lisa Gerrard',
	},
	{
		url: 'https://soundcloud.com/lisa-gerrard-official/the-wheat?in=lisa-gerrard-official/sets/gladiator-music-from-the-1',
		answer: 'Gladiator - The Wheat - Lisa Gerrard',
	},
	{
		url: 'https://soundcloud.com/lisa-gerrard-official/the-battle?in=lisa-gerrard-official/sets/gladiator-music-from-the-1',
		answer: 'Gladiator - The Battle - Lisa Gerrard',
	},
	{
		url: 'https://soundcloud.com/lisa-gerrard-official/earth-from-gladiator?in=lisa-gerrard-official/sets/gladiator-music-from-the-1',
		answer: 'Gladiator - Earth - Lisa Gerrard',
	},
	{
		url: 'https://soundcloud.com/lisa-gerrard-official/sorrow?in=lisa-gerrard-official/sets/gladiator-music-from-the-1',
		answer: 'Gladiator - Sorrow - Lisa Gerrard',
	},
	{
		url: 'https://soundcloud.com/lisa-gerrard-official/to-zuccabar?in=lisa-gerrard-official/sets/gladiator-music-from-the-1',
		answer: 'Gladiator - To Zuccabar - Lisa Gerrard',
	},
	{
		url: 'https://soundcloud.com/lisa-gerrard-official/patricide?in=lisa-gerrard-official/sets/gladiator-music-from-the-1',
		answer: 'Gladiator - Patricide - Lisa Gerrard',
	},
	{
		url: 'https://soundcloud.com/lisa-gerrard-official/the-emperor-is-dead?in=lisa-gerrard-official/sets/gladiator-music-from-the-1',
		answer: 'Gladiator - The Emperor Is Dead - Lisa Gerrard',
	},
	{
		url: 'https://soundcloud.com/lisa-gerrard-official/the-might-of-rome?in=lisa-gerrard-official/sets/gladiator-music-from-the-1',
		answer: 'Gladiator - The Might of Rome - Lisa Gerrard',
	},
	{
		url: 'https://soundcloud.com/lisa-gerrard-official/strength-and-honor?in=lisa-gerrard-official/sets/gladiator-music-from-the-1',
		answer: 'Gladiator - Strength And Honor - Lisa Gerrard',
	},
	{
		url: 'https://soundcloud.com/lisa-gerrard-official/reunion?in=lisa-gerrard-official/sets/gladiator-music-from-the-1',
		answer: 'Gladiator - Reunion - Lisa Gerrard',
	},
	{
		url: 'https://soundcloud.com/lisa-gerrard-official/slaves-to-rome?in=lisa-gerrard-official/sets/gladiator-music-from-the-1',
		answer: 'Gladiator - Slaves To Rome - Lisa Gerrard',
	},
	{
		url: 'https://soundcloud.com/lisa-gerrard-official/barbarian-horde?in=lisa-gerrard-official/sets/gladiator-music-from-the-1',
		answer: 'Gladiator - Barbarian Horde - Lisa Gerrard',
	},
	{
		url: 'https://soundcloud.com/lisa-gerrard-official/am-i-not-merciful?in=lisa-gerrard-official/sets/gladiator-music-from-the-1',
		answer: 'Gladiator - Am I Not Merciful? - Lisa Gerrard',
	},
	{
		url: 'https://soundcloud.com/lisa-gerrard-official/elysium?in=lisa-gerrard-official/sets/gladiator-music-from-the-1',
		answer: 'Gladiator - Elysium - Lisa Gerrard',
	},
	{
		url: 'https://soundcloud.com/lisa-gerrard-official/honor-him?in=lisa-gerrard-official/sets/gladiator-music-from-the-1',
		answer: 'Gladiator - Honor Him - Lisa Gerrard',
	},
	{
		url: 'https://soundcloud.com/lisa-gerrard-official/now-we-are-free-album-version?in=lisa-gerrard-official/sets/gladiator-music-from-the-1',
		answer: 'Gladiator - Now We Are Free - Lisa Gerrard',
	},
	{
		url: 'https://soundcloud.com/lisa-gerrard-official/duduk-of-the-north-album?in=lisa-gerrard-official/sets/gladiator-music-from-the-1',
		answer: 'Gladiator - Duduk Of The North - Lisa Gerrard',
	},
	{
		url: 'https://soundcloud.com/lisa-gerrard-official/now-we-are-free-jubas-mix?in=lisa-gerrard-official/sets/gladiator-music-from-the-1',
		answer: "Gladiator - Now We Are Free (Juba's Mix) - Lisa Gerrard",
	},
	{
		url: 'https://soundcloud.com/lisa-gerrard-official/the-protector-of-rome-album?in=lisa-gerrard-official/sets/gladiator-music-from-the-1',
		answer: 'Gladiator - The Protector Of Rome - Lisa Gerrard',
	},
	{
		url: 'https://soundcloud.com/lisa-gerrard-official/homecoming-album-version?in=lisa-gerrard-official/sets/gladiator-music-from-the-1',
		answer: 'Gladiator - Homecoming - Lisa Gerrard',
	},
	{
		url: 'https://soundcloud.com/lisa-gerrard-official/the-general-who-became-a-slave?in=lisa-gerrard-official/sets/gladiator-music-from-the-1',
		answer: 'Gladiator - The General Who Became A Slave - Lisa Gerrard',
	},
	{
		url: 'https://soundcloud.com/lisa-gerrard-official/the-slave-who-became-a?in=lisa-gerrard-official/sets/gladiator-music-from-the-1',
		answer: 'Gladiator - The Slave Who Became A Gladiator - Lisa Gerrard',
	},
	{
		url: 'https://soundcloud.com/lisa-gerrard-official/secrets-album-version?in=lisa-gerrard-official/sets/gladiator-music-from-the-1',
		answer: 'Gladiator - Secrets - Lisa Gerrard',
	},
	{
		url: 'https://soundcloud.com/lisa-gerrard-official/rome-is-the-light-album?in=lisa-gerrard-official/sets/gladiator-music-from-the-1',
		answer: 'Gladiator - Rome Is The Light - Lisa Gerrard',
	},
	{
		url: 'https://soundcloud.com/lisa-gerrard-official/all-that-remains-album-version?in=lisa-gerrard-official/sets/gladiator-music-from-the-1',
		answer: 'Gladiator - All That Remains - Lisa Gerrard',
	},
	{
		url: 'https://soundcloud.com/lisa-gerrard-official/maximus-album-version-feat?in=lisa-gerrard-official/sets/gladiator-music-from-the-1',
		answer: 'Gladiator - Maximus - Lisa Gerrard',
	},
	{
		url: 'https://soundcloud.com/lisa-gerrard-official/marikesh-marketplace-album?in=lisa-gerrard-official/sets/gladiator-music-from-the-1',
		answer: 'Gladiator - Marrakesh Marketplace - Lisa Gerrard',
	},
	{
		url: 'https://soundcloud.com/lisa-gerrard-official/the-gladiator-waltz-album?in=lisa-gerrard-official/sets/gladiator-music-from-the-1',
		answer: 'Gladiator - The Gladiator Waltz - Lisa Gerrard',
	},
	{
		url: 'https://soundcloud.com/lisa-gerrard-official/figurines-album-version?in=lisa-gerrard-official/sets/gladiator-music-from-the-1',
		answer: 'Gladiator - Figurines - Lisa Gerrard',
	},
	{
		url: 'https://soundcloud.com/lisa-gerrard-official/the-mob-album-version?in=lisa-gerrard-official/sets/gladiator-music-from-the-1',
		answer: 'Gladiator - The Mob - Lisa Gerrard',
	},
	{
		url: 'https://soundcloud.com/lisa-gerrard-official/busy-little-bee-album-version?in=lisa-gerrard-official/sets/gladiator-music-from-the-1',
		answer: 'Gladiator - Busy Little Bee - Lisa Gerrard',
	},
	{
		url: 'https://soundcloud.com/lisa-gerrard-official/death-smiles-at-all-of-us?in=lisa-gerrard-official/sets/gladiator-music-from-the-1',
		answer: 'Gladiator - Death Smiles At All Of Us - Lisa Gerrard',
	},
	{
		url: 'https://soundcloud.com/lisa-gerrard-official/not-yet-album-version?in=lisa-gerrard-official/sets/gladiator-music-from-the-1',
		answer: 'Gladiator - Not Yet - Lisa Gerrard',
	},
	{
		url: 'https://soundcloud.com/lisa-gerrard-official/now-we-are-free-maximus-mix?in=lisa-gerrard-official/sets/gladiator-music-from-the-1',
		answer: 'Gladiator - Now We Are Free (Maximus Mix) - Lisa Gerrard',
	},
	{
		url: 'https://soundcloud.com/alan-silvestri/im-forrest-forrest-gump?in=alan-silvestri/sets/forrest-gump-original-motion',
		answer: "Forrest Gump - I'm Forrest... Forrest Gump - Alan Silvestri",
	},
	{
		url: 'https://soundcloud.com/alan-silvestri/youre-no-different-album?in=alan-silvestri/sets/forrest-gump-original-motion',
		answer: "Forrest Gump - You're No Different - Alan Silvestri",
	},
	{
		url: 'https://soundcloud.com/alan-silvestri/you-cant-sit-here-album?in=alan-silvestri/sets/forrest-gump-original-motion',
		answer: "Forrest Gump - You Can't Sit Here - Alan Silvestri",
	},
	{
		url: 'https://soundcloud.com/alan-silvestri/run-forrest-run-album-version?in=alan-silvestri/sets/forrest-gump-original-motion',
		answer: 'Forrest Gump - Run Forrest Run - Alan Silvestri',
	},
	{
		url: 'https://soundcloud.com/alan-silvestri/pray-with-me-album-version?in=alan-silvestri/sets/forrest-gump-original-motion',
		answer: 'Forrest Gump - Pray With Me - Alan Silvestri',
	},
	{
		url: 'https://soundcloud.com/alan-silvestri/the-crimson-gump-album-version?in=alan-silvestri/sets/forrest-gump-original-motion',
		answer: 'Forrest Gump - The Crimson Gump - Alan Silvestri',
	},
	{
		url: 'https://soundcloud.com/alan-silvestri/theyre-sending-me-to-vietnam?in=alan-silvestri/sets/forrest-gump-original-motion',
		answer: "Forrest Gump - They're Sending Me To Vietnam - Alan Silvestri",
	},
	{
		url: 'https://soundcloud.com/alan-silvestri/i-ran-and-ran-album-version?in=alan-silvestri/sets/forrest-gump-original-motion',
		answer: 'Forrest Gump - I Ran And Ran - Alan Silvestri',
	},
	{
		url: 'https://soundcloud.com/alan-silvestri/i-had-a-destiny-album-version?in=alan-silvestri/sets/forrest-gump-original-motion',
		answer: 'Forrest Gump - I Had A Destiny - Alan Silvestri',
	},
	{
		url: 'https://soundcloud.com/alan-silvestri/washington-reunion-album?in=alan-silvestri/sets/forrest-gump-original-motion',
		answer: 'Forrest Gump - Washington Reunion - Alan Silvestri',
	},
	{
		url: 'https://soundcloud.com/alan-silvestri/jesus-on-the-main-line-album?in=alan-silvestri/sets/forrest-gump-original-motion',
		answer: 'Forrest Gump - Jesus On The Main Line - Alan Silvestri',
	},
	{
		url: 'https://soundcloud.com/alan-silvestri/thats-my-boat-album-version?in=alan-silvestri/sets/forrest-gump-original-motion',
		answer: "Forrest Gump - That's My Boat - Alan Silvestri",
	},
	{
		url: 'https://soundcloud.com/alan-silvestri/i-never-thanked-you-album?in=alan-silvestri/sets/forrest-gump-original-motion',
		answer: 'Forrest Gump - I Never Thanked You - Alan Silvestri',
	},
	{
		url: 'https://soundcloud.com/alan-silvestri/jenny-returns-album-version?in=alan-silvestri/sets/forrest-gump-original-motion',
		answer: 'Forrest Gump - Jenny Returns - Alan Silvestri',
	},
	{
		url: 'https://soundcloud.com/alan-silvestri/the-crusade-album-version?in=alan-silvestri/sets/forrest-gump-original-motion',
		answer: 'Forrest Gump - The Crusade - Alan Silvestri',
	},
	{
		url: 'https://soundcloud.com/alexpfeffer/the-godfather-love-theme-feat?in=baraa_nabil1/sets/the-godfather-soundtrack',
		answer:
			'The Godfather - The Godfather Love Theme feat. Friedlander Violin - Baraa Nabil ❶',
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/anything-goes-album-version?in=johnwilliams-official/sets/indiana-jones-and-the-temple-1',
		answer:
			'Indiana Jones and the Temple of Doom - Anything Goes - John Williams',
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/indy-negotiates-album-version?in=johnwilliams-official/sets/indiana-jones-and-the-temple-1',
		answer:
			'Indiana Jones and the Temple of Doom - Indy Negotiates - John Williams',
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/the-nightclub-brawl-album?in=johnwilliams-official/sets/indiana-jones-and-the-temple-1',
		answer:
			'Indiana Jones and the Temple of Doom - The Nightclub Brawl - John Williams',
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/fast-streets-of-shanghai-album?in=johnwilliams-official/sets/indiana-jones-and-the-temple-1',
		answer:
			'Indiana Jones and the Temple of Doom - Fast Streets of Shanghai - John Williams',
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/map-out-of-fuel-album-version?in=johnwilliams-official/sets/indiana-jones-and-the-temple-1',
		answer:
			'Indiana Jones and the Temple of Doom - Map / Out of Fuel - John Williams',
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/slalom-on-mt-humol-album?in=johnwilliams-official/sets/indiana-jones-and-the-temple-1',
		answer:
			'Indiana Jones and the Temple of Doom - Slalom on Mt. Humol - John Williams',
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/short-rounds-theme-album?in=johnwilliams-official/sets/indiana-jones-and-the-temple-1',
		answer:
			"Indiana Jones and the Temple of Doom - Short Round's Theme - John Williams",
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/the-scroll-to-pankot-palace?in=johnwilliams-official/sets/indiana-jones-and-the-temple-1',
		answer:
			'Indiana Jones and the Temple of Doom - The Scroll / To Pankot Palace - John Williams',
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/nocturnal-activities-album?in=johnwilliams-official/sets/indiana-jones-and-the-temple-1',
		answer:
			'Indiana Jones and the Temple of Doom - Nocturnal Activities - John Williams',
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/bug-tunnel-death-trap-album?in=johnwilliams-official/sets/indiana-jones-and-the-temple-1',
		answer:
			'Indiana Jones and the Temple of Doom - Bug Tunnel / Death Trap - John Williams',
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/approaching-the-stones-album-1?in=johnwilliams-official/sets/indiana-jones-and-the-temple-1',
		answer:
			'Indiana Jones and the Temple of Doom - Approaching the Stones - John Williams',
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/children-in-chains-album?in=johnwilliams-official/sets/indiana-jones-and-the-temple-1',
		answer:
			'Indiana Jones and the Temple of Doom - Children in Chains - John Williams',
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/the-temple-of-doom-album?in=johnwilliams-official/sets/indiana-jones-and-the-temple-1',
		answer:
			'Indiana Jones and the Temple of Doom - The Temple of Doom - John Williams',
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/short-round-escapes-album?in=johnwilliams-official/sets/indiana-jones-and-the-temple-1',
		answer:
			'Indiana Jones and the Temple of Doom - Short Round Escapes - John Williams',
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/saving-willie-album-version?in=johnwilliams-official/sets/indiana-jones-and-the-temple-1',
		answer:
			'Indiana Jones and the Temple of Doom - Saving Willie - John Williams',
	},
	{
		url: 'https://soundcloud.com/nicholas-dodd-official/african-rundown-album-version?in=nicholas-dodd-official/sets/casino-royale-international',
		answer: 'Casino Royale - African Rundown - Nicholas Dodd',
	},
	{
		url: 'https://soundcloud.com/nicholas-dodd-official/nothing-sinister-album-version?in=nicholas-dodd-official/sets/casino-royale-international',
		answer: 'Casino Royale - Nothing Sinister - Nicholas Dodd',
	},
	{
		url: 'https://soundcloud.com/nicholas-dodd-official/unauthorised-access-album?in=nicholas-dodd-official/sets/casino-royale-international',
		answer: 'Casino Royale - Unauthorised Access - Nicholas Dodd',
	},
	{
		url: 'https://soundcloud.com/nicholas-dodd-official/blunt-instrument-album-version?in=nicholas-dodd-official/sets/casino-royale-international',
		answer: 'Casino Royale - Blunt Instrument - Nicholas Dodd',
	},
	{
		url: 'https://soundcloud.com/nicholas-dodd-official/cctv-album-version?in=nicholas-dodd-official/sets/casino-royale-international',
		answer: 'Casino Royale - CCTV - Nicholas Dodd',
	},
	{
		url: 'https://soundcloud.com/nicholas-dodd-official/solange-album-version?in=nicholas-dodd-official/sets/casino-royale-international',
		answer: 'Casino Royale - Solange - Nicholas Dodd',
	},
	{
		url: 'https://soundcloud.com/nicholas-dodd-official/trip-aces-album-version?in=nicholas-dodd-official/sets/casino-royale-international',
		answer: 'Casino Royale - Trip Aces - Nicholas Dodd',
	},
	{
		url: 'https://soundcloud.com/nicholas-dodd-official/miami-international-album?in=nicholas-dodd-official/sets/casino-royale-international',
		answer: 'Casino Royale - Miami International - Nicholas Dodd',
	},
	{
		url: 'https://soundcloud.com/nicholas-dodd-official/im-the-money-album-version?in=nicholas-dodd-official/sets/casino-royale-international',
		answer: "Casino Royale - I'm The Money - Nicholas Dodd",
	},
	{
		url: 'https://soundcloud.com/nicholas-dodd-official/aston-montenegro-album-version?in=nicholas-dodd-official/sets/casino-royale-international',
		answer: 'Casino Royale - Aston Montenegro - Nicholas Dodd',
	},
	{
		url: 'https://soundcloud.com/nicholas-dodd-official/dinner-jackets-album-version?in=nicholas-dodd-official/sets/casino-royale-international',
		answer: 'Casino Royale - Dinner Jackets - Nicholas Dodd',
	},
	{
		url: 'https://soundcloud.com/nicholas-dodd-official/the-tell-album-version?in=nicholas-dodd-official/sets/casino-royale-international',
		answer: 'Casino Royale - The Tell - Nicholas Dodd',
	},
	{
		url: 'https://soundcloud.com/nicholas-dodd-official/stairwell-fight-album-version?in=nicholas-dodd-official/sets/casino-royale-international',
		answer: 'Casino Royale - Stairwell Fight - Nicholas Dodd',
	},
	{
		url: 'https://soundcloud.com/nicholas-dodd-official/vesper?in=nicholas-dodd-official/sets/casino-royale-international',
		answer: 'Casino Royale - Vesper - Nicholas Dodd',
	},
	{
		url: 'https://soundcloud.com/nicholas-dodd-official/bond-loses-it-all-album?in=nicholas-dodd-official/sets/casino-royale-international',
		answer: 'Casino Royale - Bond Loses It All - Nicholas Dodd',
	},
	{
		url: 'https://soundcloud.com/nicholas-dodd-official/dirty-martini-album-version?in=nicholas-dodd-official/sets/casino-royale-international',
		answer: 'Casino Royale - Dirty Martini - Nicholas Dodd',
	},
	{
		url: 'https://soundcloud.com/nicholas-dodd-official/bond-wins-it-all-album-version?in=nicholas-dodd-official/sets/casino-royale-international',
		answer: 'Casino Royale - Bond Wins It All - Nicholas Dodd',
	},
	{
		url: 'https://soundcloud.com/nicholas-dodd-official/the-end-of-an-aston-martin?in=nicholas-dodd-official/sets/casino-royale-international',
		answer: 'Casino Royale - The End of an Aston Martin - Nicholas Dodd',
	},
	{
		url: 'https://soundcloud.com/nicholas-dodd-official/the-bad-die-young-album?in=nicholas-dodd-official/sets/casino-royale-international',
		answer: 'Casino Royale - The Bad Die Young - Nicholas Dodd',
	},
	{
		url: 'https://soundcloud.com/nicholas-dodd-official/city-of-lovers-album-version?in=nicholas-dodd-official/sets/casino-royale-international',
		answer: 'Casino Royale - City of Lovers - Nicholas Dodd',
	},
	{
		url: 'https://soundcloud.com/nicholas-dodd-official/the-switch-album-version?in=nicholas-dodd-official/sets/casino-royale-international',
		answer: 'Casino Royale - The Switch - Nicholas Dodd',
	},
	{
		url: 'https://soundcloud.com/nicholas-dodd-official/fall-of-a-house-in-venice?in=nicholas-dodd-official/sets/casino-royale-international',
		answer: 'Casino Royale - Fall of a House in Venice - Nicholas Dodd',
	},
	{
		url: 'https://soundcloud.com/nicholas-dodd-official/death-of-vesper-album-version?in=nicholas-dodd-official/sets/casino-royale-international',
		answer: 'Casino Royale - Death of Vesper - Nicholas Dodd',
	},
	{
		url: 'https://soundcloud.com/nicholas-dodd-official/the-bitch-is-dead-album?in=nicholas-dodd-official/sets/casino-royale-international',
		answer: 'Casino Royale - The Bitch is Dead - Nicholas Dodd',
	},
	{
		url: 'https://soundcloud.com/nicholas-dodd-official/the-names-bond-james-bond?in=nicholas-dodd-official/sets/casino-royale-international',
		answer: "Casino Royale - The Name's Bond... James Bond - Nicholas Dodd",
	},

	{
		url: 'https://soundcloud.com/hans-zimmer-official/we-built-our-own-world?in=hans-zimmer-official/sets/inception-music-from-the',
		answer: 'Inception - We Built Our Own World - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/dream-is-collapsing?in=hans-zimmer-official/sets/inception-music-from-the',
		answer: 'Inception - Dream Is Collapsing - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/radical-notion?in=hans-zimmer-official/sets/inception-music-from-the',
		answer: 'Inception - Radical Notion - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/old-souls?in=hans-zimmer-official/sets/inception-music-from-the',
		answer: 'Inception - Old Souls - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/528491a1?in=hans-zimmer-official/sets/inception-music-from-the',
		answer: 'Inception - 528491 - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/mombasa?in=hans-zimmer-official/sets/inception-music-from-the',
		answer: 'Inception - Mombasa - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/one-simple-idea?in=hans-zimmer-official/sets/inception-music-from-the',
		answer: 'Inception - One Simple Idea - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/dream-within-a-dream?in=hans-zimmer-official/sets/inception-music-from-the',
		answer: 'Inception - Dream Within a Dream - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/waiting-for-a-train?in=hans-zimmer-official/sets/inception-music-from-the',
		answer: 'Inception - Waiting for a Train - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/paradox?in=hans-zimmer-official/sets/inception-music-from-the',
		answer: 'Inception - Paradox - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/time?in=hans-zimmer-official/sets/inception-music-from-the',
		answer: 'Inception - Time - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/londonstarlightorchestra/once-upon-a-time-in-the-west?in=londonstarlightorchestra/sets/once-upon-a-time-in-311431399',
		answer: 'Once Upon A Time In The West - Once Upon A Time In The West',
	},
	{
		url: 'https://soundcloud.com/londonstarlightorchestra/the-man-with-the-harmonica?in=londonstarlightorchestra/sets/once-upon-a-time-in-311431399',
		answer: 'Once Upon A Time In The West - The Man With The Harmonica',
	},
	{
		url: 'https://soundcloud.com/londonstarlightorchestra/for-a-few-dollars-more?in=londonstarlightorchestra/sets/once-upon-a-time-in-311431399',
		answer: 'Once Upon A Time In The West - For A Few Dollars More',
	},
	{
		url: 'https://soundcloud.com/londonstarlightorchestra/my-name-is-nobody?in=londonstarlightorchestra/sets/once-upon-a-time-in-311431399',
		answer: 'Once Upon A Time In The West - My Name Is Nobody',
	},
	{
		url: 'https://soundcloud.com/londonstarlightorchestra/cockeyes-song?in=londonstarlightorchestra/sets/once-upon-a-time-in-311431399',
		answer: "Once Upon A Time In The West - Cockeye's Song",
	},
	{
		url: 'https://soundcloud.com/londonstarlightorchestra/the-good-the-bad-and-the-ugly?in=londonstarlightorchestra/sets/once-upon-a-time-in-311431399',
		answer: 'Once Upon A Time In The West - The Good, The Bad And The Ugly',
	},
	{
		url: 'https://soundcloud.com/londonstarlightorchestra/chi-mai-2?in=londonstarlightorchestra/sets/once-upon-a-time-in-311431399',
		answer: 'Once Upon A Time In The West - Chi Mai',
	},
	{
		url: 'https://soundcloud.com/londonstarlightorchestra/a-fistful-of-dollars?in=londonstarlightorchestra/sets/once-upon-a-time-in-311431399',
		answer: 'Once Upon A Time In The West - A Fistful Of Dollars',
	},
	{
		url: 'https://soundcloud.com/londonstarlightorchestra/heres-to-you?in=londonstarlightorchestra/sets/once-upon-a-time-in-311431399',
		answer: "Once Upon A Time In The West - Here's To You",
	},
	{
		url: 'https://soundcloud.com/londonstarlightorchestra/poem-of-a-woman?in=londonstarlightorchestra/sets/once-upon-a-time-in-311431399',
		answer: 'Once Upon A Time In The West - Poem Of A Woman',
	},
	{
		url: 'https://soundcloud.com/londonstarlightorchestra/moses-theme-main-title?in=londonstarlightorchestra/sets/once-upon-a-time-in-311431399',
		answer: 'Once Upon A Time In The West - Moses Theme (Main Title)',
	},
	{
		url: 'https://soundcloud.com/londonstarlightorchestra/the-adventurer?in=londonstarlightorchestra/sets/once-upon-a-time-in-311431399',
		answer: 'Once Upon A Time In The West - The Adventurer',
	},
	{
		url: 'https://soundcloud.com/londonstarlightorchestra/le-train?in=londonstarlightorchestra/sets/once-upon-a-time-in-311431399',
		answer: 'Once Upon A Time In The West - Le Train',
	},
	{
		url: 'https://soundcloud.com/londonstarlightorchestra/orient-express?in=londonstarlightorchestra/sets/once-upon-a-time-in-311431399',
		answer: 'Once Upon A Time In The West - Orient Express',
	},
	{
		url: 'https://soundcloud.com/londonstarlightorchestra/bye-bye-colonel?in=londonstarlightorchestra/sets/once-upon-a-time-in-311431399',
		answer: 'Once Upon A Time In The West - Bye Bye Colonel',
	},
	{
		url: 'https://soundcloud.com/londonstarlightorchestra/good-luck-jack?in=londonstarlightorchestra/sets/once-upon-a-time-in-311431399',
		answer: 'Once Upon A Time In The West - Good Luck Jack',
	},
	{
		url: 'https://soundcloud.com/londonstarlightorchestra/la-libertad?in=londonstarlightorchestra/sets/once-upon-a-time-in-311431399',
		answer: 'Once Upon A Time In The West - La Libertad',
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/main-title-john-williams-jaws?#t=1%3A00',
		answer: 'Jaws - Main Title',
	},
	{
		url: 'https://soundcloud.com/londonstarlightorchestra/a-fistful-of-dynamite?in=londonstarlightorchestra/sets/once-upon-a-time-in-311431399',
		answer: 'Once Upon A Time In The West - A Fistful Of Dynamite',
	},
	{
		url: 'https://soundcloud.com/londonstarlightorchestra/a-gun-for-ringo-1?in=londonstarlightorchestra/sets/once-upon-a-time-in-311431399',
		answer: 'Once Upon A Time In The West - A Gun For Ringo',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/half-remembered-dream?in=hans-zimmer-official/sets/inception-music-from-the',
		answer: 'Inception - Half Remembered Dream - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/main-titles-soundtrack-reissue?in=johnwilliams-official/sets/e-t-the-extra-terrestrial-1',
		answer: 'E.T. The Extra Terrestrial - Main Titles - John Williams',
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/far-from-home-e-t-alone?in=johnwilliams-official/sets/e-t-the-extra-terrestrial-1',
		answer:
			'E.T. The Extra Terrestrial - Far From Home / E.T. Alone - John Williams',
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/bait-for-e-t-soundtrack?in=johnwilliams-official/sets/e-t-the-extra-terrestrial-1',
		answer: 'E.T. The Extra Terrestrial - Bait For E.T. - John Williams',
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/meeting-e-t-soundtrack-reissue?in=johnwilliams-official/sets/e-t-the-extra-terrestrial-1',
		answer: 'E.T. The Extra Terrestrial - Meeting E.T. - John Williams',
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/e-t-s-new-home-soundtrack?in=johnwilliams-official/sets/e-t-the-extra-terrestrial-1',
		answer: "E.T. The Extra Terrestrial - E.T.'s New Home - John Williams",
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/the-beginning-of-a-friendship?in=johnwilliams-official/sets/e-t-the-extra-terrestrial-1',
		answer:
			'E.T. The Extra Terrestrial - The Beginning Of A Friendship - John Williams',
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/toys-soundtrack-reissue-2002?in=johnwilliams-official/sets/e-t-the-extra-terrestrial-1',
		answer: 'E.T. The Extra Terrestrial - Toys - John Williams',
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/im-keeping-him-soundtrack?in=johnwilliams-official/sets/e-t-the-extra-terrestrial-1',
		answer: "E.T. The Extra Terrestrial - I'm Keeping Him - John Williams",
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/e-t-s-powers-soundtrack?in=johnwilliams-official/sets/e-t-the-extra-terrestrial-1',
		answer: "E.T. The Extra Terrestrial - E.T.'s Powers - John Williams",
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/e-t-and-elliott-get-drunk?in=johnwilliams-official/sets/e-t-the-extra-terrestrial-1',
		answer:
			'E.T. The Extra Terrestrial - E.T. And Elliott Get Drunk - John Williams',
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/frogs-soundtrack-reissue-2002?in=johnwilliams-official/sets/e-t-the-extra-terrestrial-1',
		answer: 'E.T. The Extra Terrestrial - Frogs - John Williams',
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/at-home-sountrack-reissue-2002?in=johnwilliams-official/sets/e-t-the-extra-terrestrial-1',
		answer:
			'E.T. The Extra Terrestrial - At Home (Sountrack Reissue (2002)) - John Williams',
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/the-magic-of-halloween?in=johnwilliams-official/sets/e-t-the-extra-terrestrial-1',
		answer: 'E.T. The Extra Terrestrial - The Magic Of Halloween - John Williams',
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/sending-the-signal-soundtrack?in=johnwilliams-official/sets/e-t-the-extra-terrestrial-1',
		answer: 'E.T. The Extra Terrestrial - Sending The Signal - John Williams',
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/searching-for-e-t-soundtrack?in=johnwilliams-official/sets/e-t-the-extra-terrestrial-1',
		answer: 'E.T. The Extra Terrestrial - Searching For E.T. - John Williams',
	},
	{
		url: 'https://soundcloud.com/bernard-herrmann-official/main-title-taxi-driver?in=bernard-herrmann-official/sets/taxi-driver-3',
		answer: 'Taxi Driver - Main Title (from "Taxi Driver") - Bernard Herrmann',
	},
	{
		url: 'https://soundcloud.com/bernard-herrmann-official/thank-god-for-the-rain?in=bernard-herrmann-official/sets/taxi-driver-3',
		answer: 'Taxi Driver - Thank God for the Rain - Bernard Herrmann',
	},
	{
		url: 'https://soundcloud.com/bernard-herrmann-official/cleaning-the-cab?in=bernard-herrmann-official/sets/taxi-driver-3',
		answer: 'Taxi Driver - Cleaning the Cab - Bernard Herrmann',
	},
	{
		url: 'https://soundcloud.com/bernard-herrmann-official/i-still-cant-sleep-the-cannot?in=bernard-herrmann-official/sets/taxi-driver-3',
		answer:
			"Taxi Driver - I Still Can't Sleep / The Cannot Touch Her (Betsy's Theme) - Bernard Herrmann",
	},
	{
		url: 'https://soundcloud.com/bernard-herrmann-official/phone-call-i-realize-how-much?in=bernard-herrmann-official/sets/taxi-driver-3',
		answer:
			"Taxi Driver - Phone Call / I Realize How Much She Is Like the Others / A Strange Customer / Watching Palantine On TV / You're Gonna Die In Hell / Betsy's Theme / Hitting the Girl - Bernard Herrmann",
	},
	{
		url: 'https://soundcloud.com/bernard-herrmann-official/the-44-magnum-is-a-monster?in=bernard-herrmann-official/sets/taxi-driver-3',
		answer: 'Taxi Driver - The .44 Magnum Is a Monster - Bernard Herrmann',
	},
	{
		url: 'https://soundcloud.com/bernard-herrmann-official/getting-into-shape-listen-you?in=bernard-herrmann-official/sets/taxi-driver-3',
		answer:
			'Taxi Driver - Getting Into Shape / Listen You Screwheads / Gun Play / Dear Father & Mother / The Card / Soap Opera - Bernard Herrmann',
	},
	{
		url: 'https://soundcloud.com/bernard-herrmann-official/sport-and-iris?in=bernard-herrmann-official/sets/taxi-driver-3',
		answer: 'Taxi Driver - Sport and Iris - Bernard Herrmann',
	},
	{
		url: 'https://soundcloud.com/bernard-herrmann-official/the-20-bill-target-practice?in=bernard-herrmann-official/sets/taxi-driver-3',
		answer: 'Taxi Driver - The $20 Bill / Target Practice - Bernard Herrmann',
	},
	{
		url: 'https://soundcloud.com/bernard-herrmann-official/assassination-attempt-after?in=bernard-herrmann-official/sets/taxi-driver-3',
		answer:
			'Taxi Driver - Assassination Attempt / After the Carnage - Bernard Herrmann',
	},
	{
		url: 'https://soundcloud.com/bernard-herrmann-official/a-reluctant-hero-betsy-end?in=bernard-herrmann-official/sets/taxi-driver-3',
		answer:
			'Taxi Driver - A Reluctant Hero / Betsy / End Credits - Bernard Herrmann',
	},
	{
		url: 'https://soundcloud.com/robert-de-niro-official/diary-of-a-taxi-driver?in=bernard-herrmann-official/sets/taxi-driver-3',
		answer: 'Taxi Driver - Diary of a Taxi Driver - Bernard Herrmann',
	},
	{
		url: 'https://soundcloud.com/bernard-herrmann-official/gods-lonely-man-album-version?in=bernard-herrmann-official/sets/taxi-driver-3',
		answer:
			"Taxi Driver - God's Lonely Man (Album Version, With Alternate Ending) - Bernard Herrmann",
	},
	{
		url: 'https://soundcloud.com/daveblume/theme-from-taxi-driver?in=bernard-herrmann-official/sets/taxi-driver-3',
		answer: 'Taxi Driver - Theme from Taxi Driver - Bernard Herrmann',
	},
	{
		url: 'https://soundcloud.com/daveblume/i-work-the-whole-city?in=bernard-herrmann-official/sets/taxi-driver-3',
		answer: 'Taxi Driver - I Work the Whole City - Bernard Herrmann',
	},
	{
		url: 'https://soundcloud.com/henry-mancini-official/the-pink-panther-theme-from-2?in=henry-mancini-official/sets/the-pink-panther-original',
		answer:
			'The Pink Panther - The Pink Panther Theme (From "The Pink Panther") - Henry Mancini',
	},
	{
		url: 'https://soundcloud.com/henry-mancini-official/it-had-better-be-tonight-8?in=henry-mancini-official/sets/the-pink-panther-original',
		answer:
			'The Pink Panther - It Had Better Be Tonight (Meglio stasera) (From the Mirisch-G & E Production "The Pink Panther" [Instrumental]) - Henry Mancini',
	},
	{
		url: 'https://soundcloud.com/henry-mancini-official/royal-blue-1995-remastered?in=henry-mancini-official/sets/the-pink-panther-original',
		answer: 'The Pink Panther - Royal Blue (1995 Remastered) - Henry Mancini',
	},
	{
		url: 'https://soundcloud.com/henry-mancini-official/champagne-and-quail-2?in=henry-mancini-official/sets/the-pink-panther-original',
		answer: 'The Pink Panther - Champagne And Quail - Henry Mancini',
	},
	{
		url: 'https://soundcloud.com/henry-mancini-official/the-village-inn-from-the?in=henry-mancini-official/sets/the-pink-panther-original',
		answer:
			'The Pink Panther - The Village Inn (From the Mirisch-G & E Production "The Pink Panther") - Henry Mancini',
	},
	{
		url: 'https://soundcloud.com/henry-mancini-official/the-tiber-twist-2?in=henry-mancini-official/sets/the-pink-panther-original',
		answer: 'The Pink Panther - The Tiber Twist - Henry Mancini',
	},
	{
		url: 'https://soundcloud.com/henry-mancini-official/it-had-better-be-tonight-7?in=henry-mancini-official/sets/the-pink-panther-original',
		answer:
			'The Pink Panther - It Had Better Be Tonight (Vocal) (From the Mirisch-G & E Production "The Pink Panther") - Henry Mancini',
	},
	{
		url: 'https://soundcloud.com/henry-mancini-official/cortina-from-the-mirisch-g-e-1?in=henry-mancini-official/sets/the-pink-panther-original',
		answer:
			'The Pink Panther - Cortina (From the Mirisch-G & E Production "The Pink Panther") - Henry Mancini',
	},
	{
		url: 'https://soundcloud.com/henry-mancini-official/the-lonely-princess-from-the-1?in=henry-mancini-official/sets/the-pink-panther-original',
		answer:
			'The Pink Panther - The Lonely Princess (From the Mirisch-G & E Production "The Pink Panther") - Henry Mancini',
	},
	{
		url: 'https://soundcloud.com/henry-mancini-official/something-for-sellers-from-the?in=henry-mancini-official/sets/the-pink-panther-original',
		answer:
			'The Pink Panther - Something for Sellers (From the Mirisch-G & E Production "The Pink Panther") - Henry Mancini',
	},
	{
		url: 'https://soundcloud.com/henry-mancini-official/piano-and-strings-1995?in=henry-mancini-official/sets/the-pink-panther-original',
		answer:
			'The Pink Panther - Piano And Strings (1995 Remastered) - Henry Mancini',
	},
	{
		url: 'https://soundcloud.com/henry-mancini-official/shades-of-sennett-2?in=henry-mancini-official/sets/the-pink-panther-original',
		answer: 'The Pink Panther - Shades Of Sennett - Henry Mancini',
	},
	{
		url: 'https://soundcloud.com/jerry-goldsmith-official/main-title-from-alien?in=jerry-goldsmith-official/sets/the-alien-trilogy',
		answer: 'Alien: Main Title - Jerry Goldsmith',
	},
	{
		url: 'https://soundcloud.com/jerry-goldsmith-official/hyper-sleep-from-alien?in=jerry-goldsmith-official/sets/the-alien-trilogy',
		answer: 'Alien: Hyper Sleep - Jerry Goldsmith',
	},
	{
		url: 'https://soundcloud.com/jerry-goldsmith-official/the-landing-from-alien?in=jerry-goldsmith-official/sets/the-alien-trilogy',
		answer: 'Alien: The Landing - Jerry Goldsmith',
	},
	{
		url: 'https://soundcloud.com/jerry-goldsmith-official/alien-breakaway-from-alien?in=jerry-goldsmith-official/sets/the-alien-trilogy',
		answer: 'Alien: Breakaway - Jerry Goldsmith',
	},
	{
		url: 'https://soundcloud.com/jerry-goldsmith-official/the-droid-from-alien?in=jerry-goldsmith-official/sets/the-alien-trilogy',
		answer: 'Alien: The Droid - Jerry Goldsmith',
	},
	{
		url: 'https://soundcloud.com/jerry-goldsmith-official/the-door-from-alien?in=jerry-goldsmith-official/sets/the-alien-trilogy',
		answer: 'Alien: The Door - Jerry Goldsmith',
	},
	{
		url: 'https://soundcloud.com/jerry-goldsmith-official/end-title-from-alien?in=jerry-goldsmith-official/sets/the-alien-trilogy',
		answer: 'Alien: End Title - Jerry Goldsmith',
	},
	{
		url: 'https://soundcloud.com/james-horner-official/main-title-from-aliens?in=jerry-goldsmith-official/sets/the-alien-trilogy',
		answer: 'Aliens: Main Title (From "Aliens") - Jerry Goldsmith',
	},
	{
		url: 'https://soundcloud.com/james-horner-official/futile-escape-from-aliens-1?in=jerry-goldsmith-official/sets/the-alien-trilogy',
		answer: 'Futile Escape (From "Aliens") - Jerry Goldsmith',
	},
	{
		url: 'https://soundcloud.com/james-horner-official/bishops-countdown-from-aliens?in=jerry-goldsmith-official/sets/the-alien-trilogy',
		answer: 'Aliens: Bishop\'s Countdown (From "Aliens") - Jerry Goldsmith',
	},
	{
		url: 'https://soundcloud.com/elliot-goldenthal/lento-from-alien-3?in=jerry-goldsmith-official/sets/the-alien-trilogy',
		answer: 'Alien 3: Lento (From "Alien 3") - Jerry Goldsmith',
	},
	{
		url: 'https://soundcloud.com/elliot-goldenthal/candles-in-the-wind-from-alien?in=jerry-goldsmith-official/sets/the-alien-trilogy',
		answer: 'Alien 3: Candles In The Wind (From "Alien 3") - Jerry Goldsmith',
	},
	{
		url: 'https://soundcloud.com/elliot-goldenthal/adagio-from-alien-3?in=jerry-goldsmith-official/sets/the-alien-trilogy',
		answer: 'Alien 3: Adagio (From "Alien 3") - Jerry Goldsmith',
	},
	{
		url: 'https://soundcloud.com/james-horner-official/never-an-absolution?in=james-horner-official/sets/titanic-original-motion-1',
		answer: 'Titanic: - Never an Absolution - James Horner',
	},
	{
		url: 'https://soundcloud.com/james-horner-official/distant-memories?in=james-horner-official/sets/titanic-original-motion-1',
		answer: 'Titanic: - Distant Memories - James Horner',
	},
	{
		url: 'https://soundcloud.com/james-horner-official/southampton?in=james-horner-official/sets/titanic-original-motion-1',
		answer: 'Titanic: - Southampton - James Horner',
	},
	{
		url: 'https://soundcloud.com/james-horner-official/rose?in=james-horner-official/sets/titanic-original-motion-1',
		answer: 'Titanic: - Rose - James Horner',
	},
	{
		url: 'https://soundcloud.com/james-horner-official/leaving-port?in=james-horner-official/sets/titanic-original-motion-1',
		answer: 'Titanic: - Leaving Port - James Horner',
	},
	{
		url: 'https://soundcloud.com/james-horner-official/take-her-to-sea-mr-murdoch?in=james-horner-official/sets/titanic-original-motion-1',
		answer: 'Titanic: - "Take Her to Sea, Mr. Murdoch" - James Horner',
	},
	{
		url: 'https://soundcloud.com/james-horner-official/hard-to-starboard?in=james-horner-official/sets/titanic-original-motion-1',
		answer: 'Titanic: - "Hard to Starboard" - James Horner',
	},
	{
		url: 'https://soundcloud.com/james-horner-official/unable-to-stay-unwilling-to?in=james-horner-official/sets/titanic-original-motion-1',
		answer: 'Titanic: - Unable to Stay, Unwilling to Leave - James Horner',
	},
	{
		url: 'https://soundcloud.com/james-horner-official/the-sinking?in=james-horner-official/sets/titanic-original-motion-1',
		answer: 'Titanic: - The Sinking - James Horner',
	},
	{
		url: 'https://soundcloud.com/james-horner-official/death-of-titanic?in=james-horner-official/sets/titanic-original-motion-1',
		answer: 'Titanic: - Death of Titanic - James Horner',
	},
	{
		url: 'https://soundcloud.com/james-horner-official/a-promise-kept?in=james-horner-official/sets/titanic-original-motion-1',
		answer: 'Titanic: - A Promise Kept - James Horner',
	},
	{
		url: 'https://soundcloud.com/james-horner-official/a-life-so-changed?in=james-horner-official/sets/titanic-original-motion-1',
		answer: 'Titanic: - A Life So Changed - James Horner',
	},
	{
		url: 'https://soundcloud.com/james-horner-official/an-ocean-of-memories?in=james-horner-official/sets/titanic-original-motion-1',
		answer: 'Titanic: - An Ocean of Memories - James Horner',
	},
	{
		url: 'https://soundcloud.com/james-horner-official/my-heart-will-go-on-love-theme?in=james-horner-official/sets/titanic-original-motion-1',
		answer:
			'Titanic: - My Heart Will Go On (Love Theme from "Titanic") - James Horner',
	},
	{
		url: 'https://soundcloud.com/james-horner-official/hymn-to-the-sea?in=james-horner-official/sets/titanic-original-motion-1',
		answer: 'Titanic: - Hymn to the Sea - James Horner',
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/hymn-to-the-fallen-saving?in=johnwilliams-official/sets/saving-private-ryan-1',
		answer: 'Saving Private Ryan - Hymn To The Fallen - John Williams',
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/revisiting-normandy-saving?in=johnwilliams-official/sets/saving-private-ryan-1',
		answer: 'Saving Private Ryan - Revisiting Normandy - John Williams',
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/omaha-beach-saving-private?in=johnwilliams-official/sets/saving-private-ryan-1',
		answer: 'Saving Private Ryan - Omaha Beach - John Williams',
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/finding-private-ryan-saving?in=johnwilliams-official/sets/saving-private-ryan-1',
		answer: 'Saving Private Ryan - Finding Private Ryan - John Williams',
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/approaching-the-enemy-saving?in=johnwilliams-official/sets/saving-private-ryan-1',
		answer: 'Saving Private Ryan - Approaching The Enemy - John Williams',
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/defense-preparations-saving?in=johnwilliams-official/sets/saving-private-ryan-1',
		answer: 'Saving Private Ryan - Defense Preparations - John Williams',
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/wades-death-saving-private?in=johnwilliams-official/sets/saving-private-ryan-1',
		answer: "Saving Private Ryan - Wade's Death - John Williams",
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/high-school-teacher-saving?in=johnwilliams-official/sets/saving-private-ryan-1',
		answer: 'Saving Private Ryan - High School Teacher - John Williams',
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/the-last-battle-saving-private?in=johnwilliams-official/sets/saving-private-ryan-1',
		answer: 'Saving Private Ryan - The Last Battle - John Williams',
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/hymn-to-the-fallen-saving-1?in=johnwilliams-official/sets/saving-private-ryan-1',
		answer: 'Saving Private Ryan - Hymn To The Fallen (Reprise) - John Williams',
	},
	{
		url: 'https://soundcloud.com/angus-mcfadyen/prologue-i-shall-tell-you-of?in=mel-gibson-official/sets/more-music-from-braveheart',
		answer:
			'Braveheart - Prologue: "I shall tell you of William Wallace" - James Horner',
	},
	{
		url: 'https://soundcloud.com/james-horner-official/outlawed-tunes-on-outlawed?in=mel-gibson-official/sets/more-music-from-braveheart',
		answer: 'Braveheart - Outlawed Tunes On Outlawed Pipes - James Horner',
	},
	{
		url: 'https://soundcloud.com/angus-mcfadyen/the-royal-wedding-braveheart?in=mel-gibson-official/sets/more-music-from-braveheart',
		answer: 'Braveheart - The Royal Wedding - James Horner',
	},
	{
		url: 'https://soundcloud.com/patrickmcgoohan/the-trouble-with-scotland?in=mel-gibson-official/sets/more-music-from-braveheart',
		answer: 'Braveheart - The Trouble with Scotland - James Horner',
	},
	{
		url: 'https://soundcloud.com/james-horner-official/scottish-wedding-music?in=mel-gibson-official/sets/more-music-from-braveheart',
		answer: 'Braveheart - Scottish Wedding Music - James Horner',
	},
	{
		url: 'https://soundcloud.com/james-horner-official/prima-noctes?in=mel-gibson-official/sets/more-music-from-braveheart',
		answer: 'Braveheart - Prima Noctes - James Horner',
	},
	{
		url: 'https://soundcloud.com/mel-gibson-official/the-proposal-braveheart?in=mel-gibson-official/sets/more-music-from-braveheart',
		answer: 'Braveheart - The Proposal - James Horner',
	},
	{
		url: 'https://soundcloud.com/mel-gibson-official/scotland-is-free-braveheart?in=mel-gibson-official/sets/more-music-from-braveheart',
		answer: 'Braveheart - Scotland is Free! - James Horner',
	},
	{
		url: 'https://soundcloud.com/1st-battalion-queens-own-cameron-highlanders/point-of-war-johnny-cope-up-in?in=mel-gibson-official/sets/more-music-from-braveheart',
		answer:
			'Braveheart - Point of War / Johnny Cope / Up in the morning early - James Horner',
	},
	{
		url: 'https://soundcloud.com/mel-gibson-official/conversing-with-the-almighty?in=mel-gibson-official/sets/more-music-from-braveheart',
		answer: 'Braveheart - Conversing with the Almighty - James Horner',
	},
	{
		url: 'https://soundcloud.com/1st-battalion-queens-own-cameron-highlanders/the-road-to-the-isles?in=mel-gibson-official/sets/more-music-from-braveheart',
		answer:
			'Braveheart - The Road to the Isles / Glendarual Highlanders / The Old Rustic Bridge by the Mill - James Horner',
	},
	{
		url: 'https://soundcloud.com/mel-gibson-official/sons-of-scotland-braveheart?in=mel-gibson-official/sets/more-music-from-braveheart',
		answer: "Braveheart - 'Sons of Scotland' - James Horner",
	},
	{
		url: 'https://soundcloud.com/james-horner-official/vision-of-murron?in=mel-gibson-official/sets/more-music-from-braveheart',
		answer: 'Braveheart - Vision Of Murron - James Horner',
	},
	{
		url: 'https://soundcloud.com/mel-gibson-official/unite-the-clans-braveheart?in=mel-gibson-official/sets/more-music-from-braveheart',
		answer: 'Braveheart - Unite the Clans! - James Horner',
	},
	{
		url: 'https://soundcloud.com/eric-rigler/the-legend-spreads-braveheart?in=mel-gibson-official/sets/more-music-from-braveheart',
		answer: 'Braveheart - The Legend spreads - James Horner',
	},
	{
		url: 'https://soundcloud.com/sophie-marceau-official/why-do-you-help-me-braveheart?in=mel-gibson-official/sets/more-music-from-braveheart',
		answer: 'Braveheart - Why do you help me? - James Horner',
	},
	{
		url: 'https://soundcloud.com/james-horner-official/for-the-love-of-a-princess?in=mel-gibson-official/sets/more-music-from-braveheart',
		answer: 'Braveheart - For The Love Of A Princess - James Horner',
	},
	{
		url: 'https://soundcloud.com/sophie-marceau-official/not-every-man-really-lives?in=mel-gibson-official/sets/more-music-from-braveheart',
		answer: 'Braveheart - "Not every man really lives" - James Horner',
	},
	{
		url: 'https://soundcloud.com/mel-gibson-official/the-prisoner-wishes-to-say-a?in=mel-gibson-official/sets/more-music-from-braveheart',
		answer: 'Braveheart - The Prisoner wishes to say a Word - James Horner',
	},
	{
		url: 'https://soundcloud.com/angus-mcfadyen/after-the-beheading-braveheart?in=mel-gibson-official/sets/more-music-from-braveheart',
		answer: 'Braveheart - "After the beheading" - James Horner',
	},
	{
		url: 'https://soundcloud.com/angus-mcfadyen/you-have-bled-with-wallace?in=mel-gibson-official/sets/more-music-from-braveheart',
		answer: 'Braveheart - "You have bled with Wallace!" - James Horner',
	},
	{
		url: 'https://soundcloud.com/mel-gibson-official/warrior-poets-braveheart?in=mel-gibson-official/sets/more-music-from-braveheart',
		answer: 'Braveheart - Warrior Poets - James Horner',
	},
	{
		url: 'https://soundcloud.com/1st-battalion-queens-own-cameron-highlanders/scotland-the-brave-the-badge?in=mel-gibson-official/sets/more-music-from-braveheart',
		answer:
			'Braveheart - Scotland the brave / The Badge of Scotland / The Meeting of the Waters - James Horner',
	},
	{
		url: 'https://soundcloud.com/1st-battalion-queens-own-cameron-highlanders/leaving-glenurquhart-the?in=mel-gibson-official/sets/more-music-from-braveheart',
		answer:
			"Braveheart - Leaving Glenurquhart / The Highland Plaid / Jock Wilson's Ball - James Horner",
	},
	{
		url: 'https://soundcloud.com/1st-battalion-queens-own-cameron-highlanders/kirkhall-the-argyllshire?in=mel-gibson-official/sets/more-music-from-braveheart',
		answer:
			'Braveheart - Kirkhall / The Argyllshire Gathering / The Braemar Highland Gathering - James Horner',
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/opening-titles-jurassic-park?in=johnwilliams-official/sets/jurassic-park-20th-anniversary',
		answer: 'Jurassic Park - Opening Titles - John Williams',
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/theme-from-jurassic-park?in=johnwilliams-official/sets/jurassic-park-20th-anniversary',
		answer: 'Jurassic Park - Theme From Jurassic Park - John Williams',
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/incident-at-isla-nublar?in=johnwilliams-official/sets/jurassic-park-20th-anniversary',
		answer: 'Jurassic Park - Incident At Isla Nublar - John Williams',
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/journey-to-the-island-jurassic?in=johnwilliams-official/sets/jurassic-park-20th-anniversary',
		answer: 'Jurassic Park - Journey To The Island - John Williams',
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/the-raptor-attack-jurassic?in=johnwilliams-official/sets/jurassic-park-20th-anniversary',
		answer: 'Jurassic Park - The Raptor Attack - John Williams',
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/hatching-baby-raptor-jurassic?in=johnwilliams-official/sets/jurassic-park-20th-anniversary',
		answer: 'Jurassic Park - Hatching Baby Raptor - John Williams',
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/welcome-to-jurassic-park?in=johnwilliams-official/sets/jurassic-park-20th-anniversary',
		answer: 'Jurassic Park - Welcome To Jurassic Park - John Williams',
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/my-friend-the-brachiosaurus?in=johnwilliams-official/sets/jurassic-park-20th-anniversary',
		answer: 'Jurassic Park - My Friend, The Brachiosaurus - John Williams',
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/dennis-steals-the-embryo?in=johnwilliams-official/sets/jurassic-park-20th-anniversary',
		answer: 'Jurassic Park - Dennis Steals The Embryo - John Williams',
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/a-tree-for-my-bed-jurassic?in=johnwilliams-official/sets/jurassic-park-20th-anniversary',
		answer: 'Jurassic Park - A Tree For My Bed - John Williams',
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/high-wire-stunts-jurassic-park?in=johnwilliams-official/sets/jurassic-park-20th-anniversary',
		answer: 'Jurassic Park - High-Wire Stunts - John Williams',
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/remembering-petticoat-lane?in=johnwilliams-official/sets/jurassic-park-20th-anniversary',
		answer: 'Jurassic Park - Remembering Petticoat Lane - John Williams',
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/jurassic-park-gate-jurassic?in=johnwilliams-official/sets/jurassic-park-20th-anniversary',
		answer: 'Jurassic Park - Jurassic Park Gate - John Williams',
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/eye-to-eye-jurassic-park?in=johnwilliams-official/sets/jurassic-park-20th-anniversary',
		answer: 'Jurassic Park - Eye To Eye - John Williams',
	},
	{
		url: 'https://soundcloud.com/johnwilliams-official/t-rex-rescue-finale-jurassic?in=johnwilliams-official/sets/jurassic-park-20th-anniversary',
		answer: 'Jurassic Park - T-Rex Rescue & Finale - John Williams',
	},
	{
		url: 'https://soundcloud.com/ennio-morricone/il-buono-il-cattivo-il-brutto?in=ennio-morricone/sets/the-good-the-bad-the-ugly-2',
		answer:
			'The Good, The Bad And The Ugly - The Good, The Bad And The Ugly - Ennio Morricone',
	},
	{
		url: 'https://soundcloud.com/ennio-morricone/il-tramonto-the-sundown?in=ennio-morricone/sets/the-good-the-bad-the-ugly-2',
		answer: 'The Good, The Bad And The Ugly - The Sundown - Ennio Morricone',
	},
	{
		url: 'https://soundcloud.com/ennio-morricone/sentenza?in=ennio-morricone/sets/the-good-the-bad-the-ugly-2',
		answer: 'The Good, The Bad And The Ugly - Sentenza - Ennio Morricone',
	},
	{
		url: 'https://soundcloud.com/ennio-morricone/fuga-a-cavallo?in=ennio-morricone/sets/the-good-the-bad-the-ugly-2',
		answer: 'The Good, The Bad And The Ugly - Fuga A Cavallo - Ennio Morricone',
	},
	{
		url: 'https://soundcloud.com/ennio-morricone/il-ponte-di-corde?in=ennio-morricone/sets/the-good-the-bad-the-ugly-2',
		answer:
			'The Good, The Bad And The Ugly - Il Ponte Di Corde - Ennio Morricone',
	},
	{
		url: 'https://soundcloud.com/ennio-morricone/il-forte-the-strong-digitally?in=ennio-morricone/sets/the-good-the-bad-the-ugly-2',
		answer: 'The Good, The Bad And The Ugly - The Strong - Ennio Morricone',
	},
	{
		url: 'https://soundcloud.com/ennio-morricone/inseguimento?in=ennio-morricone/sets/the-good-the-bad-the-ugly-2',
		answer: 'The Good, The Bad And The Ugly - Inseguimento - Ennio Morricone',
	},
	{
		url: 'https://soundcloud.com/ennio-morricone/il-deserto-the-desert?in=ennio-morricone/sets/the-good-the-bad-the-ugly-2',
		answer: 'The Good, The Bad And The Ugly - The Desert - Ennio Morricone',
	},
	{
		url: 'https://soundcloud.com/ennio-morricone/la-carrozzo-dei-fantasmi-the?in=ennio-morricone/sets/the-good-the-bad-the-ugly-2',
		answer:
			'The Good, The Bad And The Ugly - The Carriage Of The Spirits - Ennio Morricone',
	},
	{
		url: 'https://soundcloud.com/ennio-morricone/la-missione-san-antonio?in=ennio-morricone/sets/the-good-the-bad-the-ugly-2',
		answer:
			'The Good, The Bad And The Ugly - La Missione San Antonio - Ennio Morricone',
	},
	{
		url: 'https://soundcloud.com/ennio-morricone/padre-ramirez?in=ennio-morricone/sets/the-good-the-bad-the-ugly-2',
		answer: 'The Good, The Bad And The Ugly - Padre Ramirez - Ennio Morricone',
	},
	{
		url: 'https://soundcloud.com/ennio-morricone/marcetta-marcia-2004-digital?in=ennio-morricone/sets/the-good-the-bad-the-ugly-2',
		answer: 'The Good, The Bad And The Ugly - Marcia - Ennio Morricone',
	},
	{
		url: 'https://soundcloud.com/ennio-morricone/la-storia-de-un-soldato-the?in=ennio-morricone/sets/the-good-the-bad-the-ugly-2',
		answer:
			'The Good, The Bad And The Ugly - The Story Of A Soldier - Ennio Morricone',
	},
	{
		url: 'https://soundcloud.com/ennio-morricone/il-treno-militare?in=ennio-morricone/sets/the-good-the-bad-the-ugly-2',
		answer:
			'The Good, The Bad And The Ugly - Il Treno Militare - Ennio Morricone',
	},
	{
		url: 'https://soundcloud.com/ennio-morricone/fine-di-una-spia?in=ennio-morricone/sets/the-good-the-bad-the-ugly-2',
		answer: 'The Good, The Bad And The Ugly - Fine Di Una Spia - Ennio Morricone',
	},
	{
		url: 'https://soundcloud.com/john-barry-official/main-title-expanded-looks-like?in=john-barry-official/sets/dances-with-wolves-original',
		answer:
			'Dances With Wolves - Main Title (expanded) / Looks Like a Suicide (expanded) - John Barry',
	},
	{
		url: 'https://soundcloud.com/john-barry-official/ride-to-fort-hays?in=john-barry-official/sets/dances-with-wolves-original',
		answer: 'Dances With Wolves - Ride to Fort Hays - John Barry',
	},
	{
		url: 'https://soundcloud.com/john-barry-official/journey-to-fort-sedgewick?in=john-barry-official/sets/dances-with-wolves-original',
		answer:
			'Dances With Wolves - Journey to Fort Sedgewick / Shooting Star / The John Dunbar Theme / Arrival at Fort Sedgewick (expanded) - John Barry',
	},
	{
		url: 'https://soundcloud.com/john-barry-official/the-john-dunbar-theme-theme?in=john-barry-official/sets/dances-with-wolves-original',
		answer:
			'Dances With Wolves - The John Dunbar Theme (From "Dances With Wolves") - John Barry',
	},
	{
		url: 'https://soundcloud.com/john-barry-official/the-death-of-timmons?in=john-barry-official/sets/dances-with-wolves-original',
		answer: 'Dances With Wolves - The Death of Timmons - John Barry',
	},
	{
		url: 'https://soundcloud.com/john-barry-official/two-socks-the-wolf-theme?in=john-barry-official/sets/dances-with-wolves-original',
		answer: 'Dances With Wolves - Two Socks / The Wolf Theme - John Barry',
	},
	{
		url: 'https://soundcloud.com/john-barry-official/stands-with-a-fist-remembers?in=john-barry-official/sets/dances-with-wolves-original',
		answer: 'Dances With Wolves - Stands With a Fist Remembers - John Barry',
	},
	{
		url: 'https://soundcloud.com/john-barry-official/the-buffalo-robe?in=john-barry-official/sets/dances-with-wolves-original',
		answer: 'Dances With Wolves - The Buffalo Robe - John Barry',
	},
	{
		url: 'https://soundcloud.com/john-barry-official/journey-to-the-buffalo-killing?in=john-barry-official/sets/dances-with-wolves-original',
		answer:
			'Dances With Wolves - Journey to the Buffalo Killing Ground - John Barry',
	},
	{
		url: 'https://soundcloud.com/john-barry-official/spotting-the-herd?in=john-barry-official/sets/dances-with-wolves-original',
		answer: 'Dances With Wolves - Spotting the Herd - John Barry',
	},
	{
		url: 'https://soundcloud.com/john-barry-official/the-buffalo-hunt-film-version?in=john-barry-official/sets/dances-with-wolves-original',
		answer: 'Dances With Wolves - The Buffalo Hunt (film version) - John Barry',
	},
	{
		url: 'https://soundcloud.com/john-barry-official/fire-dance?in=john-barry-official/sets/dances-with-wolves-original',
		answer: 'Dances With Wolves - Fire Dance - John Barry',
	},
	{
		url: 'https://soundcloud.com/john-barry-official/two-socks-at-play?in=john-barry-official/sets/dances-with-wolves-original',
		answer: 'Dances With Wolves - Two Socks at Play - John Barry',
	},
	{
		url: 'https://soundcloud.com/john-barry-official/falling-in-love?in=john-barry-official/sets/dances-with-wolves-original',
		answer: 'Dances With Wolves - Falling In Love - John Barry',
	},
	{
		url: 'https://soundcloud.com/john-barry-official/the-love-theme?in=john-barry-official/sets/dances-with-wolves-original',
		answer: 'Dances With Wolves - The Love Theme - John Barry',
	},
	{
		url: 'https://soundcloud.com/itzhak-perlman/theme-from-schindlers-list-1?in=itzhak-perlman/sets/schindlers-list-2',
		answer: "Schindler's List - Theme From Schindler's List - John Williams",
	},
	{
		url: 'https://soundcloud.com/itzhak-perlman/jewish-town-krakow-ghetto?in=itzhak-perlman/sets/schindlers-list-2',
		answer:
			"Schindler's List - Jewish Town (Krakow Ghetto, Winter '41) - John Williams",
	},
	{
		url: 'https://soundcloud.com/boston-symphony-orchestra/immolation-with-our-lives-we?in=itzhak-perlman/sets/schindlers-list-2',
		answer:
			"Schindler's List - Immolation (With Our Lives, We Give Life) - John Williams",
	},
	{
		url: 'https://soundcloud.com/boston-symphony-orchestra/remembrances?in=itzhak-perlman/sets/schindlers-list-2',
		answer: "Schindler's List - Remembrances - John Williams",
	},
	{
		url: 'https://soundcloud.com/boston-symphony-orchestra/schindlers-workforce?in=itzhak-perlman/sets/schindlers-list-2',
		answer: "Schindler's List - Schindler's Workforce - John Williams",
	},
	{
		url: 'https://soundcloud.com/ronitshapira/oyfn-pripetshok-nacht-aktion?in=itzhak-perlman/sets/schindlers-list-2',
		answer:
			"Schindler's List - Oyf'n Pripetshok / Nacht Aktion (From \"Schindler's List\") - John Williams",
	},
	{
		url: 'https://soundcloud.com/itzhak-perlman/i-could-have-done-more?in=itzhak-perlman/sets/schindlers-list-2',
		answer: "Schindler's List - I Could Have Done More - John Williams",
	},
	{
		url: 'https://soundcloud.com/itzhak-perlman/auschwitz-birkenau?in=itzhak-perlman/sets/schindlers-list-2',
		answer: "Schindler's List - Auschwitz-Birkenau - John Williams",
	},
	{
		url: 'https://soundcloud.com/boston-symphony-orchestra/stolen-memories?in=itzhak-perlman/sets/schindlers-list-2',
		answer: "Schindler's List - Stolen Memories - John Williams",
	},
	{
		url: 'https://soundcloud.com/itzhak-perlman/making-the-list?in=itzhak-perlman/sets/schindlers-list-2',
		answer: "Schindler's List - Making The List - John Williams",
	},
	{
		url: 'https://soundcloud.com/boston-symphony-orchestra/give-me-your-names?in=itzhak-perlman/sets/schindlers-list-2',
		answer: "Schindler's List - Give Me Your Names - John Williams",
	},
	{
		url: 'https://soundcloud.com/hanatzur/yerushalaim-shel-zahav?in=itzhak-perlman/sets/schindlers-list-2',
		answer:
			"Schindler's List - Yerushalaim Shel Zahav (Jerusalem of Gold) - John Williams",
	},
	{
		url: 'https://soundcloud.com/itzhak-perlman/remembrances?in=itzhak-perlman/sets/schindlers-list-2',
		answer: "Schindler's List - Remembrances - John Williams",
	},
	{
		url: 'https://soundcloud.com/itzhak-perlman/theme-from-schindlers-list?in=itzhak-perlman/sets/schindlers-list-2',
		answer:
			"Schindler's List - Theme From Schindler's List (Reprise) - John Williams",
	},
	{
		url: 'https://soundcloud.com/jaydencash2013/the-exorcist-theme',
		answer: 'The Exorcist - Theme From The Exorcist - Jack Nitzsche',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/the-glory-days-score?in=michael-giacchino/sets/the-incredibles-1',
		answer: 'The Incredibles - The Glory Days - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/mr-huph-will-see-you-now-score?in=michael-giacchino/sets/the-incredibles-1',
		answer: 'The Incredibles - Mr. Huph Will See You Now - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/adventure-calling-score?in=michael-giacchino/sets/the-incredibles-1',
		answer: 'The Incredibles - Adventure Calling - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/bob-vs-the-omnidroid-score?in=michael-giacchino/sets/the-incredibles-1',
		answer: 'The Incredibles - Bob vs. The Omnidroid - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/lava-in-the-afternoon-score?in=michael-giacchino/sets/the-incredibles-1',
		answer: 'The Incredibles - Lava in the Afternoon - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/lifes-incredible-again-score?in=michael-giacchino/sets/the-incredibles-1',
		answer: "The Incredibles - Life's Incredible Again - Michael Giacchino",
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/off-to-work-score?in=michael-giacchino/sets/the-incredibles-1',
		answer: 'The Incredibles - Off to Work - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/new-and-improved-score?in=michael-giacchino/sets/the-incredibles-1',
		answer: 'The Incredibles - New and Improved - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/kronos-unveiled-score?in=michael-giacchino/sets/the-incredibles-1',
		answer: 'The Incredibles - Kronos Unveiled - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/marital-rescue-score?in=michael-giacchino/sets/the-incredibles-1',
		answer: 'The Incredibles - Marital Rescue - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/missile-lock-score?in=michael-giacchino/sets/the-incredibles-1',
		answer: 'The Incredibles - Missile Lock - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/lithe-or-death-score?in=michael-giacchino/sets/the-incredibles-1',
		answer: 'The Incredibles - Lithe or Death - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/100-mile-dash-score?in=michael-giacchino/sets/the-incredibles-1',
		answer: 'The Incredibles - 100 Mile Dash - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/a-whole-family-of-supers-score?in=michael-giacchino/sets/the-incredibles-1',
		answer: 'The Incredibles - A Whole Family of Supers - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/escaping-nomanisan-score?in=michael-giacchino/sets/the-incredibles-1',
		answer: 'The Incredibles - Escaping Nomanisan - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/oseschuppel/srothe-zaeuerli?in=alexandre-desplat-official/sets/the-grand-budapest-hotel-1',
		answer: "The Grand Budapest Hotel - s'Rothe-Zäuerli - Alexandre Desplat",
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/the-alpine-sudetenwaltz?in=alexandre-desplat-official/sets/the-grand-budapest-hotel-1',
		answer:
			'The Grand Budapest Hotel - The Alpine Sudetenwaltz - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/mr-moustafa?in=alexandre-desplat-official/sets/the-grand-budapest-hotel-1',
		answer: 'The Grand Budapest Hotel - Mr. Moustafa - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/overture-m-gustave-h?in=alexandre-desplat-official/sets/the-grand-budapest-hotel-1',
		answer:
			'The Grand Budapest Hotel - Overture: M. Gustave H - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/a-prayer-for-madame-d?in=alexandre-desplat-official/sets/the-grand-budapest-hotel-1',
		answer:
			'The Grand Budapest Hotel - A Prayer For Madame D - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/the-new-lobby-boy?in=alexandre-desplat-official/sets/the-grand-budapest-hotel-1',
		answer: 'The Grand Budapest Hotel - The New Lobby Boy - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/siefriedbehrenddzochamberorchestra/concerto-for-lute-and-plucked?in=alexandre-desplat-official/sets/the-grand-budapest-hotel-1',
		answer:
			'The Grand Budapest Hotel - Concerto For Lute And Plucked Strings I. Moderato - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/daylight-express-to-lutz?in=alexandre-desplat-official/sets/the-grand-budapest-hotel-1',
		answer:
			'The Grand Budapest Hotel - Daylight Express To Lutz - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/schloss-lutz-overture?in=alexandre-desplat-official/sets/the-grand-budapest-hotel-1',
		answer:
			'The Grand Budapest Hotel - Schloss Lutz Overture - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/the-family-desgoffe-und-taxis?in=alexandre-desplat-official/sets/the-grand-budapest-hotel-1',
		answer:
			'The Grand Budapest Hotel - The Family Desgoffe Und Taxis - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/last-will-and-testament?in=alexandre-desplat-official/sets/the-grand-budapest-hotel-1',
		answer:
			'The Grand Budapest Hotel - Last Will And Testament - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/up-the-stairs-down-the-hall?in=alexandre-desplat-official/sets/the-grand-budapest-hotel-1',
		answer:
			'The Grand Budapest Hotel - Up The Stairs/Down The Hall - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/night-train-to-nebelsbad?in=alexandre-desplat-official/sets/the-grand-budapest-hotel-1',
		answer:
			'The Grand Budapest Hotel - Night Train To Nebelsbad - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/the-lutz-police-militia?in=alexandre-desplat-official/sets/the-grand-budapest-hotel-1',
		answer:
			'The Grand Budapest Hotel - The Lutz Police Militia - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/check-point-19-criminal?in=alexandre-desplat-official/sets/the-grand-budapest-hotel-1',
		answer:
			'The Grand Budapest Hotel - Check Point 19 Criminal Internment Camp Overture - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/j-g-jopling-private-inquiry?in=alexandre-desplat-official/sets/the-grand-budapest-hotel-1',
		answer:
			'The Grand Budapest Hotel - J.G. Jopling, Private Inquiry Agent - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/a-dash-of-salt-ludwigs-theme?in=alexandre-desplat-official/sets/the-grand-budapest-hotel-1',
		answer:
			"The Grand Budapest Hotel - A Dash Of Salt (Ludwig's Theme) - Alexandre Desplat",
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/the-cold-blooded-murder-of?in=alexandre-desplat-official/sets/the-grand-budapest-hotel-1',
		answer:
			'The Grand Budapest Hotel - The Cold-Blooded Murder Of Deputy Vilmos Kovacs - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/escape-concerto?in=alexandre-desplat-official/sets/the-grand-budapest-hotel-1',
		answer: 'The Grand Budapest Hotel - Escape Concerto - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/the-war-zeros-theme?in=alexandre-desplat-official/sets/the-grand-budapest-hotel-1',
		answer:
			"The Grand Budapest Hotel - The War (Zero's Theme) - Alexandre Desplat",
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/no-safe-house?in=alexandre-desplat-official/sets/the-grand-budapest-hotel-1',
		answer: 'The Grand Budapest Hotel - No Safe-House - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/the-society-of-the-crossed?in=alexandre-desplat-official/sets/the-grand-budapest-hotel-1',
		answer:
			'The Grand Budapest Hotel - The Society Of The Crossed Keys - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/m-ivan?in=alexandre-desplat-official/sets/the-grand-budapest-hotel-1',
		answer: 'The Grand Budapest Hotel - M. Ivan - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/lot-117?in=alexandre-desplat-official/sets/the-grand-budapest-hotel-1',
		answer: 'The Grand Budapest Hotel - Lot 117 - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/third-class-carriage?in=alexandre-desplat-official/sets/the-grand-budapest-hotel-1',
		answer: 'The Grand Budapest Hotel - Third Class Carriage - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/canto-at-gabelmeisters-peak?in=alexandre-desplat-official/sets/the-grand-budapest-hotel-1',
		answer:
			"The Grand Budapest Hotel - Canto At Gabelmeister's Peak - Alexandre Desplat",
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/a-troops-barracks-requiem-for?in=alexandre-desplat-official/sets/the-grand-budapest-hotel-1',
		answer:
			'The Grand Budapest Hotel - A Troops Barracks (Requiem For The Grand Budapest) - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/cleared-of-all-charges?in=alexandre-desplat-official/sets/the-grand-budapest-hotel-1',
		answer:
			'The Grand Budapest Hotel - Cleared Of All Charges - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/the-mystical-union?in=alexandre-desplat-official/sets/the-grand-budapest-hotel-1',
		answer: 'The Grand Budapest Hotel - The Mystical Union - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/traditional-arrangement?in=alexandre-desplat-official/sets/the-grand-budapest-hotel-1',
		answer:
			'The Grand Budapest Hotel - Traditional Arrangement: "Moonshine" - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/clint-mansell-official/summer-overture?in=clint-mansell-official/sets/requiem-for-a-dream-ost',
		answer: 'Requiem for a Dream - Summer Overture - Clint Mansell',
	},
	{
		url: 'https://soundcloud.com/clint-mansell-official/party-1?in=clint-mansell-official/sets/requiem-for-a-dream-ost',
		answer: 'Requiem for a Dream - Party - Clint Mansell',
	},
	{
		url: 'https://soundcloud.com/clint-mansell-official/coney-island-dreaming?in=clint-mansell-official/sets/requiem-for-a-dream-ost',
		answer: 'Requiem for a Dream - Coney Island Dreaming - Clint Mansell',
	},
	{
		url: 'https://soundcloud.com/clint-mansell-official/party?in=clint-mansell-official/sets/requiem-for-a-dream-ost',
		answer: 'Requiem for a Dream - Party - Clint Mansell',
	},
	{
		url: 'https://soundcloud.com/clint-mansell-official/chocolate-charms?in=clint-mansell-official/sets/requiem-for-a-dream-ost',
		answer: 'Requiem for a Dream - Chocolate Charms - Clint Mansell',
	},
	{
		url: 'https://soundcloud.com/clint-mansell-official/ghosts-of-things-to-come?in=clint-mansell-official/sets/requiem-for-a-dream-ost',
		answer: 'Requiem for a Dream - Ghosts of Things to Come - Clint Mansell',
	},
	{
		url: 'https://soundcloud.com/clint-mansell-official/dreams?in=clint-mansell-official/sets/requiem-for-a-dream-ost',
		answer: 'Requiem for a Dream - Dreams - Clint Mansell',
	},
	{
		url: 'https://soundcloud.com/clint-mansell-official/tense-1?in=clint-mansell-official/sets/requiem-for-a-dream-ost',
		answer: 'Requiem for a Dream - Tense - Clint Mansell',
	},
	{
		url: 'https://soundcloud.com/clint-mansell-official/dr-pill?in=clint-mansell-official/sets/requiem-for-a-dream-ost',
		answer: 'Requiem for a Dream - Dr. Pill - Clint Mansell',
	},
	{
		url: 'https://soundcloud.com/clint-mansell-official/high-on-life?in=clint-mansell-official/sets/requiem-for-a-dream-ost',
		answer: 'Requiem for a Dream - High on Life - Clint Mansell',
	},
	{
		url: 'https://soundcloud.com/clint-mansell-official/ghosts?in=clint-mansell-official/sets/requiem-for-a-dream-ost',
		answer: 'Requiem for a Dream - Ghosts - Clint Mansell',
	},
	{
		url: 'https://soundcloud.com/clint-mansell-official/crimin-dealin?in=clint-mansell-official/sets/requiem-for-a-dream-ost',
		answer: "Requiem for a Dream - Crimin' & Dealin' - Clint Mansell",
	},
	{
		url: 'https://soundcloud.com/clint-mansell-official/hope-overture?in=clint-mansell-official/sets/requiem-for-a-dream-ost',
		answer: 'Requiem for a Dream - Hope Overture - Clint Mansell',
	},
	{
		url: 'https://soundcloud.com/clint-mansell-official/tense?in=clint-mansell-official/sets/requiem-for-a-dream-ost',
		answer: 'Requiem for a Dream - Tense - Clint Mansell',
	},
	{
		url: 'https://soundcloud.com/clint-mansell-official/bialy-lox-conga?in=clint-mansell-official/sets/requiem-for-a-dream-ost',
		answer: 'Requiem for a Dream - Bialy & Lox Conga - Clint Mansell',
	},
	{
		url: 'https://soundcloud.com/ludwiggoransson/wakanda-origins?in=ludwiggoransson/sets/black-panther-3',
		answer: 'Black Panther - Wakanda Origins - Ludwig Goransson',
	},
	{
		url: 'https://soundcloud.com/ludwiggoransson/royal-talon-fighter?in=ludwiggoransson/sets/black-panther-3',
		answer: 'Black Panther - Royal Talon Fighter - Ludwig Goransson',
	},
	{
		url: 'https://soundcloud.com/ludwiggoransson/wakanda?in=ludwiggoransson/sets/black-panther-3',
		answer: 'Black Panther - Wakanda (feat. Baaba Maal) - Ludwig Goransson',
	},
	{
		url: 'https://soundcloud.com/ludwiggoransson/warrior-falls?in=ludwiggoransson/sets/black-panther-3',
		answer: 'Black Panther - Warrior Falls - Ludwig Goransson',
	},
	{
		url: 'https://soundcloud.com/ludwiggoransson/the-jabari?in=ludwiggoransson/sets/black-panther-3',
		answer: 'Black Panther - The Jabari - Ludwig Goransson',
	},
	{
		url: 'https://soundcloud.com/ludwiggoransson/waterfall-fight?in=ludwiggoransson/sets/black-panther-3',
		answer: 'Black Panther - Waterfall Fight - Ludwig Goransson',
	},
	{
		url: 'https://soundcloud.com/ludwiggoransson/ancestral-plane?in=ludwiggoransson/sets/black-panther-3',
		answer: 'Black Panther - Ancestral Plane - Ludwig Goransson',
	},
	{
		url: 'https://soundcloud.com/ludwiggoransson/killmonger?in=ludwiggoransson/sets/black-panther-3',
		answer: 'Black Panther - Killmonger - Ludwig Goransson',
	},
	{
		url: 'https://soundcloud.com/ludwiggoransson/phambili?in=ludwiggoransson/sets/black-panther-3',
		answer: 'Black Panther - Phambili - Ludwig Goransson',
	},
	{
		url: 'https://soundcloud.com/ludwiggoransson/casino-brawl?in=ludwiggoransson/sets/black-panther-3',
		answer: 'Black Panther - Casino Brawl - Ludwig Goransson',
	},
	{
		url: 'https://soundcloud.com/ludwiggoransson/busan-car-chase?in=ludwiggoransson/sets/black-panther-3',
		answer: 'Black Panther - Busan Car Chase - Ludwig Goransson',
	},
	{
		url: 'https://soundcloud.com/ludwiggoransson/questioning-klaue?in=ludwiggoransson/sets/black-panther-3',
		answer: 'Black Panther - Questioning Klaue - Ludwig Goransson',
	},
	{
		url: 'https://soundcloud.com/ludwiggoransson/outsider?in=ludwiggoransson/sets/black-panther-3',
		answer: 'Black Panther - Outsider - Ludwig Goransson',
	},
	{
		url: 'https://soundcloud.com/ludwiggoransson/is-this-wakanda?in=ludwiggoransson/sets/black-panther-3',
		answer: 'Black Panther - Is This Wakanda? - Ludwig Goransson',
	},
	{
		url: 'https://soundcloud.com/ludwiggoransson/killmongers-challenge?in=ludwiggoransson/sets/black-panther-3',
		answer: "Black Panther - Killmonger's Challenge - Ludwig Goransson",
	},
	{
		url: 'https://soundcloud.com/alan-silvestri/totally-fine?in=alan-silvestri/sets/avengers-endgame-1',
		answer: 'Avengers: Endgame - Totally Fine - Alan Silvestri',
	},
	{
		url: 'https://soundcloud.com/alan-silvestri/arrival-1?in=alan-silvestri/sets/avengers-endgame-1',
		answer: 'Avengers: Endgame - Arrival - Alan Silvestri',
	},
	{
		url: 'https://soundcloud.com/alan-silvestri/no-trust?in=alan-silvestri/sets/avengers-endgame-1',
		answer: 'Avengers: Endgame - No Trust - Alan Silvestri',
	},
	{
		url: 'https://soundcloud.com/alan-silvestri/where-are-they?in=alan-silvestri/sets/avengers-endgame-1',
		answer: 'Avengers: Endgame - Where Are They? - Alan Silvestri',
	},
	{
		url: 'https://soundcloud.com/alan-silvestri/becoming-whole-again?in=alan-silvestri/sets/avengers-endgame-1',
		answer: 'Avengers: Endgame - Becoming Whole Again - Alan Silvestri',
	},
	{
		url: 'https://soundcloud.com/alan-silvestri/i-figured-it-out?in=alan-silvestri/sets/avengers-endgame-1',
		answer: 'Avengers: Endgame - I Figured It Out - Alan Silvestri',
	},
	{
		url: 'https://soundcloud.com/alan-silvestri/perfectly-not-confusing?in=alan-silvestri/sets/avengers-endgame-1',
		answer: 'Avengers: Endgame - Perfectly Not Confusing - Alan Silvestri',
	},
	{
		url: 'https://soundcloud.com/alan-silvestri/you-shouldnt-be-here?in=alan-silvestri/sets/avengers-endgame-1',
		answer: "Avengers: Endgame - You Shouldn't Be Here - Alan Silvestri",
	},
	{
		url: 'https://soundcloud.com/alan-silvestri/the-how-works?in=alan-silvestri/sets/avengers-endgame-1',
		answer: 'Avengers: Endgame - The How Works - Alan Silvestri',
	},
	{
		url: 'https://soundcloud.com/alan-silvestri/snap-out-of-it?in=alan-silvestri/sets/avengers-endgame-1',
		answer: 'Avengers: Endgame - Snap Out of It - Alan Silvestri',
	},
	{
		url: 'https://soundcloud.com/alan-silvestri/so-many-stairs?in=alan-silvestri/sets/avengers-endgame-1',
		answer: 'Avengers: Endgame - So Many Stairs - Alan Silvestri',
	},
	{
		url: 'https://soundcloud.com/alan-silvestri/one-shot?in=alan-silvestri/sets/avengers-endgame-1',
		answer: 'Avengers: Endgame - One Shot - Alan Silvestri',
	},
	{
		url: 'https://soundcloud.com/alan-silvestri/watch-each-others-six?in=alan-silvestri/sets/avengers-endgame-1',
		answer: "Avengers: Endgame - Watch Each Other's Six - Alan Silvestri",
	},
	{
		url: 'https://soundcloud.com/alan-silvestri/i-cant-risk-this?in=alan-silvestri/sets/avengers-endgame-1',
		answer: "Avengers: Endgame - I Can't Risk This - Alan Silvestri",
	},
	{
		url: 'https://soundcloud.com/alan-silvestri/he-gave-it-away?in=alan-silvestri/sets/avengers-endgame-1',
		answer: 'Avengers: Endgame - He Gave It Away - Alan Silvestri',
	},
	{
		url: 'https://soundcloud.com/trent-reznor-official/what-have-we-done-to-each?in=trent-reznor-official/sets/gone-girl-soundtrack-from-the',
		answer: 'Gone Girl - What Have We Done to Each Other? - Trent Reznor',
	},
	{
		url: 'https://soundcloud.com/trent-reznor-official/sugar-storm?in=trent-reznor-official/sets/gone-girl-soundtrack-from-the',
		answer: 'Gone Girl - Sugar Storm - Trent Reznor',
	},
	{
		url: 'https://soundcloud.com/trent-reznor-official/empty-places?in=trent-reznor-official/sets/gone-girl-soundtrack-from-the',
		answer: 'Gone Girl - Empty Places - Trent Reznor',
	},
	{
		url: 'https://soundcloud.com/trent-reznor-official/with-suspicion?in=trent-reznor-official/sets/gone-girl-soundtrack-from-the',
		answer: 'Gone Girl - With Suspicion - Trent Reznor',
	},
	{
		url: 'https://soundcloud.com/trent-reznor-official/just-like-you?in=trent-reznor-official/sets/gone-girl-soundtrack-from-the',
		answer: 'Gone Girl - Just Like You - Trent Reznor',
	},
	{
		url: 'https://soundcloud.com/trent-reznor-official/appearances?in=trent-reznor-official/sets/gone-girl-soundtrack-from-the',
		answer: 'Gone Girl - Appearances - Trent Reznor',
	},
	{
		url: 'https://soundcloud.com/trent-reznor-official/clue-one?in=trent-reznor-official/sets/gone-girl-soundtrack-from-the',
		answer: 'Gone Girl - Clue One - Trent Reznor',
	},
	{
		url: 'https://soundcloud.com/trent-reznor-official/clue-two?in=trent-reznor-official/sets/gone-girl-soundtrack-from-the',
		answer: 'Gone Girl - Clue Two - Trent Reznor',
	},
	{
		url: 'https://soundcloud.com/trent-reznor-official/background-noise?in=trent-reznor-official/sets/gone-girl-soundtrack-from-the',
		answer: 'Gone Girl - Background Noise - Trent Reznor',
	},
	{
		url: 'https://soundcloud.com/trent-reznor-official/procedural?in=trent-reznor-official/sets/gone-girl-soundtrack-from-the',
		answer: 'Gone Girl - Procedural - Trent Reznor',
	},
	{
		url: 'https://soundcloud.com/trent-reznor-official/something-disposable?in=trent-reznor-official/sets/gone-girl-soundtrack-from-the',
		answer: 'Gone Girl - Something Disposable - Trent Reznor',
	},
	{
		url: 'https://soundcloud.com/trent-reznor-official/like-home?in=trent-reznor-official/sets/gone-girl-soundtrack-from-the',
		answer: 'Gone Girl - Like Home - Trent Reznor',
	},
	{
		url: 'https://soundcloud.com/trent-reznor-official/empty-places-reprise?in=trent-reznor-official/sets/gone-girl-soundtrack-from-the',
		answer: 'Gone Girl - Empty Places (Reprise) - Trent Reznor',
	},
	{
		url: 'https://soundcloud.com/trent-reznor-official/the-way-he-looks-at-me?in=trent-reznor-official/sets/gone-girl-soundtrack-from-the',
		answer: 'Gone Girl - The Way He Looks at Me - Trent Reznor',
	},
	{
		url: 'https://soundcloud.com/trent-reznor-official/technically-missing?in=trent-reznor-official/sets/gone-girl-soundtrack-from-the',
		answer: 'Gone Girl - Technically, Missing - Trent Reznor',
	},
	{
		url: 'https://soundcloud.com/junkiexl/survive-extended-version?in=junkiexl/sets/mad-max-fury-road-original-1',
		answer: 'Mad Max: Fury Road - Survive (Extended Version) - Tom Holkenborg',
	},
	{
		url: 'https://soundcloud.com/junkiexl/escape-extended-version?in=junkiexl/sets/mad-max-fury-road-original-1',
		answer: 'Mad Max: Fury Road - Escape (Extended Version) - Tom Holkenborg',
	},
	{
		url: 'https://soundcloud.com/junkiexl/immortans-citadel-extended?in=junkiexl/sets/mad-max-fury-road-original-1',
		answer:
			"Mad Max: Fury Road - Immortan's Citadel (Extended Version) - Tom Holkenborg",
	},
	{
		url: 'https://soundcloud.com/junkiexl/blood-bag-extended-version?in=junkiexl/sets/mad-max-fury-road-original-1',
		answer: 'Mad Max: Fury Road - Blood Bag (Extended Version) - Tom Holkenborg',
	},
	{
		url: 'https://soundcloud.com/junkiexl/buzzards-arrive-bonus-track?in=junkiexl/sets/mad-max-fury-road-original-1',
		answer: 'Mad Max: Fury Road - Buzzards Arrive (Bonus Track) - Tom Holkenborg',
	},
	{
		url: 'https://soundcloud.com/junkiexl/spikey-cars-extended-version?in=junkiexl/sets/mad-max-fury-road-original-1',
		answer:
			'Mad Max: Fury Road - Spikey Cars (Extended Version) - Tom Holkenborg',
	},
	{
		url: 'https://soundcloud.com/junkiexl/storm-is-coming-extended?in=junkiexl/sets/mad-max-fury-road-original-1',
		answer:
			'Mad Max: Fury Road - Storm Is Coming (Extended Version) - Tom Holkenborg',
	},
	{
		url: 'https://soundcloud.com/junkiexl/we-are-not-things-extended?in=junkiexl/sets/mad-max-fury-road-original-1',
		answer:
			'Mad Max: Fury Road - We Are Not Things (Extended Version) - Tom Holkenborg',
	},
	{
		url: 'https://soundcloud.com/junkiexl/water-extended-version?in=junkiexl/sets/mad-max-fury-road-original-1',
		answer: 'Mad Max: Fury Road - Water (Extended Version) - Tom Holkenborg',
	},
	{
		url: 'https://soundcloud.com/junkiexl/the-rig-extended-version?in=junkiexl/sets/mad-max-fury-road-original-1',
		answer: 'Mad Max: Fury Road - The Rig (Extended Version) - Tom Holkenborg',
	},
	{
		url: 'https://soundcloud.com/junkiexl/into-the-canyon-bonus-track?in=junkiexl/sets/mad-max-fury-road-original-1',
		answer: 'Mad Max: Fury Road - Into the Canyon (Bonus Track) - Tom Holkenborg',
	},
	{
		url: 'https://soundcloud.com/junkiexl/brothers-in-arms-extended?in=junkiexl/sets/mad-max-fury-road-original-1',
		answer:
			'Mad Max: Fury Road - Brothers In Arms (Extended Version) - Tom Holkenborg',
	},
	{
		url: 'https://soundcloud.com/junkiexl/the-chase-bonus-track?in=junkiexl/sets/mad-max-fury-road-original-1',
		answer: 'Mad Max: Fury Road - The Chase (Bonus Track) - Tom Holkenborg',
	},
	{
		url: 'https://soundcloud.com/junkiexl/moving-on-bonus-track?in=junkiexl/sets/mad-max-fury-road-original-1',
		answer: 'Mad Max: Fury Road - Moving On (Bonus Track) - Tom Holkenborg',
	},
	{
		url: 'https://soundcloud.com/junkiexl/the-bog-extended-version?in=junkiexl/sets/mad-max-fury-road-original-1',
		answer: 'Mad Max: Fury Road - The Bog (Extended Version) - Tom Holkenborg',
	},
	{
		url: 'https://soundcloud.com/john-carpenter-official/track-1?in=john-carpenter-official/sets/halloween-original-motion',
		answer: 'Halloween - Intro - John Carpenter',
	},
	{
		url: 'https://soundcloud.com/john-carpenter-official/track-2?in=john-carpenter-official/sets/halloween-original-motion',
		answer: 'Halloween - Halloween Theme - John Carpenter',
	},
	{
		url: 'https://soundcloud.com/john-carpenter-official/track-3?in=john-carpenter-official/sets/halloween-original-motion',
		answer: 'Halloween - Laurie’s Theme - John Carpenter',
	},
	{
		url: 'https://soundcloud.com/john-carpenter-official/track-4?in=john-carpenter-official/sets/halloween-original-motion',
		answer: 'Halloween - Prison Montage - John Carpenter',
	},
	{
		url: 'https://soundcloud.com/john-carpenter-official/track-5?in=john-carpenter-official/sets/halloween-original-motion',
		answer: 'Halloween - Michael Kills - John Carpenter',
	},
	{
		url: 'https://soundcloud.com/john-carpenter-official/track-6?in=john-carpenter-official/sets/halloween-original-motion',
		answer: 'Halloween - Michael Kills Again - John Carpenter',
	},
	{
		url: 'https://soundcloud.com/john-carpenter-official/track-7?in=john-carpenter-official/sets/halloween-original-motion',
		answer: 'Halloween - The Shape Returns - John Carpenter',
	},
	{
		url: 'https://soundcloud.com/john-carpenter-official/track-8?in=john-carpenter-official/sets/halloween-original-motion',
		answer: 'Halloween - The Bogeyman - John Carpenter',
	},
	{
		url: 'https://soundcloud.com/john-carpenter-official/track-9?in=john-carpenter-official/sets/halloween-original-motion',
		answer: 'Halloween - The Shape Kills - John Carpenter',
	},
	{
		url: 'https://soundcloud.com/john-carpenter-official/track-10?in=john-carpenter-official/sets/halloween-original-motion',
		answer: 'Halloween - Laurie Sees the Shape - John Carpenter',
	},
	{
		url: 'https://soundcloud.com/john-carpenter-official/track-11?in=john-carpenter-official/sets/halloween-original-motion',
		answer: 'Halloween - Wrought Iron Fence - John Carpenter',
	},
	{
		url: 'https://soundcloud.com/john-carpenter-official/track-12?in=john-carpenter-official/sets/halloween-original-motion',
		answer: 'Halloween - The Shape Hunts Allyson - John Carpenter',
	},
	{
		url: 'https://soundcloud.com/john-carpenter-official/track-13?in=john-carpenter-official/sets/halloween-original-motion',
		answer: 'Halloween - Allyson Discovered - John Carpenter',
	},
	{
		url: 'https://soundcloud.com/john-carpenter-official/track-14?in=john-carpenter-official/sets/halloween-original-motion',
		answer: 'Halloween - Say Something - John Carpenter',
	},
	{
		url: 'https://soundcloud.com/john-carpenter-official/track-15?in=john-carpenter-official/sets/halloween-original-motion',
		answer: "Halloween - Ray's Goodbye - John Carpenter",
	},
	{
		url: 'https://soundcloud.com/john-carpenter-official/track-16?in=john-carpenter-official/sets/halloween-original-motion',
		answer: 'Halloween - The Shape Is Monumental - John Carpenter',
	},
	{
		url: 'https://soundcloud.com/john-carpenter-official/track-17?in=john-carpenter-official/sets/halloween-original-motion',
		answer: 'Halloween - The Shape and Laurie Fight - John Carpenter',
	},
	{
		url: 'https://soundcloud.com/john-carpenter-official/track-18?in=john-carpenter-official/sets/halloween-original-motion',
		answer: 'Halloween - The Grind - John Carpenter',
	},
	{
		url: 'https://soundcloud.com/john-carpenter-official/track-19?in=john-carpenter-official/sets/halloween-original-motion',
		answer: 'Halloween - Trap the Shape - John Carpenter',
	},
	{
		url: 'https://soundcloud.com/john-carpenter-official/track-20?in=john-carpenter-official/sets/halloween-original-motion',
		answer: 'Halloween - The Shape Burns - John Carpenter',
	},
	{
		url: 'https://soundcloud.com/john-carpenter-official/track-21?in=john-carpenter-official/sets/halloween-original-motion',
		answer: 'Halloween - Halloween Triumphant - John Carpenter',
	},
	{
		url: 'https://soundcloud.com/bill-conti-official/gonna-fly-now-theme-from-rocky?in=bill-conti-official/sets/rocky-38',
		answer: 'Rocky - Gonna Fly Now (Theme From "Rocky") - Bill Conti',
	},
	{
		url: 'https://soundcloud.com/bill-conti-official/philadelphia-morning-from-the?in=bill-conti-official/sets/rocky-38',
		answer: 'Rocky - Philadelphia Morning - Bill Conti',
	},
	{
		url: 'https://soundcloud.com/bill-conti-official/going-the-distance-from-the?in=bill-conti-official/sets/rocky-38',
		answer: 'Rocky - Going The Distance - Bill Conti',
	},
	{
		url: 'https://soundcloud.com/bill-conti-official/reflections-from-the-rocky?in=bill-conti-official/sets/rocky-38',
		answer: 'Rocky - Reflections - Bill Conti',
	},
	{
		url: 'https://soundcloud.com/bill-conti-official/marines-hymn-yankee-doodle?in=bill-conti-official/sets/rocky-38',
		answer: "Rocky - Marines' Hymn/Yankee Doodle - Bill Conti",
	},
	{
		url: 'https://soundcloud.com/valentine-official/take-you-back-street-corner?in=bill-conti-official/sets/rocky-38',
		answer:
			'Rocky - Take You Back (Street Corner Song From "Rocky") - Bill Conti',
	},
	{
		url: 'https://soundcloud.com/bill-conti-official/first-date-from-the-rocky?in=bill-conti-official/sets/rocky-38',
		answer: 'Rocky - First Date - Bill Conti',
	},
	{
		url: 'https://soundcloud.com/bill-conti-official/you-take-my-heart-away-from?in=bill-conti-official/sets/rocky-38',
		answer:
			'Rocky - You Take My Heart Away [feat. DeEtta Little & Nelson Pigford] - Bill Conti',
	},
	{
		url: 'https://soundcloud.com/bill-conti-official/fanfare-for-rocky-from-the?in=bill-conti-official/sets/rocky-38',
		answer: 'Rocky - Fanfare For Rocky - Bill Conti',
	},
	{
		url: 'https://soundcloud.com/bill-conti-official/butkus-from-the-rocky?in=bill-conti-official/sets/rocky-38',
		answer: 'Rocky - Butkus - Bill Conti',
	},
	{
		url: 'https://soundcloud.com/bill-conti-official/alone-in-the-ring-from-the?in=bill-conti-official/sets/rocky-38',
		answer: 'Rocky - Alone In The Ring - Bill Conti',
	},
	{
		url: 'https://soundcloud.com/bill-conti-official/the-final-bell-from-the-rocky?in=bill-conti-official/sets/rocky-38',
		answer: 'Rocky - The Final Bell - Bill Conti',
	},
	{
		url: 'https://soundcloud.com/bill-conti-official/rockys-reward-from-the-rocky?in=bill-conti-official/sets/rocky-38',
		answer: "Rocky - Rocky's Reward - Bill Conti",
	},
	{
		url: 'https://soundcloud.com/alan-menken/prologue-beauty-and-the-beast?in=alan-menken/sets/beauty-and-the-beast-7815688',
		answer: 'Beauty and the Beast - Prologue: Beauty and the Beast - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/chorus-beauty-and-the-beast/belle-1?in=alan-menken/sets/beauty-and-the-beast-7815688',
		answer: 'Beauty and the Beast - Belle - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/paige-ohara-official/belle-reprise-soundtrack?in=alan-menken/sets/beauty-and-the-beast-7815688',
		answer: 'Beauty and the Beast - Belle Reprise - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/chorus-beauty-and-the-beast/gaston-from-beauty-and-the?in=alan-menken/sets/beauty-and-the-beast-7815688',
		answer: 'Beauty and the Beast - Gaston - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/jesse-corti/gaston-reprise-from-beauty-and?in=alan-menken/sets/beauty-and-the-beast-7815688',
		answer: 'Beauty and the Beast - Gaston (Reprise) - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/chorus-beauty-and-the-beast/be-our-guest?in=alan-menken/sets/beauty-and-the-beast-7815688',
		answer: 'Beauty and the Beast - Be Our Guest - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/angela-lansbury-official/something-there-from-beauty?in=alan-menken/sets/beauty-and-the-beast-7815688',
		answer: 'Beauty and the Beast - Something There - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/chorus-beauty-and-the-beast/the-mob-song?in=alan-menken/sets/beauty-and-the-beast-7815688',
		answer: 'Beauty and the Beast - The Mob Song - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/angela-lansbury-official/beauty-and-the-beast-from?in=alan-menken/sets/beauty-and-the-beast-7815688',
		answer: 'Beauty and the Beast - Beauty and the Beast - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/alan-menken/to-the-fair?in=alan-menken/sets/beauty-and-the-beast-7815688',
		answer: 'Beauty and the Beast - To The Fair - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/alan-menken/west-wing?in=alan-menken/sets/beauty-and-the-beast-7815688',
		answer: 'Beauty and the Beast - West Wing - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/alan-menken/the-beast-lets-belle-go?in=alan-menken/sets/beauty-and-the-beast-7815688',
		answer: 'Beauty and the Beast - The Beast Lets Belle Go - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/alan-menken/battle-on-the-tower?in=alan-menken/sets/beauty-and-the-beast-7815688',
		answer: 'Beauty and the Beast - Battle On The Tower - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/alan-menken/transformation?in=alan-menken/sets/beauty-and-the-beast-7815688',
		answer: 'Beauty and the Beast - Transformation - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/celinedionofficial/beauty-and-the-beast-celine-1?in=alan-menken/sets/beauty-and-the-beast-7815688',
		answer: 'Beauty and the Beast - Beauty and the Beast (Duet) - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/stephaniebeatriz/the-family-madrigal?in=germainefranco-music/sets/encanto-original-motion',
		answer: 'Encanto - The Family Madrigal - Germaine Franco',
	},
	{
		url: 'https://soundcloud.com/stephaniebeatriz/waiting-on-a-miracle?in=germainefranco-music/sets/encanto-original-motion',
		answer: 'Encanto - Waiting On A Miracle - Germaine Franco',
	},
	{
		url: 'https://soundcloud.com/jessicadarrow/surface-pressure?in=germainefranco-music/sets/encanto-original-motion',
		answer: 'Encanto - Surface Pressure - Germaine Franco',
	},
	{
		url: 'https://soundcloud.com/carolinagaitan-music/we-dont-talk-about-bruno?in=germainefranco-music/sets/encanto-original-motion',
		answer: "Encanto - We Don't Talk About Bruno - Germaine Franco",
	},
	{
		url: 'https://soundcloud.com/dianeguerrero-music/what-else-can-i-do?in=germainefranco-music/sets/encanto-original-motion',
		answer: 'Encanto - What Else Can I Do? - Germaine Franco',
	},
	{
		url: 'https://soundcloud.com/sebastianyatra/sebastian-yatra-dos-oruguitas?in=germainefranco-music/sets/encanto-original-motion',
		answer: 'Encanto - Sebastián Yatra - Dos Oruguitas - Germaine Franco',
	},
	{
		url: 'https://soundcloud.com/stephaniebeatriz/all-of-you?in=germainefranco-music/sets/encanto-original-motion',
		answer: 'Encanto - All Of You - Germaine Franco',
	},
	{
		url: 'https://soundcloud.com/germainefranco-music/hola-casita?in=germainefranco-music/sets/encanto-original-motion',
		answer: 'Encanto - ¡Hola Casita! - Germaine Franco',
	},
	{
		url: 'https://soundcloud.com/carlos-vives-official/colombia-mi-encanto?in=germainefranco-music/sets/encanto-original-motion',
		answer: 'Encanto - Carlos Vives - Colombia, Mi Encanto - Germaine Franco',
	},
	{
		url: 'https://soundcloud.com/sebastianyatra/sebastian-yatra-two-oruguitas?in=germainefranco-music/sets/encanto-original-motion',
		answer: 'Encanto - Sebastián Yatra - Two Oruguitas - Germaine Franco',
	},
	{
		url: 'https://soundcloud.com/germainefranco-music/oeffne-die-augen?in=germainefranco-music/sets/encanto-original-motion',
		answer: 'Encanto - Abre Los Ojos - Germaine Franco',
	},
	{
		url: 'https://soundcloud.com/germainefranco-music/poznajcie-nasz-rodzin?in=germainefranco-music/sets/encanto-original-motion',
		answer: 'Encanto - Meet La Familia - Germaine Franco',
	},
	{
		url: 'https://soundcloud.com/germainefranco-music/ich-brauche-dich?in=germainefranco-music/sets/encanto-original-motion',
		answer: 'Encanto - I Need You - Germaine Franco',
	},
	{
		url: 'https://soundcloud.com/germainefranco-music/la-voix-dantonio?in=germainefranco-music/sets/encanto-original-motion',
		answer: "Encanto - Antonio's Voice - Germaine Franco",
	},
	{
		url: 'https://soundcloud.com/germainefranco-music/el-baile-madrigal?in=germainefranco-music/sets/encanto-original-motion',
		answer: 'Encanto - El Baile Madrigal - Germaine Franco',
	},
	{
		url: 'https://soundcloud.com/germainefranco-music/die-risse-erscheinen?in=germainefranco-music/sets/encanto-original-motion',
		answer: 'Encanto - The Cracks Emerge - Germaine Franco',
	},
	{
		url: 'https://soundcloud.com/germainefranco-music/tenacious-mirabel?in=germainefranco-music/sets/encanto-original-motion',
		answer: 'Encanto - Tenacious Mirabel - Germaine Franco',
	},
	{
		url: 'https://soundcloud.com/germainefranco-music/questions-au-petit-dejeuner?in=germainefranco-music/sets/encanto-original-motion',
		answer: 'Encanto - Breakfast Questions - Germaine Franco',
	},
	{
		url: 'https://soundcloud.com/germainefranco-music/la-tour-de-bruno?in=germainefranco-music/sets/encanto-original-motion',
		answer: "Encanto - Bruno's Tower - Germaine Franco",
	},
	{
		url: 'https://soundcloud.com/germainefranco-music/la-decouverte-de-mirabel?in=germainefranco-music/sets/encanto-original-motion',
		answer: "Encanto - Mirabel's Discovery - Germaine Franco",
	},
	{
		url: 'https://soundcloud.com/germainefranco-music/z-owieszcze-tango?in=germainefranco-music/sets/encanto-original-motion',
		answer: 'Encanto - The Dysfunctional Tango - Germaine Franco',
	},
	{
		url: 'https://soundcloud.com/germainefranco-music/comprendre-le-passe?in=germainefranco-music/sets/encanto-original-motion',
		answer: 'Encanto - Chasing The Past - Germaine Franco',
	},
	{
		url: 'https://soundcloud.com/germainefranco-music/aliados-da-familia?in=germainefranco-music/sets/encanto-original-motion',
		answer: 'Encanto - Family Allies - Germaine Franco',
	},
	{
		url: 'https://soundcloud.com/germainefranco-music/la-derniere-vision?in=germainefranco-music/sets/encanto-original-motion',
		answer: 'Encanto - The Ultimate Vision - Germaine Franco',
	},
	{
		url: 'https://soundcloud.com/germainefranco-music/isabela-la-perfecta?in=germainefranco-music/sets/encanto-original-motion',
		answer: 'Encanto - Isabela La Perfecta - Germaine Franco',
	},
	{
		url: 'https://soundcloud.com/germainefranco-music/siostry-walcz-ce?in=germainefranco-music/sets/encanto-original-motion',
		answer: 'Encanto - Las Hermanas Pelean - Germaine Franco',
	},
	{
		url: 'https://soundcloud.com/germainefranco-music/la-maison-sait?in=germainefranco-music/sets/encanto-original-motion',
		answer: 'Encanto - The House Knows - Germaine Franco',
	},
	{
		url: 'https://soundcloud.com/germainefranco-music/la-candela?in=germainefranco-music/sets/encanto-original-motion',
		answer: 'Encanto - La Candela - Germaine Franco',
	},
	{
		url: 'https://soundcloud.com/germainefranco-music/el-rio-magdalena?in=germainefranco-music/sets/encanto-original-motion',
		answer: 'Encanto - El Río - Germaine Franco',
	},
	{
		url: 'https://soundcloud.com/germainefranco-music/it-was-me?in=germainefranco-music/sets/encanto-original-motion',
		answer: 'Encanto - It Was Me - Germaine Franco',
	},
	{
		url: 'https://soundcloud.com/artie-kane/code-red-semper-fidelis?in=artie-kane/sets/a-few-good-men-soundtrack',
		answer: '"A Few Good Men" - Code Red / Semper Fidelis - Marc Shaiman',
	},
	{
		url: 'https://soundcloud.com/artie-kane/kaffe?in=artie-kane/sets/a-few-good-men-soundtrack',
		answer: '"A Few Good Men" - Kaffe - Marc Shaiman',
	},
	{
		url: 'https://soundcloud.com/artie-kane/facts-and-figures?in=artie-kane/sets/a-few-good-men-soundtrack',
		answer: '"A Few Good Men" - Facts and Figures - Marc Shaiman',
	},
	{
		url: 'https://soundcloud.com/artie-kane/guantanamo-bay?in=artie-kane/sets/a-few-good-men-soundtrack',
		answer: '"A Few Good Men" - Guantanamo Bay - Marc Shaiman',
	},
	{
		url: 'https://soundcloud.com/artie-kane/hound-dog-big-mama-thornton?in=artie-kane/sets/a-few-good-men-soundtrack',
		answer: '"A Few Good Men" - Hound Dog - Big Mama Thornton - Marc Shaiman',
	},
	{
		url: 'https://soundcloud.com/artie-kane/plea-bargain?in=artie-kane/sets/a-few-good-men-soundtrack',
		answer: '"A Few Good Men" - Plea Bargain - Marc Shaiman',
	},
	{
		url: 'https://soundcloud.com/artie-kane/trial-and-error?in=artie-kane/sets/a-few-good-men-soundtrack',
		answer: '"A Few Good Men" - Trial and Error - Marc Shaiman',
	},
	{
		url: 'https://soundcloud.com/artie-kane/pep-talk?in=artie-kane/sets/a-few-good-men-soundtrack',
		answer: '"A Few Good Men" - Pep Talk - Marc Shaiman',
	},
	{
		url: 'https://soundcloud.com/artie-kane/honor?in=artie-kane/sets/a-few-good-men-soundtrack',
		answer: '"A Few Good Men" - Honor - Marc Shaiman',
	},
	{
		url: 'https://soundcloud.com/artie-kane/stars-and-stripes-forever?in=artie-kane/sets/a-few-good-men-soundtrack',
		answer: '"A Few Good Men" - Stars and Stripes Forever - Marc Shaiman',
	},
	{
		url: 'https://soundcloud.com/thedustbrothers/who-is-tyler-durden?in=thedustbrothers/sets/fight-club-original-motion',
		answer: 'Fight Club - Who Is Tyler Durden? - The Dust Brothers',
	},
	{
		url: 'https://soundcloud.com/thedustbrothers/homework?in=thedustbrothers/sets/fight-club-original-motion',
		answer: 'Fight Club - Homework - The Dust Brothers',
	},
	{
		url: 'https://soundcloud.com/thedustbrothers/what-is-fight-club?in=thedustbrothers/sets/fight-club-original-motion',
		answer: 'Fight Club - What Is Fight Club? - The Dust Brothers',
	},
	{
		url: 'https://soundcloud.com/thedustbrothers/single-serving-jack?in=thedustbrothers/sets/fight-club-original-motion',
		answer: 'Fight Club - Single Serving Jack - The Dust Brothers',
	},
	{
		url: 'https://soundcloud.com/thedustbrothers/corporate-world?in=thedustbrothers/sets/fight-club-original-motion',
		answer: 'Fight Club - Corporate World - The Dust Brothers',
	},
	{
		url: 'https://soundcloud.com/thedustbrothers/psycho-boy-jack?in=thedustbrothers/sets/fight-club-original-motion',
		answer: 'Fight Club - Psycho Boy Jack - The Dust Brothers',
	},
	{
		url: 'https://soundcloud.com/thedustbrothers/hessel-raymond-k?in=thedustbrothers/sets/fight-club-original-motion',
		answer: 'Fight Club - Hessel, Raymond K. - The Dust Brothers',
	},
	{
		url: 'https://soundcloud.com/thedustbrothers/medulla-oblongata?in=thedustbrothers/sets/fight-club-original-motion',
		answer: 'Fight Club - Medulla Oblongata - The Dust Brothers',
	},
	{
		url: 'https://soundcloud.com/thedustbrothers/jacks-smirking-revenge?in=thedustbrothers/sets/fight-club-original-motion',
		answer: "Fight Club - Jack's Smirking Revenge - The Dust Brothers",
	},
	{
		url: 'https://soundcloud.com/thedustbrothers/stealing-fat?in=thedustbrothers/sets/fight-club-original-motion',
		answer: 'Fight Club - Stealing Fat - The Dust Brothers',
	},
	{
		url: 'https://soundcloud.com/thedustbrothers/chemical-burn?in=thedustbrothers/sets/fight-club-original-motion',
		answer: 'Fight Club - Chemical Burn - The Dust Brothers',
	},
	{
		url: 'https://soundcloud.com/thedustbrothers/marla?in=thedustbrothers/sets/fight-club-original-motion',
		answer: 'Fight Club - Marla - The Dust Brothers',
	},
	{
		url: 'https://soundcloud.com/thedustbrothers/commissioner-castration?in=thedustbrothers/sets/fight-club-original-motion',
		answer: 'Fight Club - Commissioner Castration - The Dust Brothers',
	},
	{
		url: 'https://soundcloud.com/thedustbrothers/space-monkeys?in=thedustbrothers/sets/fight-club-original-motion',
		answer: 'Fight Club - Space Monkeys - The Dust Brothers',
	},
	{
		url: 'https://soundcloud.com/thedustbrothers/finding-the-bomb?in=thedustbrothers/sets/fight-club-original-motion',
		answer: 'Fight Club - Finding the Bomb - The Dust Brothers',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/wow-score?in=3312w617/sets/finding-nemo-original-motion',
		answer: 'Finding Nemo - Wow -  Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/barracuda-score?in=3312w617/sets/finding-nemo-original-motion',
		answer: 'Finding Nemo - Barracuda -  Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/nemo-egg-main-title-score?in=3312w617/sets/finding-nemo-original-motion',
		answer: 'Finding Nemo - Nemo Egg (Main Title) -  Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/first-day-score?in=3312w617/sets/finding-nemo-original-motion',
		answer: 'Finding Nemo - First Day -  Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/field-trip-score?in=3312w617/sets/finding-nemo-original-motion',
		answer: 'Finding Nemo - Field Trip -  Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/mr-ray-scientist-score?in=3312w617/sets/finding-nemo-original-motion',
		answer: 'Finding Nemo - Mr. Ray, Scientist -  Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/the-divers-score?in=3312w617/sets/finding-nemo-original-motion',
		answer: 'Finding Nemo - The Divers -  Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/lost-score?in=3312w617/sets/finding-nemo-original-motion',
		answer: 'Finding Nemo - Lost -  Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/short-term-dory-score?in=3312w617/sets/finding-nemo-original-motion',
		answer: 'Finding Nemo - Short-Term Dory -  Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/why-trust-a-shark-score?in=3312w617/sets/finding-nemo-original-motion',
		answer: 'Finding Nemo - Why Trust A Shark -  Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/friends-not-food-score?in=3312w617/sets/finding-nemo-original-motion',
		answer: 'Finding Nemo - Friends Not Food -  Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/fish-o-rama-score?in=3312w617/sets/finding-nemo-original-motion',
		answer: 'Finding Nemo - Fish-O-Rama -  Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/gill-score?in=3312w617/sets/finding-nemo-original-motion',
		answer: 'Finding Nemo - Gill -  Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/3312w617/angler-fish?in=3312w617/sets/finding-nemo-original-motion',
		answer: 'Finding Nemo - Angler Fish -  Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/mt-wannahockaloogie-score?in=3312w617/sets/finding-nemo-original-motion',
		answer: 'Finding Nemo - Mt. Wannahockaloogie -  Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/foolproof-score?in=3312w617/sets/finding-nemo-original-motion',
		answer: 'Finding Nemo - Foolproof -  Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/squishy-score?in=3312w617/sets/finding-nemo-original-motion',
		answer: 'Finding Nemo - Squishy -  Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/jellyfish-forest-score?in=3312w617/sets/finding-nemo-original-motion',
		answer: 'Finding Nemo - Jellyfish Forest -  Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/stay-awake-score?in=3312w617/sets/finding-nemo-original-motion',
		answer: 'Finding Nemo - Stay Awake -  Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/school-of-fish-score?in=3312w617/sets/finding-nemo-original-motion',
		answer: 'Finding Nemo - School Of Fish -  Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/filter-attempt-score?in=3312w617/sets/finding-nemo-original-motion',
		answer: 'Finding Nemo - Filter Attempt -  Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/the-turtle-lope-score?in=3312w617/sets/finding-nemo-original-motion',
		answer: 'Finding Nemo - The Turtle Lope -  Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/curl-away-my-son-score-1?in=3312w617/sets/finding-nemo-original-motion',
		answer: 'Finding Nemo - Curl Away My Son -  Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/news-travels-score?in=3312w617/sets/finding-nemo-original-motion',
		answer: 'Finding Nemo - News Travels -  Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/the-little-clownfish-from-the?in=3312w617/sets/finding-nemo-original-motion',
		answer: 'Finding Nemo - The Little Clownfish From The Reef -  Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/darla-filth-offramp-score?in=3312w617/sets/finding-nemo-original-motion',
		answer: 'Finding Nemo - Darla Filth Offramp -  Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/lost-in-fog-score?in=3312w617/sets/finding-nemo-original-motion',
		answer: 'Finding Nemo - Lost In Fog -  Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/scum-angel-score?in=3312w617/sets/finding-nemo-original-motion',
		answer: 'Finding Nemo - Scum Angel -  Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/haiku-score?in=3312w617/sets/finding-nemo-original-motion',
		answer: 'Finding Nemo - Haiku -  Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/time-to-let-go-score?in=3312w617/sets/finding-nemo-original-motion',
		answer: 'Finding Nemo - Time To Let Go -  Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/sydney-harbour-score?in=3312w617/sets/finding-nemo-original-motion',
		answer: 'Finding Nemo - Sydney Harbour -  Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/pelicans-score?in=3312w617/sets/finding-nemo-original-motion',
		answer: 'Finding Nemo - Pelicans -  Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/drill-score?in=3312w617/sets/finding-nemo-original-motion',
		answer: 'Finding Nemo - Drill -  Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/fish-in-my-hair-score?in=3312w617/sets/finding-nemo-original-motion',
		answer: 'Finding Nemo - Fish In My Hair! -  Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/all-drains-lead-to-the-ocean?in=3312w617/sets/finding-nemo-original-motion',
		answer: 'Finding Nemo - All Drains Lead To The Ocean -  Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/p-sherman-42-wallaby-way?in=3312w617/sets/finding-nemo-original-motion',
		answer:
			'Finding Nemo - ...P. Sherman, 42 Wallaby Way, Sydney... -  Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/fishing-grounds-score?in=3312w617/sets/finding-nemo-original-motion',
		answer: 'Finding Nemo - Fishing Grounds -  Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/swim-down-score?in=3312w617/sets/finding-nemo-original-motion',
		answer: 'Finding Nemo - Swim Down -  Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/finding-nemo-score?in=3312w617/sets/finding-nemo-original-motion',
		answer: 'Finding Nemo - Finding Nemo -  Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/fronds-like-these-score?in=3312w617/sets/finding-nemo-original-motion',
		answer: 'Finding Nemo - Fronds Like These -  Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/steven-price-official/above-earth?in=steven-price-official/sets/gravity-original-motion',
		answer: 'Gravity - Above Earth - Steven Price',
	},
	{
		url: 'https://soundcloud.com/steven-price-official/debris?in=steven-price-official/sets/gravity-original-motion',
		answer: 'Gravity - Debris - Steven Price',
	},
	{
		url: 'https://soundcloud.com/steven-price-official/the-void?in=steven-price-official/sets/gravity-original-motion',
		answer: 'Gravity - The Void - Steven Price',
	},
	{
		url: 'https://soundcloud.com/steven-price-official/atlantis?in=steven-price-official/sets/gravity-original-motion',
		answer: 'Gravity - Atlantis - Steven Price',
	},
	{
		url: 'https://soundcloud.com/steven-price-official/dont-let-go?in=steven-price-official/sets/gravity-original-motion',
		answer: "Gravity - Don't Let Go - Steven Price",
	},
	{
		url: 'https://soundcloud.com/steven-price-official/airlock?in=steven-price-official/sets/gravity-original-motion',
		answer: 'Gravity - Airlock - Steven Price',
	},
	{
		url: 'https://soundcloud.com/steven-price-official/iss?in=steven-price-official/sets/gravity-original-motion',
		answer: 'Gravity - ISS - Steven Price',
	},
	{
		url: 'https://soundcloud.com/steven-price-official/fire?in=steven-price-official/sets/gravity-original-motion',
		answer: 'Gravity - Fire - Steven Price',
	},
	{
		url: 'https://soundcloud.com/steven-price-official/parachute?in=steven-price-official/sets/gravity-original-motion',
		answer: 'Gravity - Parachute - Steven Price',
	},
	{
		url: 'https://soundcloud.com/steven-price-official/in-the-blind?in=steven-price-official/sets/gravity-original-motion',
		answer: 'Gravity - In The Blind - Steven Price',
	},
	{
		url: 'https://soundcloud.com/steven-price-official/aurora-borealis?in=steven-price-official/sets/gravity-original-motion',
		answer: 'Gravity - Aurora Borealis - Steven Price',
	},
	{
		url: 'https://soundcloud.com/steven-price-official/aningaaq?in=steven-price-official/sets/gravity-original-motion',
		answer: 'Gravity - Aningaaq - Steven Price',
	},
	{
		url: 'https://soundcloud.com/steven-price-official/soyuz?in=steven-price-official/sets/gravity-original-motion',
		answer: 'Gravity - Soyuz - Steven Price',
	},
	{
		url: 'https://soundcloud.com/steven-price-official/tiangong?in=steven-price-official/sets/gravity-original-motion',
		answer: 'Gravity - Tiangong - Steven Price',
	},
	{
		url: 'https://soundcloud.com/steven-price-official/shenzou?in=steven-price-official/sets/gravity-original-motion',
		answer: 'Gravity - Shenzou - Steven Price',
	},
	{
		url: 'https://soundcloud.com/steven-price-official/gravity?in=steven-price-official/sets/gravity-original-motion',
		answer: 'Gravity - Gravity - Steven Price',
	},
	{
		url: 'https://soundcloud.com/bradleycooper-music/black-eyes?in=ladygaga/sets/a-star-is-born-soundtrack',
		answer: 'A Star Is Born - Black Eyes',
	},
	{
		url: 'https://soundcloud.com/ladygaga/la-vie-en-rose?in=ladygaga/sets/a-star-is-born-soundtrack',
		answer: 'A Star Is Born - La Vie En Rose',
	},
	{
		url: 'https://soundcloud.com/bradleycooper-music/maybe-its-time?in=ladygaga/sets/a-star-is-born-soundtrack',
		answer: "A Star Is Born - Maybe It's Time",
	},
	{
		url: 'https://soundcloud.com/bradleycooper-music/out-of-time?in=ladygaga/sets/a-star-is-born-soundtrack',
		answer: 'A Star Is Born - Out Of Time',
	},
	{
		url: 'https://soundcloud.com/bradleycooper-music/alibi?in=ladygaga/sets/a-star-is-born-soundtrack',
		answer: 'A Star Is Born - Alibi',
	},
	{
		url: 'https://soundcloud.com/ladygaga/shallow-radio-edit?in=ladygaga/sets/a-star-is-born-soundtrack',
		answer: 'A Star Is Born - Shallow (Radio Edit)',
	},
	{
		url: 'https://soundcloud.com/ladygaga/music-to-my-eyes?in=ladygaga/sets/a-star-is-born-soundtrack',
		answer: 'A Star Is Born - Music To My Eyes',
	},
	{
		url: 'https://soundcloud.com/ladygaga/diggin-my-grave?in=ladygaga/sets/a-star-is-born-soundtrack',
		answer: "A Star Is Born - Diggin' My Grave",
	},
	{
		url: 'https://soundcloud.com/ladygaga/always-remember-us-this-way?in=ladygaga/sets/a-star-is-born-soundtrack',
		answer: 'A Star Is Born - Always Remember Us This Way',
	},
	{
		url: 'https://soundcloud.com/ladygaga/look-what-i-found?in=ladygaga/sets/a-star-is-born-soundtrack',
		answer: 'A Star Is Born - Look What I Found',
	},
	{
		url: 'https://soundcloud.com/ladygaga/heal-me?in=ladygaga/sets/a-star-is-born-soundtrack',
		answer: 'A Star Is Born - Heal Me',
	},
	{
		url: 'https://soundcloud.com/ladygaga/i-dont-know-what-love-is?in=ladygaga/sets/a-star-is-born-soundtrack',
		answer: "A Star Is Born - I Don't Know What Love Is",
	},
	{
		url: 'https://soundcloud.com/ladygaga/is-that-alright?in=ladygaga/sets/a-star-is-born-soundtrack',
		answer: 'A Star Is Born - Is That Alright?',
	},
	{
		url: 'https://soundcloud.com/ladygaga/why-did-you-do-that?in=ladygaga/sets/a-star-is-born-soundtrack',
		answer: 'A Star Is Born - Why Did You Do That?',
	},
	{
		url: 'https://soundcloud.com/ladygaga/hair-body-face?in=ladygaga/sets/a-star-is-born-soundtrack',
		answer: 'A Star Is Born - Hair Body Face',
	},
	{
		url: 'https://soundcloud.com/ladygaga/before-i-cry?in=ladygaga/sets/a-star-is-born-soundtrack',
		answer: 'A Star Is Born - Before I Cry',
	},
	{
		url: 'https://soundcloud.com/bradleycooper-music/too-far-gone?in=ladygaga/sets/a-star-is-born-soundtrack',
		answer: 'A Star Is Born - Too Far Gone',
	},
	{
		url: 'https://soundcloud.com/ladygaga/ill-never-love-again-film-1?in=ladygaga/sets/a-star-is-born-soundtrack',
		answer: "A Star Is Born - I'll Never Love Again (Film Version - Radio Edit)",
	},
	{
		url: 'https://soundcloud.com/ladygaga/ill-never-love-extended?in=ladygaga/sets/a-star-is-born-soundtrack',
		answer: "A Star Is Born - I'll Never Love (Extended Version - Radio Edit)",
	},
	{
		url: 'https://soundcloud.com/rupert-gregson-williams/okinawa-battlefield?in=rupert-gregson-williams/sets/hacksaw-ridge',
		answer: 'Hacksaw Ridge - Okinawa Battlefield - Rupert Gregson-Williams',
	},
	{
		url: 'https://soundcloud.com/rupert-gregson-williams/i-could-have-killed-him?in=rupert-gregson-williams/sets/hacksaw-ridge',
		answer: 'Hacksaw Ridge - I Could Have Killed Him - Rupert Gregson-Williams',
	},
	{
		url: 'https://soundcloud.com/rupert-gregson-williams/a-calling?in=rupert-gregson-williams/sets/hacksaw-ridge',
		answer: 'Hacksaw Ridge - A Calling - Rupert Gregson-Williams',
	},
	{
		url: 'https://soundcloud.com/rupert-gregson-williams/pretty-corny?in=rupert-gregson-williams/sets/hacksaw-ridge',
		answer: 'Hacksaw Ridge - Pretty Corny - Rupert Gregson-Williams',
	},
	{
		url: 'https://soundcloud.com/rupert-gregson-williams/climbing-for-a-kiss?in=rupert-gregson-williams/sets/hacksaw-ridge',
		answer: 'Hacksaw Ridge - Climbing For A Kiss - Rupert Gregson-Williams',
	},
	{
		url: 'https://soundcloud.com/rupert-gregson-williams/throw-hell-at-him?in=rupert-gregson-williams/sets/hacksaw-ridge',
		answer: 'Hacksaw Ridge - Throw Hell At Him - Rupert Gregson-Williams',
	},
	{
		url: 'https://soundcloud.com/rupert-gregson-williams/sleep?in=rupert-gregson-williams/sets/hacksaw-ridge',
		answer: 'Hacksaw Ridge - Sleep - Rupert Gregson-Williams',
	},
	{
		url: 'https://soundcloud.com/rupert-gregson-williams/dorothy-pleads?in=rupert-gregson-williams/sets/hacksaw-ridge',
		answer: 'Hacksaw Ridge - Dorothy Pleads - Rupert Gregson-Williams',
	},
	{
		url: 'https://soundcloud.com/rupert-gregson-williams/hacksaw-ridge?in=rupert-gregson-williams/sets/hacksaw-ridge',
		answer: 'Hacksaw Ridge - Hacksaw Ridge - Rupert Gregson-Williams',
	},
	{
		url: 'https://soundcloud.com/rupert-gregson-williams/japanese-retake-the-ridge?in=rupert-gregson-williams/sets/hacksaw-ridge',
		answer: 'Hacksaw Ridge - Japanese Retake The Ridge - Rupert Gregson-Williams',
	},
	{
		url: 'https://soundcloud.com/rupert-gregson-williams/i-cant-hear-you?in=rupert-gregson-williams/sets/hacksaw-ridge',
		answer: "Hacksaw Ridge - I Can't Hear You - Rupert Gregson-Williams",
	},
	{
		url: 'https://soundcloud.com/rupert-gregson-williams/one-man-at-a-time?in=rupert-gregson-williams/sets/hacksaw-ridge',
		answer: 'Hacksaw Ridge - One Man At A Time - Rupert Gregson-Williams',
	},
	{
		url: 'https://soundcloud.com/rupert-gregson-williams/rescue-continues?in=rupert-gregson-williams/sets/hacksaw-ridge',
		answer: 'Hacksaw Ridge - Rescue Continues - Rupert Gregson-Williams',
	},
	{
		url: 'https://soundcloud.com/rupert-gregson-williams/a-miraculous-return?in=rupert-gregson-williams/sets/hacksaw-ridge',
		answer: 'Hacksaw Ridge - A Miraculous Return - Rupert Gregson-Williams',
	},
	{
		url: 'https://soundcloud.com/rupert-gregson-williams/praying?in=rupert-gregson-williams/sets/hacksaw-ridge',
		answer: 'Hacksaw Ridge - Praying - Rupert Gregson-Williams',
	},
	{
		url: 'https://soundcloud.com/8c8qo8ple6lt/01-1?in=8c8qo8ple6lt/sets/original-soundtrack',
		answer:
			"Howl's Moving Castle - -オープニング - 人生のメリーゴーランド - Joe Hisaishi",
	},
	{
		url: 'https://soundcloud.com/8c8qo8ple6lt/02-1?in=8c8qo8ple6lt/sets/original-soundtrack',
		answer: "Howl's Moving Castle - 陽気な軽騎兵 - Joe Hisaishi",
	},
	{
		url: 'https://soundcloud.com/8c8qo8ple6lt/03-2?in=8c8qo8ple6lt/sets/original-soundtrack',
		answer: "Howl's Moving Castle - 空中散歩 - Joe Hisaishi",
	},
	{
		url: 'https://soundcloud.com/8c8qo8ple6lt/04-2?in=8c8qo8ple6lt/sets/original-soundtrack',
		answer: "Howl's Moving Castle - ときめき - Joe Hisaishi",
	},
	{
		url: 'https://soundcloud.com/8c8qo8ple6lt/05-2?in=8c8qo8ple6lt/sets/original-soundtrack',
		answer: "Howl's Moving Castle - 荒地の魔女 - Joe Hisaishi",
	},
	{
		url: 'https://soundcloud.com/8c8qo8ple6lt/06-2?in=8c8qo8ple6lt/sets/original-soundtrack',
		answer: "Howl's Moving Castle - さすらいのソフィー - Joe Hisaishi",
	},
	{
		url: 'https://soundcloud.com/8c8qo8ple6lt/07-2?in=8c8qo8ple6lt/sets/original-soundtrack',
		answer: "Howl's Moving Castle - 魔法の扉 - Joe Hisaishi",
	},
	{
		url: 'https://soundcloud.com/8c8qo8ple6lt/08-2?in=8c8qo8ple6lt/sets/original-soundtrack',
		answer: "Howl's Moving Castle - 消えない呪い - Joe Hisaishi",
	},
	{
		url: 'https://soundcloud.com/8c8qo8ple6lt/09-2?in=8c8qo8ple6lt/sets/original-soundtrack',
		answer: "Howl's Moving Castle - 大掃除 - Joe Hisaishi",
	},
	{
		url: 'https://soundcloud.com/8c8qo8ple6lt/10-2?in=8c8qo8ple6lt/sets/original-soundtrack',
		answer: "Howl's Moving Castle - 星の湖へ - Joe Hisaishi",
	},
	{
		url: 'https://soundcloud.com/8c8qo8ple6lt/11-2?in=8c8qo8ple6lt/sets/original-soundtrack',
		answer: "Howl's Moving Castle - 静かな想い - Joe Hisaishi",
	},
	{
		url: 'https://soundcloud.com/8c8qo8ple6lt/12-2?in=8c8qo8ple6lt/sets/original-soundtrack',
		answer: "Howl's Moving Castle - 雨の中で - Joe Hisaishi",
	},
	{
		url: 'https://soundcloud.com/8c8qo8ple6lt/13-2?in=8c8qo8ple6lt/sets/original-soundtrack',
		answer: "Howl's Moving Castle - 虚栄と友情 - Joe Hisaishi",
	},
	{
		url: 'https://soundcloud.com/8c8qo8ple6lt/14-90?in=8c8qo8ple6lt/sets/original-soundtrack',
		answer: "Howl's Moving Castle - 90歳の少女 - Joe Hisaishi",
	},
	{
		url: 'https://soundcloud.com/8c8qo8ple6lt/15-1?in=8c8qo8ple6lt/sets/original-soundtrack',
		answer: "Howl's Moving Castle - ｻﾘﾏﾝの魔方陣～城への帰還 - Joe Hisaishi",
	},
	{
		url: 'https://soundcloud.com/sanne-jonkers/01-the-hunger-games-ost-the?in=schappy/sets/the-hunger-games-soundtrack',
		answer: 'The Hunger Games - The Hunger Games - James Newton Howard',
	},
	{
		url: 'https://soundcloud.com/sanne-jonkers/02-katniss-afoot-ost-the?in=schappy/sets/the-hunger-games-soundtrack',
		answer: 'The Hunger Games - Katniss Afoot - James Newton Howard',
	},
	{
		url: 'https://soundcloud.com/sanne-jonkers/03-reaping-day-ost-the-hunger?in=schappy/sets/the-hunger-games-soundtrack',
		answer: 'The Hunger Games - Reaping Day - James Newton Howard',
	},
	{
		url: 'https://soundcloud.com/sanne-jonkers/04-the-train-ost-the-hunger?in=schappy/sets/the-hunger-games-soundtrack',
		answer: 'The Hunger Games - The Train - James Newton Howard',
	},
	{
		url: 'https://soundcloud.com/sanne-jonkers/05-entering-the-capitol-ost?in=schappy/sets/the-hunger-games-soundtrack',
		answer: 'The Hunger Games - Entering the Capitol - James Newton Howard',
	},
	{
		url: 'https://soundcloud.com/sanne-jonkers/06-preparing-the-cariots-ost?in=schappy/sets/the-hunger-games-soundtrack',
		answer: 'The Hunger Games - Preparing the Cariots - James Newton Howard',
	},
	{
		url: 'https://soundcloud.com/sanne-jonkers/07-horn-of-plenty-ost-the?in=schappy/sets/the-hunger-games-soundtrack',
		answer: 'The Hunger Games - Horn of Plenty - James Newton Howard',
	},
	{
		url: 'https://soundcloud.com/sanne-jonkers/08-penthouse-training-ost-the?in=schappy/sets/the-hunger-games-soundtrack',
		answer: 'The Hunger Games - Penthouse Training - James Newton Howard',
	},
	{
		url: 'https://soundcloud.com/sanne-jonkers/09-learning-the-skills-ost-the?in=schappy/sets/the-hunger-games-soundtrack',
		answer: 'The Hunger Games - Learning The Skills - James Newton Howard',
	},
	{
		url: 'https://soundcloud.com/sanne-jonkers/10-the-countdown-ost-the?in=schappy/sets/the-hunger-games-soundtrack',
		answer: 'The Hunger Games - The Countdown - James Newton Howard',
	},
	{
		url: 'https://soundcloud.com/sanne-jonkers/11-booby-trap-ost-the-hunger?in=schappy/sets/the-hunger-games-soundtrack',
		answer: 'The Hunger Games - Booby Trap - James Newton Howard',
	},
	{
		url: 'https://soundcloud.com/sanne-jonkers/12-healing-katniss-ost-the?in=schappy/sets/the-hunger-games-soundtrack',
		answer: 'The Hunger Games - Healing Katniss - James Newton Howard',
	},
	{
		url: 'https://soundcloud.com/sanne-jonkers/13-rues-fairwell-ost-the?in=schappy/sets/the-hunger-games-soundtrack',
		answer: "The Hunger Games - Rue's Fairwell - James Newton Howard",
	},
	{
		url: 'https://soundcloud.com/sanne-jonkers/14-we-could-go-home-ost-the?in=schappy/sets/the-hunger-games-soundtrack',
		answer: 'The Hunger Games - We Could Go Home - James Newton Howard',
	},
	{
		url: 'https://soundcloud.com/sanne-jonkers/15-searching-for-peeta-ost-the?in=schappy/sets/the-hunger-games-soundtrack',
		answer: 'The Hunger Games - Searching For Peeta - James Newton Howard',
	},
	{
		url: 'https://soundcloud.com/sanne-jonkers/16-the-cave-ost-the-hunger?in=schappy/sets/the-hunger-games-soundtrack',
		answer: 'The Hunger Games - The Cave - James Newton Howard',
	},
	{
		url: 'https://soundcloud.com/sanne-jonkers/17-muttations-ost-the-hunger?in=schappy/sets/the-hunger-games-soundtrack',
		answer: 'The Hunger Games - Muttations - James Newton Howard',
	},
	{
		url: 'https://soundcloud.com/sanne-jonkers/18-tenuous-winners-returning?in=schappy/sets/the-hunger-games-soundtrack',
		answer:
			'The Hunger Games - Tenuous Winners Returning Home - James Newton Howard',
	},
	{
		url: 'https://soundcloud.com/company-into-the-woods-motion-picture-cast/prologue-into-the-woods?in=stephen-sondheim/sets/into-the-woods-9',
		answer: 'Into the Woods - Prologue: Into the Woods - Stephen Sondheim',
	},
	{
		url: 'https://soundcloud.com/joanna-riding/cinderella-at-the-grave?in=stephen-sondheim/sets/into-the-woods-9',
		answer: 'Into the Woods - Cinderella at the Grave - Stephen Sondheim',
	},
	{
		url: 'https://soundcloud.com/johnny-depp-official/hello-little-girl?in=stephen-sondheim/sets/into-the-woods-9',
		answer: 'Into the Woods - Hello, Little Girl - Stephen Sondheim',
	},
	{
		url: 'https://soundcloud.com/mackenziemauzy/rapunzels-song?in=stephen-sondheim/sets/into-the-woods-9',
		answer: "Into the Woods - Rapunzel's Song - Stephen Sondheim",
	},
	{
		url: 'https://soundcloud.com/stephen-sondheim/the-cape-as-red-as-blood?in=stephen-sondheim/sets/into-the-woods-9',
		answer: 'Into the Woods - The Cape as Red as Blood - Stephen Sondheim',
	},
	{
		url: 'https://soundcloud.com/emily-blunt-official/the-cow-as-white-as-milk?in=stephen-sondheim/sets/into-the-woods-9',
		answer: 'Into the Woods - The Cow as White as Milk - Stephen Sondheim',
	},
	{
		url: 'https://soundcloud.com/stephen-sondheim/magic-beans?in=stephen-sondheim/sets/into-the-woods-9',
		answer: 'Into the Woods - Magic Beans - Stephen Sondheim',
	},
	{
		url: 'https://soundcloud.com/stephen-sondheim/rapunzels-hair?in=stephen-sondheim/sets/into-the-woods-9',
		answer: "Into the Woods - Rapunzel's Hair - Stephen Sondheim",
	},
	{
		url: 'https://soundcloud.com/stephen-sondheim/grannys-cottage?in=stephen-sondheim/sets/into-the-woods-9',
		answer: "Into the Woods - Granny's Cottage - Stephen Sondheim",
	},
	{
		url: 'https://soundcloud.com/lilla-crawford/i-know-things-now?in=stephen-sondheim/sets/into-the-woods-9',
		answer: 'Into the Woods - I Know Things Now - Stephen Sondheim',
	},
	{
		url: 'https://soundcloud.com/stephen-sondheim/the-beanstalk-grows?in=stephen-sondheim/sets/into-the-woods-9',
		answer: 'Into the Woods - The Beanstalk Grows - Stephen Sondheim',
	},
	{
		url: 'https://soundcloud.com/stephen-sondheim/cinderella-runs?in=stephen-sondheim/sets/into-the-woods-9',
		answer: 'Into the Woods - Cinderella Runs - Stephen Sondheim',
	},
	{
		url: 'https://soundcloud.com/anna-kendrick-official/a-very-nice-prince?in=stephen-sondheim/sets/into-the-woods-9',
		answer: 'Into the Woods - A Very Nice Prince - Stephen Sondheim',
	},
	{
		url: 'https://soundcloud.com/daniel-huttlestone-official/giants-in-the-sky?in=stephen-sondheim/sets/into-the-woods-9',
		answer: 'Into the Woods - Giants in the Sky - Stephen Sondheim',
	},
	{
		url: 'https://soundcloud.com/stephen-sondheim/who-cares?in=stephen-sondheim/sets/into-the-woods-9',
		answer: 'Into the Woods - "Who Cares!" - Stephen Sondheim',
	},
	{
		url: 'https://soundcloud.com/oliver-wallace-official/main-title-bella-notte-the-wag?in=oliver-wallace-official/sets/walt-disney-records-the',
		answer:
			"Lady and the Tramp - Main Title (Bella Notte)/The Wag of a Dog's Tail - Oliver Wallace",
	},
	{
		url: 'https://soundcloud.com/donald-novis/peace-on-earth?in=oliver-wallace-official/sets/walt-disney-records-the',
		answer: 'Lady and the Tramp - Peace On Earth - Oliver Wallace',
	},
	{
		url: 'https://soundcloud.com/oliver-wallace-official/it-has-a-ribbon-lady-to-bed-a?in=oliver-wallace-official/sets/walt-disney-records-the',
		answer:
			'Lady and the Tramp - It Has A Ribbon/Lady To Bed/A Few Mornings Later - Oliver Wallace',
	},
	{
		url: 'https://soundcloud.com/oliver-wallace-official/sunday-the-rat-morning-paper?in=oliver-wallace-official/sets/walt-disney-records-the',
		answer: 'Lady and the Tramp - Sunday/The Rat/Morning Paper - Oliver Wallace',
	},
	{
		url: 'https://soundcloud.com/oliver-wallace-official/a-new-collar-jock-trusty-its?in=oliver-wallace-official/sets/walt-disney-records-the',
		answer:
			"Lady and the Tramp - A New Collar/Jock & Trusty/It's Jim Dear - Oliver Wallace",
	},
	{
		url: 'https://soundcloud.com/oliver-wallace-official/what-a-day-breakfast-at-tonys?in=oliver-wallace-official/sets/walt-disney-records-the',
		answer:
			"Lady and the Tramp - What a Day!/Breakfast at Tony's - Oliver Wallace",
	},
	{
		url: 'https://soundcloud.com/oliver-wallace-official/warning-breakout-snob-hill-a?in=oliver-wallace-official/sets/walt-disney-records-the',
		answer:
			'Lady and the Tramp - Warning/Breakout/Snob Hill/A Wee Bairn - Oliver Wallace',
	},
	{
		url: 'https://soundcloud.com/oliver-wallace-official/countdown-to-b-day?in=oliver-wallace-official/sets/walt-disney-records-the',
		answer: 'Lady and the Tramp - Countdown To B-Day - Oliver Wallace',
	},
	{
		url: 'https://soundcloud.com/oliver-wallace-official/babys-first-morning-what-is-a?in=oliver-wallace-official/sets/walt-disney-records-the',
		answer:
			"Lady and the Tramp - Baby's First Morning/What Is a Baby/La La Lu - Oliver Wallace",
	},
	{
		url: 'https://soundcloud.com/oliver-wallace-official/going-away-aunt-sarah?in=oliver-wallace-official/sets/walt-disney-records-the',
		answer: 'Lady and the Tramp - Going Away/Aunt Sarah - Oliver Wallace',
	},
	{
		url: 'https://soundcloud.com/oliver-wallace-official/the-siamese-cat-song-whats?in=oliver-wallace-official/sets/walt-disney-records-the',
		answer:
			"Lady and the Tramp - The Siamese Cat Song/What's Going on Down There - Oliver Wallace",
	},
	{
		url: 'https://soundcloud.com/oliver-wallace-official/the-muzzle-wrong-side-of-the?in=oliver-wallace-official/sets/walt-disney-records-the',
		answer:
			'Lady and the Tramp - The Muzzle/Wrong Side of the Tracks - Oliver Wallace',
	},
	{
		url: 'https://soundcloud.com/oliver-wallace-official/you-poor-kid-hes-not-my-dog?in=oliver-wallace-official/sets/walt-disney-records-the',
		answer: "Lady and the Tramp - You Poor Kid/He's Not My Dog - Oliver Wallace",
	},
	{
		url: 'https://soundcloud.com/oliver-wallace-official/through-the-zoo-a-log-puller?in=oliver-wallace-official/sets/walt-disney-records-the',
		answer: 'Lady and the Tramp - Through the Zoo/A Log Puller - Oliver Wallace',
	},
	{
		url: 'https://soundcloud.com/oliver-wallace-official/footloose-collar-free-bella?in=oliver-wallace-official/sets/walt-disney-records-the',
		answer:
			'Lady and the Tramp - Footloose & Collar-Free/Bella Notte - Oliver Wallace',
	},
	{
		url: 'https://soundcloud.com/oliver-wallace-official/its-morning-ever-chase?in=oliver-wallace-official/sets/walt-disney-records-the',
		answer:
			"Lady and the Tramp - It's Morning/Ever Chase Chickens/Caught - Oliver Wallace",
	},
	{
		url: 'https://soundcloud.com/the-mellomen/home-sweet-home?in=oliver-wallace-official/sets/walt-disney-records-the',
		answer: 'Lady and the Tramp - Home Sweet Home - Oliver Wallace',
	},
	{
		url: 'https://soundcloud.com/oliver-wallace-official/the-pound?in=oliver-wallace-official/sets/walt-disney-records-the',
		answer: 'Lady and the Tramp - The Pound - Oliver Wallace',
	},
	{
		url: 'https://soundcloud.com/oliver-wallace-official/what-a-dog-hes-a-tramp?in=oliver-wallace-official/sets/walt-disney-records-the',
		answer: "Lady and the Tramp - What a Dog/He's a Tramp - Oliver Wallace",
	},
	{
		url: 'https://soundcloud.com/oliver-wallace-official/in-the-doghouse-the-rat?in=oliver-wallace-official/sets/walt-disney-records-the',
		answer:
			"Lady and the Tramp - In the Doghouse/The Rat Returns/Falsely Accused/We've Got to Stop That Wagon/Trusty's Sacrifice - Oliver Wallace",
	},
	{
		url: 'https://soundcloud.com/oliver-wallace-official/watch-the-birdie-visitors?in=oliver-wallace-official/sets/walt-disney-records-the',
		answer: 'Lady and the Tramp - Watch the Birdie/Visitors - Oliver Wallace',
	},
	{
		url: 'https://soundcloud.com/disney-studio-chorus/finale-peace-on-earth?in=oliver-wallace-official/sets/walt-disney-records-the',
		answer: 'Lady and the Tramp - Finale (Peace on Earth) - Oliver Wallace',
	},
	{
		url: 'https://soundcloud.com/disneystudiovocalist/im-free-as-the-breeze-demo?in=oliver-wallace-official/sets/walt-disney-records-the',
		answer: "Lady and the Tramp - I'm Free As the Breeze (Demo) - Oliver Wallace",
	},
	{
		url: 'https://soundcloud.com/jeff-gunn-official/im-free-as-the-breeze?in=oliver-wallace-official/sets/walt-disney-records-the',
		answer: "Lady and the Tramp - I'm Free As the Breeze - Oliver Wallace",
	},
	{
		url: 'https://soundcloud.com/jeff-gunn-official/im-singin-cause-i-want-to-sing?in=oliver-wallace-official/sets/walt-disney-records-the',
		answer:
			"Lady and the Tramp - I'm Singin' ('Cause I Want to Sing) - Oliver Wallace",
	},
	{
		url: 'https://soundcloud.com/teri-york/what-is-a-baby?in=oliver-wallace-official/sets/walt-disney-records-the',
		answer: 'Lady and the Tramp - What Is a Baby - Oliver Wallace',
	},
	{
		url: 'https://soundcloud.com/teri-york/la-la-lu?in=oliver-wallace-official/sets/walt-disney-records-the',
		answer: 'Lady and the Tramp - La-La-Lu - Oliver Wallace',
	},
	{
		url: 'https://soundcloud.com/robie-lester/the-siamese-cat?in=oliver-wallace-official/sets/walt-disney-records-the',
		answer: 'Lady and the Tramp - The Siamese Cat Song - Oliver Wallace',
	},
	{
		url: 'https://soundcloud.com/bobgrabeau/bella-notte?in=oliver-wallace-official/sets/walt-disney-records-the',
		answer: 'Lady and the Tramp - Bella Notte - Oliver Wallace',
	},
	{
		url: 'https://soundcloud.com/teri-york/hes-a-tramp?in=oliver-wallace-official/sets/walt-disney-records-the',
		answer: "Lady and the Tramp - He's a Tramp - Oliver Wallace",
	},
	{
		url: 'https://soundcloud.com/teri-york/peace-on-earth?in=oliver-wallace-official/sets/walt-disney-records-the',
		answer: 'Lady and the Tramp - Peace On Earth - Oliver Wallace',
	},
	{
		url: 'https://soundcloud.com/phil-collins-official/two-worlds?in=phil-collins-official/sets/tarzan-original-motion-3',
		answer: 'Tarzan - Two Worlds - Phil Collins',
	},
	{
		url: 'https://soundcloud.com/glenn-close/youll-be-in-my-heart?in=phil-collins-official/sets/tarzan-original-motion-3',
		answer: "Tarzan - You'll Be In My Heart - Phil Collins",
	},
	{
		url: 'https://soundcloud.com/phil-collins-official/son-of-man?in=phil-collins-official/sets/tarzan-original-motion-3',
		answer: 'Tarzan - Son of Man - Phil Collins',
	},
	{
		url: 'https://soundcloud.com/rosie-odonnell-official/trashin-the-camp?in=phil-collins-official/sets/tarzan-original-motion-3',
		answer: "Tarzan - Trashin' The Camp - Phil Collins",
	},
	{
		url: 'https://soundcloud.com/phil-collins-official/strangers-like-me?in=phil-collins-official/sets/tarzan-original-motion-3',
		answer: 'Tarzan - Strangers Like Me - Phil Collins',
	},
	{
		url: 'https://soundcloud.com/phil-collins-official/two-worlds-reprise-1?in=phil-collins-official/sets/tarzan-original-motion-3',
		answer: 'Tarzan - Two Worlds Reprise - Phil Collins',
	},
	{
		url: 'https://soundcloud.com/n-sync-official/trashin-the-camp-phil-and-n?in=phil-collins-official/sets/tarzan-original-motion-3',
		answer: "Tarzan - Trashin' The Camp - Phil Collins",
	},
	{
		url: 'https://soundcloud.com/phil-collins-official/youll-be-in-my-heart?in=phil-collins-official/sets/tarzan-original-motion-3',
		answer: "Tarzan - You'll Be In My Heart - Phil Collins",
	},
	{
		url: 'https://soundcloud.com/phil-collins-official/two-worlds-phil-version?in=phil-collins-official/sets/tarzan-original-motion-3',
		answer: 'Tarzan - Two Worlds - Phil Collins',
	},
	{
		url: 'https://soundcloud.com/mark-mancina-official/a-wondrous-place?in=phil-collins-official/sets/tarzan-original-motion-3',
		answer: 'Tarzan - A Wondrous Place - Phil Collins',
	},
	{
		url: 'https://soundcloud.com/mark-mancina-official/moves-like-an-ape-looks-like-a?in=phil-collins-official/sets/tarzan-original-motion-3',
		answer: 'Tarzan - Moves Like an Ape, Looks Like a Man - Phil Collins',
	},
	{
		url: 'https://soundcloud.com/mark-mancina-official/the-gorillas?in=phil-collins-official/sets/tarzan-original-motion-3',
		answer: 'Tarzan - The Gorillas - Phil Collins',
	},
	{
		url: 'https://soundcloud.com/mark-mancina-official/one-family?in=phil-collins-official/sets/tarzan-original-motion-3',
		answer: 'Tarzan - One Family - Phil Collins',
	},
	{
		url: 'https://soundcloud.com/phil-collins-official/two-worlds-finale?in=phil-collins-official/sets/tarzan-original-motion-3',
		answer: 'Tarzan - Two Worlds Finale - Phil Collins',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/look-to-the-stars?in=hans-zimmer-official/sets/man-of-steel-original-motion-2',
		answer: 'Man Of Steel: - Look to the Stars - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/oil-rig?in=hans-zimmer-official/sets/man-of-steel-original-motion-2',
		answer: 'Man Of Steel: - Oil Rig - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/sent-here-for-a-reason?in=hans-zimmer-official/sets/man-of-steel-original-motion-2',
		answer: 'Man Of Steel: - Sent Here for a Reason - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/dna?in=hans-zimmer-official/sets/man-of-steel-original-motion-2',
		answer: 'Man Of Steel: - DNA - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/goodbye-my-son?in=hans-zimmer-official/sets/man-of-steel-original-motion-2',
		answer: 'Man Of Steel: - Goodbye My Son - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/if-you-love-these-people?in=hans-zimmer-official/sets/man-of-steel-original-motion-2',
		answer: 'Man Of Steel: - If You Love These People - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/kryptons-last?in=hans-zimmer-official/sets/man-of-steel-original-motion-2',
		answer: "Man Of Steel: - Krypton's Last - Hans Zimmer",
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/terraforming?in=hans-zimmer-official/sets/man-of-steel-original-motion-2',
		answer: 'Man Of Steel: - Terraforming - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/tornado?in=hans-zimmer-official/sets/man-of-steel-original-motion-2',
		answer: 'Man Of Steel: - Tornado - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/you-die-or-i-do?in=hans-zimmer-official/sets/man-of-steel-original-motion-2',
		answer: 'Man Of Steel: - You Die or I Do - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/launch?in=hans-zimmer-official/sets/man-of-steel-original-motion-2',
		answer: 'Man Of Steel: - Launch - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/ignition?in=hans-zimmer-official/sets/man-of-steel-original-motion-2',
		answer: 'Man Of Steel: - Ignition - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/i-will-find-him?in=hans-zimmer-official/sets/man-of-steel-original-motion-2',
		answer: 'Man Of Steel: - I Will Find Him - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/this-is-clark-kent?in=hans-zimmer-official/sets/man-of-steel-original-motion-2',
		answer: 'Man Of Steel: - This Is Clark Kent - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/i-have-so-many-questions?in=hans-zimmer-official/sets/man-of-steel-original-motion-2',
		answer: 'Man Of Steel: - I Have So Many Questions - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/monty-python-official/introduction?in=monty-python-official/sets/the-album-of-the-soundtrack-of',
		answer: 'Monty Python And The Holy Grail - Introduction',
	},
	{
		url: 'https://soundcloud.com/monty-python-official/introduction-part-2?in=monty-python-official/sets/the-album-of-the-soundtrack-of',
		answer: 'Monty Python And The Holy Grail - Introduction (Part 2)',
	},
	{
		url: 'https://soundcloud.com/monty-python-official/arrival-at-castle?in=monty-python-official/sets/the-album-of-the-soundtrack-of',
		answer: 'Monty Python And The Holy Grail - Arrival At Castle',
	},
	{
		url: 'https://soundcloud.com/monty-python-official/constitutional-peasants?in=monty-python-official/sets/the-album-of-the-soundtrack-of',
		answer: 'Monty Python And The Holy Grail - Constitutional Peasants',
	},
	{
		url: 'https://soundcloud.com/monty-python-official/witch-burning-1?in=monty-python-official/sets/the-album-of-the-soundtrack-of',
		answer: 'Monty Python And The Holy Grail - Witch Burning',
	},
	{
		url: 'https://soundcloud.com/monty-python-official/logician-1?in=monty-python-official/sets/the-album-of-the-soundtrack-of',
		answer: 'Monty Python And The Holy Grail - Logician',
	},
	{
		url: 'https://soundcloud.com/monty-python-official/camelot?in=monty-python-official/sets/the-album-of-the-soundtrack-of',
		answer: 'Monty Python And The Holy Grail - Camelot',
	},
	{
		url: 'https://soundcloud.com/monty-python-official/camelot-song?in=monty-python-official/sets/the-album-of-the-soundtrack-of',
		answer: 'Monty Python And The Holy Grail - Camelot Song',
	},
	{
		url: 'https://soundcloud.com/monty-python-official/arthur-and-god?in=monty-python-official/sets/the-album-of-the-soundtrack-of',
		answer: 'Monty Python And The Holy Grail - Arthur And God',
	},
	{
		url: 'https://soundcloud.com/monty-python-official/classic-silbury-hill-1?in=monty-python-official/sets/the-album-of-the-soundtrack-of',
		answer: 'Monty Python And The Holy Grail - Classic (Silbury Hill)',
	},
	{
		url: 'https://soundcloud.com/monty-python-official/french-castle?in=monty-python-official/sets/the-album-of-the-soundtrack-of',
		answer: 'Monty Python And The Holy Grail - French Castle',
	},
	{
		url: 'https://soundcloud.com/monty-python-official/announcement?in=monty-python-official/sets/the-album-of-the-soundtrack-of',
		answer: 'Monty Python And The Holy Grail - Announcement',
	},
	{
		url: 'https://soundcloud.com/monty-python-official/apology?in=monty-python-official/sets/the-album-of-the-soundtrack-of',
		answer: 'Monty Python And The Holy Grail - Apology',
	},
	{
		url: 'https://soundcloud.com/monty-python-official/story-so-far?in=monty-python-official/sets/the-album-of-the-soundtrack-of',
		answer: 'Monty Python And The Holy Grail - Story So Far',
	},
	{
		url: 'https://soundcloud.com/monty-python-official/brave-sir-robin?in=monty-python-official/sets/the-album-of-the-soundtrack-of',
		answer: 'Monty Python And The Holy Grail - Brave Sir Robin',
	},
	{
		url: 'https://soundcloud.com/monty-python-official/the-knights-who-say-ni-1?in=monty-python-official/sets/the-album-of-the-soundtrack-of',
		answer: 'Monty Python And The Holy Grail - The Knights Who Say "Ni"',
	},
	{
		url: 'https://soundcloud.com/monty-python-official/classic-silbury-hill-part-2?in=monty-python-official/sets/the-album-of-the-soundtrack-of',
		answer: 'Monty Python And The Holy Grail - Classic (Silbury Hill) (Part 2)',
	},
	{
		url: 'https://soundcloud.com/monty-python-official/marilyn-monroe?in=monty-python-official/sets/the-album-of-the-soundtrack-of',
		answer: 'Monty Python And The Holy Grail - Marilyn Monroe',
	},
	{
		url: 'https://soundcloud.com/monty-python-official/sir-lancelot-swamp?in=monty-python-official/sets/the-album-of-the-soundtrack-of',
		answer: 'Monty Python And The Holy Grail - Sir Lancelot & Swamp',
	},
	{
		url: 'https://soundcloud.com/monty-python-official/tim-the-enchanter?in=monty-python-official/sets/the-album-of-the-soundtrack-of',
		answer: 'Monty Python And The Holy Grail - Tim The Enchanter',
	},
	{
		url: 'https://soundcloud.com/monty-python-official/drama-critic-1?in=monty-python-official/sets/the-album-of-the-soundtrack-of',
		answer: 'Monty Python And The Holy Grail - Drama Critic',
	},
	{
		url: 'https://soundcloud.com/monty-python-official/hand-grenade-of-antioch?in=monty-python-official/sets/the-album-of-the-soundtrack-of',
		answer: 'Monty Python And The Holy Grail - Hand Grenade Of Antioch',
	},
	{
		url: 'https://soundcloud.com/monty-python-official/announcement-part-2?in=monty-python-official/sets/the-album-of-the-soundtrack-of',
		answer: 'Monty Python And The Holy Grail - Announcement (Part 2)',
	},
	{
		url: 'https://soundcloud.com/monty-python-official/end-of-quest?in=monty-python-official/sets/the-album-of-the-soundtrack-of',
		answer: 'Monty Python And The Holy Grail - End Of Quest',
	},
	{
		url: 'https://soundcloud.com/monty-python-official/arthurs-song?in=monty-python-official/sets/the-album-of-the-soundtrack-of',
		answer: "Monty Python And The Holy Grail - Arthur's Song",
	},
	{
		url: 'https://soundcloud.com/monty-python-official/documentary-terry-jones-and?in=monty-python-official/sets/the-album-of-the-soundtrack-of',
		answer:
			'Monty Python And The Holy Grail - Documentary - Terry Jones And Michael Palin',
	},
	{
		url: 'https://soundcloud.com/monty-python-official/run-away-song?in=monty-python-official/sets/the-album-of-the-soundtrack-of',
		answer: 'Monty Python And The Holy Grail - Run Away Song',
	},
	{
		url: 'https://soundcloud.com/harry-gregson-williams-official/ancestors?in=harry-gregson-williams-official/sets/mulan-original-motion-3',
		answer: 'Mulan - Ancestors - Harry Gregson-Williams',
	},
	{
		url: 'https://soundcloud.com/harry-gregson-williams-official/tulou-courtyard-extended?in=harry-gregson-williams-official/sets/mulan-original-motion-3',
		answer: 'Mulan - Tulou Courtyard (Extended) - Harry Gregson-Williams',
	},
	{
		url: 'https://soundcloud.com/harry-gregson-williams-official/the-desert-garrison?in=harry-gregson-williams-official/sets/mulan-original-motion-3',
		answer: 'Mulan - The Desert Garrison - Harry Gregson-Williams',
	},
	{
		url: 'https://soundcloud.com/harry-gregson-williams-official/boeri-khan-xianniang?in=harry-gregson-williams-official/sets/mulan-original-motion-3',
		answer: 'Mulan - Böri Khan & Xianniang - Harry Gregson-Williams',
	},
	{
		url: 'https://soundcloud.com/harry-gregson-williams-official/the-lesson-of-the-phoenix?in=harry-gregson-williams-official/sets/mulan-original-motion-3',
		answer: 'Mulan - The Lesson of the Phoenix - Harry Gregson-Williams',
	},
	{
		url: 'https://soundcloud.com/harry-gregson-williams-official/honor-to-us-all?in=harry-gregson-williams-official/sets/mulan-original-motion-3',
		answer: 'Mulan - Honor to Us All - Harry Gregson-Williams',
	},
	{
		url: 'https://soundcloud.com/harry-gregson-williams-official/the-matchmaker?in=harry-gregson-williams-official/sets/mulan-original-motion-3',
		answer: 'Mulan - The Matchmaker - Harry Gregson-Williams',
	},
	{
		url: 'https://soundcloud.com/harry-gregson-williams-official/mulan-leaves-home?in=harry-gregson-williams-official/sets/mulan-original-motion-3',
		answer: 'Mulan - Mulan Leaves Home - Harry Gregson-Williams',
	},
	{
		url: 'https://soundcloud.com/harry-gregson-williams-official/four-ounces-can-move-a?in=harry-gregson-williams-official/sets/mulan-original-motion-3',
		answer:
			'Mulan - Four Ounces Can Move a Thousand Pounds - Harry Gregson-Williams',
	},
	{
		url: 'https://soundcloud.com/harry-gregson-williams-official/mulan-rides-into-battle?in=harry-gregson-williams-official/sets/mulan-original-motion-3',
		answer: 'Mulan - Mulan Rides into Battle (Extended) - Harry Gregson-Williams',
	},
	{
		url: 'https://soundcloud.com/harry-gregson-williams-official/honghui-extended?in=harry-gregson-williams-official/sets/mulan-original-motion-3',
		answer: 'Mulan - Honghui (Extended) - Harry Gregson-Williams',
	},
	{
		url: 'https://soundcloud.com/harry-gregson-williams-official/training-the-men?in=harry-gregson-williams-official/sets/mulan-original-motion-3',
		answer: 'Mulan - Training the Men - Harry Gregson-Williams',
	},
	{
		url: 'https://soundcloud.com/harry-gregson-williams-official/mulan-honghui-fight?in=harry-gregson-williams-official/sets/mulan-original-motion-3',
		answer: 'Mulan - Mulan & Honghui Fight - Harry Gregson-Williams',
	},
	{
		url: 'https://soundcloud.com/harry-gregson-williams-official/oath-of-the-warrior?in=harry-gregson-williams-official/sets/mulan-original-motion-3',
		answer: 'Mulan - Oath of the Warrior - Harry Gregson-Williams',
	},
	{
		url: 'https://soundcloud.com/harry-gregson-williams-official/the-witch?in=harry-gregson-williams-official/sets/mulan-original-motion-3',
		answer: 'Mulan - The Witch - Harry Gregson-Williams',
	},
	{
		url: 'https://soundcloud.com/faithhillofficial/there-youll-be?in=hans-zimmer-official/sets/pearl-harbor-original-motion',
		answer: "Pearl Harbor - There You'll Be - Hans Zimmer",
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/tennessee?in=hans-zimmer-official/sets/pearl-harbor-original-motion',
		answer: 'Pearl Harbor - Tennessee - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/brothers-1?in=hans-zimmer-official/sets/pearl-harbor-original-motion',
		answer: 'Pearl Harbor - Brothers - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/and-then-i-kissed-him?in=hans-zimmer-official/sets/pearl-harbor-original-motion',
		answer: 'Pearl Harbor - ...And Then I Kissed Him - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/i-will-come-back?in=hans-zimmer-official/sets/pearl-harbor-original-motion',
		answer: 'Pearl Harbor - I Will Come Back - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/attack?in=hans-zimmer-official/sets/pearl-harbor-original-motion',
		answer: 'Pearl Harbor - Attack - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/december-7th?in=hans-zimmer-official/sets/pearl-harbor-original-motion',
		answer: 'Pearl Harbor - December 7th - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/war?in=hans-zimmer-official/sets/pearl-harbor-original-motion',
		answer: 'Pearl Harbor - War - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/heart-of-a-volunteer?in=hans-zimmer-official/sets/pearl-harbor-original-motion',
		answer: 'Pearl Harbor - Heart Of A Volunteer - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/mariahcarey/the-prince-of-egypt-when-you?in=juliasuttonofficial/sets/the-prince-of-egypt-1',
		answer:
			'The Prince of Egypt - The Prince Of Egypt (When You Believe) - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/ofra-haza/deliver-us-the-prince-of-egypt?in=juliasuttonofficial/sets/the-prince-of-egypt-1',
		answer: 'The Prince of Egypt - Deliver Us - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/juliasuttonofficial/the-reprimand-the-prince-of?in=juliasuttonofficial/sets/the-prince-of-egypt-1',
		answer: 'The Prince of Egypt - The Reprimand - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/juliasuttonofficial/following-tzipporah-the-prince?in=juliasuttonofficial/sets/the-prince-of-egypt-1',
		answer: 'The Prince of Egypt - Following Tzipporah - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/amick-byram-official/all-i-ever-wanted-with-queens?in=juliasuttonofficial/sets/the-prince-of-egypt-1',
		answer:
			"The Prince of Egypt - All I Ever Wanted (With Queen's Reprise) - Hans Zimmer",
	},
	{
		url: 'https://soundcloud.com/ofra-haza/goodbye-brother-the-prince-of?in=juliasuttonofficial/sets/the-prince-of-egypt-1',
		answer: 'The Prince of Egypt - Goodbye Brother - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/brian-stokes-mitchell/through-heavens-eyes-the?in=juliasuttonofficial/sets/the-prince-of-egypt-1',
		answer: "The Prince of Egypt - Through Heaven's Eyes - Hans Zimmer",
	},
	{
		url: 'https://soundcloud.com/juliasuttonofficial/the-burning-bush-the-prince-of?in=juliasuttonofficial/sets/the-prince-of-egypt-1',
		answer: 'The Prince of Egypt - The Burning Bush - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/stevemartinofficial/playing-with-the-big-boys-the?in=juliasuttonofficial/sets/the-prince-of-egypt-1',
		answer: 'The Prince of Egypt - Playing With The Big Boys - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/ofra-haza/cry-the-prince-of-egypt?in=juliasuttonofficial/sets/the-prince-of-egypt-1',
		answer: 'The Prince of Egypt - Cry - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/juliasuttonofficial/rally-the-prince-of-egypt?in=juliasuttonofficial/sets/the-prince-of-egypt-1',
		answer: 'The Prince of Egypt - Rally - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/ralphfiennesofficial/the-plagues-the-prince-of?in=juliasuttonofficial/sets/the-prince-of-egypt-1',
		answer: 'The Prince of Egypt - The Plagues - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/juliasuttonofficial/death-of-the-first-born-the?in=juliasuttonofficial/sets/the-prince-of-egypt-1',
		answer: 'The Prince of Egypt - Death Of The First Born - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/michelle-pfeiffer-official/when-you-believe-the-prince-of?in=juliasuttonofficial/sets/the-prince-of-egypt-1',
		answer: 'The Prince of Egypt - When You Believe - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/juliasuttonofficial/red-sea-the-prince-of-egypt?in=juliasuttonofficial/sets/the-prince-of-egypt-1',
		answer: 'The Prince of Egypt - Red Sea - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/k-ci-jojo/through-heavens-eyes-the?in=juliasuttonofficial/sets/the-prince-of-egypt-1',
		answer: "The Prince of Egypt - Through Heaven's Eyes - Hans Zimmer",
	},
	{
		url: 'https://soundcloud.com/amygrantofficial/river-lullaby-the-prince-of?in=juliasuttonofficial/sets/the-prince-of-egypt-1',
		answer: 'The Prince of Egypt - River Lullaby - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/juliasuttonofficial/humanity-the-prince-of-egypt?in=juliasuttonofficial/sets/the-prince-of-egypt-1',
		answer: 'The Prince of Egypt - Humanity - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/boyz-ii-men-official/i-will-get-there-a-cappella?in=juliasuttonofficial/sets/the-prince-of-egypt-1',
		answer: 'The Prince of Egypt - I Will Get There (A Cappella) - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/i-see-everything?in=hans-zimmer-official/sets/sherlock-holmes-a-game-of-1',
		answer: 'Sherlock Holmes: A Game of Shadows - I See Everything - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/that-is-my-curse-shadows-part?in=hans-zimmer-official/sets/sherlock-holmes-a-game-of-1',
		answer:
			'Sherlock Holmes: A Game of Shadows - That Is My Curse (Shadows: Pt. 1) - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/tick-tock-shadows-part-2?in=hans-zimmer-official/sets/sherlock-holmes-a-game-of-1',
		answer:
			'Sherlock Holmes: A Game of Shadows - Tick Tock (Shadows: Pt. 2) - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/chess-shadows-part-3?in=hans-zimmer-official/sets/sherlock-holmes-a-game-of-1',
		answer:
			'Sherlock Holmes: A Game of Shadows - Chess (Shadows: Pt. 3) - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/its-so-overt-its-covert?in=hans-zimmer-official/sets/sherlock-holmes-a-game-of-1',
		answer:
			"Sherlock Holmes: A Game of Shadows - It's So Overt It's Covert - Hans Zimmer",
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/romanian-wind?in=hans-zimmer-official/sets/sherlock-holmes-a-game-of-1',
		answer: 'Sherlock Holmes: A Game of Shadows - Romanian Wind - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/did-you-kill-my-wife?in=hans-zimmer-official/sets/sherlock-holmes-a-game-of-1',
		answer:
			'Sherlock Holmes: A Game of Shadows - Did You Kill My Wife? - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/hes-all-me-me-me?in=hans-zimmer-official/sets/sherlock-holmes-a-game-of-1',
		answer:
			"Sherlock Holmes: A Game of Shadows - He's All Me Me Me - Hans Zimmer",
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/the-mycroft-suite?in=hans-zimmer-official/sets/sherlock-holmes-a-game-of-1',
		answer:
			'Sherlock Holmes: A Game of Shadows - The Mycroft Suite - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/renatogirolami/to-the-opera?in=hans-zimmer-official/sets/sherlock-holmes-a-game-of-1',
		answer: 'Sherlock Holmes: A Game of Shadows - To The Opera! - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/moviescreenorchestra/two-mules-for-sister-sara?in=hans-zimmer-official/sets/sherlock-holmes-a-game-of-1',
		answer:
			'Sherlock Holmes: A Game of Shadows - Two Mules for Sister Sara - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/ianbostridge/schubert-die-forelle-d-550?in=hans-zimmer-official/sets/sherlock-holmes-a-game-of-1',
		answer:
			'Sherlock Holmes: A Game of Shadows - Die Forelle, Op. 32, D. 550 - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/zu-viele-f-chse-f-r-euch-h?in=hans-zimmer-official/sets/sherlock-holmes-a-game-of-1',
		answer:
			'Sherlock Holmes: A Game of Shadows - Zu viele Füchse für euch, Hänsel - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/the-red-book?in=hans-zimmer-official/sets/sherlock-holmes-a-game-of-1',
		answer: 'Sherlock Holmes: A Game of Shadows - The Red Book - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/moral-insanity?in=hans-zimmer-official/sets/sherlock-holmes-a-game-of-1',
		answer: 'Sherlock Holmes: A Game of Shadows - Moral Insanity - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/wendycarlos/main-title-the-shining?in=wendycarlos/sets/the-shining-selections-from',
		answer: 'The Shining- Main Title (The Shining) - Wendy Carlos',
	},
	{
		url: 'https://soundcloud.com/wendycarlos/rocky-mountains?in=wendycarlos/sets/the-shining-selections-from',
		answer: 'The Shining- Rocky Mountains - Wendy Carlos',
	},
	{
		url: 'https://soundcloud.com/harry-gregson-williams-official/fairytale?in=harry-gregson-williams-official/sets/shrek-4',
		answer: 'Shrek - Fairytale - Harry Gregson-Williams',
	},
	{
		url: 'https://soundcloud.com/harry-gregson-williams-official/ogre-hunters-fairytale?in=harry-gregson-williams-official/sets/shrek-4',
		answer: 'Shrek - Ogre Hunters / Fairytale Deathcamp - Harry Gregson-Williams',
	},
	{
		url: 'https://soundcloud.com/harry-gregson-williams-official/donkey-meets-shrek?in=harry-gregson-williams-official/sets/shrek-4',
		answer: 'Shrek - Donkey Meets Shrek - Harry Gregson-Williams',
	},
	{
		url: 'https://soundcloud.com/harry-gregson-williams-official/eating-alone?in=harry-gregson-williams-official/sets/shrek-4',
		answer: 'Shrek - Eating Alone - Harry Gregson-Williams',
	},
	{
		url: 'https://soundcloud.com/harry-gregson-williams-official/uninvited-guests?in=harry-gregson-williams-official/sets/shrek-4',
		answer: 'Shrek - Uninvited Guests - Harry Gregson-Williams',
	},
	{
		url: 'https://soundcloud.com/harry-gregson-williams-official/march-of-farquuad?in=harry-gregson-williams-official/sets/shrek-4',
		answer: 'Shrek - March Of Farquuad - Harry Gregson-Williams',
	},
	{
		url: 'https://soundcloud.com/harry-gregson-williams-official/the-perfect-king?in=harry-gregson-williams-official/sets/shrek-4',
		answer: 'Shrek - The Perfect King - Harry Gregson-Williams',
	},
	{
		url: 'https://soundcloud.com/hopelevyofficial/welcome-to-duloc?in=harry-gregson-williams-official/sets/shrek-4',
		answer: 'Shrek - Welcome To Duloc - Harry Gregson-Williams',
	},
	{
		url: 'https://soundcloud.com/harry-gregson-williams-official/tournament-speech?in=harry-gregson-williams-official/sets/shrek-4',
		answer: 'Shrek - Tournament Speech - Harry Gregson-Williams',
	},
	{
		url: 'https://soundcloud.com/harry-gregson-williams-official/what-kind-of-quest?in=harry-gregson-williams-official/sets/shrek-4',
		answer: 'Shrek - What Kind Of Quest - Harry Gregson-Williams',
	},
	{
		url: 'https://soundcloud.com/harry-gregson-williams-official/dragon-fiona-awakens?in=harry-gregson-williams-official/sets/shrek-4',
		answer: 'Shrek - Dragon! / Fiona Awakens - Harry Gregson-Williams',
	},
	{
		url: 'https://soundcloud.com/harry-gregson-williams-official/one-of-a-kind-knight?in=harry-gregson-williams-official/sets/shrek-4',
		answer: 'Shrek - One of A Kind Knight - Harry Gregson-Williams',
	},
	{
		url: 'https://soundcloud.com/harry-gregson-williams-official/saving-donkeys-ass?in=harry-gregson-williams-official/sets/shrek-4',
		answer: "Shrek - Saving Donkey's Ass - Harry Gregson-Williams",
	},
	{
		url: 'https://soundcloud.com/harry-gregson-williams-official/escape-from-the-dragon?in=harry-gregson-williams-official/sets/shrek-4',
		answer: 'Shrek - Escape From The Dragon - Harry Gregson-Williams',
	},
	{
		url: 'https://soundcloud.com/harry-gregson-williams-official/helmet-hair?in=harry-gregson-williams-official/sets/shrek-4',
		answer: 'Shrek - Helmet Hair - Harry Gregson-Williams',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/grand-bazaar-istanbul?in=thomas-newman-official/sets/skyfall-13',
		answer: 'Skyfall - Grand Bazaar, Istanbul - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/voluntary-retirement?in=thomas-newman-official/sets/skyfall-13',
		answer: 'Skyfall - Voluntary Retirement - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/new-digs?in=thomas-newman-official/sets/skyfall-13',
		answer: 'Skyfall - New Digs - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/severine?in=thomas-newman-official/sets/skyfall-13',
		answer: 'Skyfall - Severine - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/brave-new-world?in=thomas-newman-official/sets/skyfall-13',
		answer: 'Skyfall - Brave New World - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/shanghai-drive?in=thomas-newman-official/sets/skyfall-13',
		answer: 'Skyfall - Shanghai Drive - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/jellyfish?in=thomas-newman-official/sets/skyfall-13',
		answer: 'Skyfall - Jellyfish - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/silhouette?in=thomas-newman-official/sets/skyfall-13',
		answer: 'Skyfall - Silhouette - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/modigliani?in=thomas-newman-official/sets/skyfall-13',
		answer: 'Skyfall - Modigliani - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/day-wasted?in=thomas-newman-official/sets/skyfall-13',
		answer: 'Skyfall - Day Wasted - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/quartermaster?in=thomas-newman-official/sets/skyfall-13',
		answer: 'Skyfall - Quartermaster - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/someone-usually-dies?in=thomas-newman-official/sets/skyfall-13',
		answer: 'Skyfall - Someone Usually Dies - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/komodo-dragon?in=thomas-newman-official/sets/skyfall-13',
		answer: 'Skyfall - Komodo Dragon - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/the-bloody-shot?in=thomas-newman-official/sets/skyfall-13',
		answer: 'Skyfall - The Bloody Shot - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/enjoying-death?in=thomas-newman-official/sets/skyfall-13',
		answer: 'Skyfall - Enjoying Death - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/randynewman/youve-got-a-friend-in-me-3?in=randynewman/sets/toy-story-original',
		answer: "Toy Story - You've Got a Friend in Me - Randy Newman",
	},
	{
		url: 'https://soundcloud.com/randynewman/strange-things?in=randynewman/sets/toy-story-original',
		answer: 'Toy Story - Strange Things - Randy Newman',
	},
	{
		url: 'https://soundcloud.com/randynewman/i-will-go-sailing-no-more?in=randynewman/sets/toy-story-original',
		answer: 'Toy Story - I Will Go Sailing No More - Randy Newman',
	},
	{
		url: 'https://soundcloud.com/randynewman/andys-birthday?in=randynewman/sets/toy-story-original',
		answer: "Toy Story - Andy's Birthday - Randy Newman",
	},
	{
		url: 'https://soundcloud.com/randynewman/soldiers-mission?in=randynewman/sets/toy-story-original',
		answer: "Toy Story - Soldier's Mission - Randy Newman",
	},
	{
		url: 'https://soundcloud.com/randynewman/presents?in=randynewman/sets/toy-story-original',
		answer: 'Toy Story - Presents - Randy Newman',
	},
	{
		url: 'https://soundcloud.com/randynewman/buzz?in=randynewman/sets/toy-story-original',
		answer: 'Toy Story - Buzz - Randy Newman',
	},
	{
		url: 'https://soundcloud.com/randynewman/sid?in=randynewman/sets/toy-story-original',
		answer: 'Toy Story - Sid - Randy Newman',
	},
	{
		url: 'https://soundcloud.com/randynewman/woody-and-buzz?in=randynewman/sets/toy-story-original',
		answer: 'Toy Story - Woody and Buzz - Randy Newman',
	},
	{
		url: 'https://soundcloud.com/randynewman/mutants?in=randynewman/sets/toy-story-original',
		answer: 'Toy Story - Mutants - Randy Newman',
	},
	{
		url: 'https://soundcloud.com/randynewman/woodys-gone?in=randynewman/sets/toy-story-original',
		answer: "Toy Story - Woody's Gone - Randy Newman",
	},
	{
		url: 'https://soundcloud.com/randynewman/the-big-one?in=randynewman/sets/toy-story-original',
		answer: 'Toy Story - The Big One - Randy Newman',
	},
	{
		url: 'https://soundcloud.com/randynewman/hang-together?in=randynewman/sets/toy-story-original',
		answer: 'Toy Story - Hang Together - Randy Newman',
	},
	{
		url: 'https://soundcloud.com/randynewman/on-the-move?in=randynewman/sets/toy-story-original',
		answer: 'Toy Story - On the Move - Randy Newman',
	},
	{
		url: 'https://soundcloud.com/randynewman/infinity-and-beyond?in=randynewman/sets/toy-story-original',
		answer: 'Toy Story - Tot Aan De Sterren En Daar Voorbij - Randy Newman',
	},
	{
		url: 'https://soundcloud.com/mgmstudioorchestra/main-title-the-wizard-of-oz?in=judy-garland-official/sets/the-wizard-of-oz-original',
		answer: 'The Wizard of Oz - Main Title',
	},
	{
		url: 'https://soundcloud.com/judy-garland-official/over-the-rainbow-81940869?in=judy-garland-official/sets/the-wizard-of-oz-original',
		answer: 'The Wizard of Oz - Over the Rainbow',
	},
	{
		url: 'https://soundcloud.com/mgmstudioorchestra/cyclone-extended-version?in=judy-garland-official/sets/the-wizard-of-oz-original',
		answer: 'The Wizard of Oz - Cyclone (Extended Version)',
	},
	{
		url: 'https://soundcloud.com/billieburkethemunchkins/come-out-come-out-1?in=judy-garland-official/sets/the-wizard-of-oz-original',
		answer: 'The Wizard of Oz - Come Out, Come Out...',
	},
	{
		url: 'https://soundcloud.com/judy-garland-official/it-really-was-no-miracle-2?in=judy-garland-official/sets/the-wizard-of-oz-original',
		answer: 'The Wizard of Oz - It Really Was No Miracle',
	},
	{
		url: 'https://soundcloud.com/josephkoziel-music/we-thank-you-very-sweetly?in=judy-garland-official/sets/the-wizard-of-oz-original',
		answer: 'The Wizard of Oz - We Thank You Very Sweetly',
	},
	{
		url: 'https://soundcloud.com/themunchkins/ding-dong-the-witch-is-dead-4?in=judy-garland-official/sets/the-wizard-of-oz-original',
		answer: 'The Wizard of Oz - Ding-Dong! The Witch Is Dead',
	},
	{
		url: 'https://soundcloud.com/billybletcher-music/as-mayor-of-the-munchkin-city?in=judy-garland-official/sets/the-wizard-of-oz-original',
		answer: 'The Wizard of Oz - As Mayor of the Munchkin City',
	},
	{
		url: 'https://soundcloud.com/harrystanton-music/as-coroner-i-must-aver?in=judy-garland-official/sets/the-wizard-of-oz-original',
		answer: 'The Wizard of Oz - As Coroner, I Must Aver',
	},
	{
		url: 'https://soundcloud.com/themunchkins/ding-dong-the-witch-is-dead-5?in=judy-garland-official/sets/the-wizard-of-oz-original',
		answer: 'The Wizard of Oz - Ding-Dong! The Witch Is Dead (Reprise)',
	},
	{
		url: 'https://soundcloud.com/lorrainebridges-music/the-lullaby-league?in=judy-garland-official/sets/the-wizard-of-oz-original',
		answer: 'The Wizard of Oz - The Lullaby League',
	},
	{
		url: 'https://soundcloud.com/billybletcher-music/the-lollipop-guild?in=judy-garland-official/sets/the-wizard-of-oz-original',
		answer: 'The Wizard of Oz - The Lollipop Guild',
	},
	{
		url: 'https://soundcloud.com/themunchkins/we-welcome-you-to-the-munchkin?in=judy-garland-official/sets/the-wizard-of-oz-original',
		answer: 'The Wizard of Oz - We Welcome You to the Munchkin Land',
	},
	{
		url: 'https://soundcloud.com/judy-garland-official/follow-the-yellow-brick-road-6?in=judy-garland-official/sets/the-wizard-of-oz-original',
		answer:
			"The Wizard of Oz - Follow the Yellow Brick Road / You're Off to See the Wizard",
	},
	{
		url: 'https://soundcloud.com/judy-garland-official/if-i-only-had-a-brain-extended?in=judy-garland-official/sets/the-wizard-of-oz-original',
		answer: 'The Wizard of Oz - If I Only Had A Brain (Extended Version)',
	},
	{
		url: 'https://soundcloud.com/navythemc/300-ost-to-victory',
		answer: '300 - To Victory - Tyler Bates',
	},
	{
		url: 'https://soundcloud.com/jonbatisteofficial/born-to-play',
		answer: 'Soul - Born to Play - Jon Batiste',
	},
	{
		url: 'https://soundcloud.com/transformers-665495108/bogey-approach?in=transformers-665495108/sets/transformers-complete?#t=30',
		answer: 'Transformers - Bogey Approach - Steve Jablonsky',
	},
	{
		url: 'https://soundcloud.com/elmer-bernstein/ghostbusters-theme?in=elmer-bernstein/sets/ghostbusters-original-motion-1',
		answer: 'Ghostbusters - Theme - Elmer Bernstein',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/the-shape-of-water-from-the?in=alexandre-desplat-official/sets/the-shape-of-water-1',
		answer:
			'The Shape Of Water - The Shape Of Water (From "The Shape Of Water") - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/renee-fleming-official/youll-never-know-from-the?in=alexandre-desplat-official/sets/the-shape-of-water-1',
		answer:
			'The Shape Of Water - You\'ll Never Know (From "The Shape Of Water") - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/the-creature?in=alexandre-desplat-official/sets/the-shape-of-water-1',
		answer: 'The Shape Of Water - The Creature - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/elisas-theme?in=alexandre-desplat-official/sets/the-shape-of-water-1',
		answer: "The Shape Of Water - Elisa's Theme - Alexandre Desplat",
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/fingers?in=alexandre-desplat-official/sets/the-shape-of-water-1',
		answer: 'The Shape Of Water - Fingers - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/spy-meeting?in=alexandre-desplat-official/sets/the-shape-of-water-1',
		answer: 'The Shape Of Water - Spy Meeting - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/elisa-and-zelda?in=alexandre-desplat-official/sets/the-shape-of-water-1',
		answer: 'The Shape Of Water - Elisa And Zelda - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/five-stars-general?in=alexandre-desplat-official/sets/the-shape-of-water-1',
		answer: 'The Shape Of Water - Five Stars General - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/the-silence-of-love?in=alexandre-desplat-official/sets/the-shape-of-water-1',
		answer: 'The Shape Of Water - The Silence Of Love - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/egg?in=alexandre-desplat-official/sets/the-shape-of-water-1',
		answer: 'The Shape Of Water - Egg - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/that-isnt-good?in=alexandre-desplat-official/sets/the-shape-of-water-1',
		answer: "The Shape Of Water - That Isn't Good - Alexandre Desplat",
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/underwater-kiss?in=alexandre-desplat-official/sets/the-shape-of-water-1',
		answer: 'The Shape Of Water - Underwater Kiss - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/the-escape?in=alexandre-desplat-official/sets/the-shape-of-water-1',
		answer: 'The Shape Of Water - The Escape - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/watching-ruth?in=alexandre-desplat-official/sets/the-shape-of-water-1',
		answer: 'The Shape Of Water - Watching Ruth - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/decency?in=alexandre-desplat-official/sets/the-shape-of-water-1',
		answer: 'The Shape Of Water - Decency - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/dina-wahba/11-danny-elfman-the-piano-duet',
		answer: 'The Corpse Bride - The Piano Duet - Danny Elfman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/1917-1?in=thomas-newman-official/sets/1917-original-motion-picture',
		answer: '1917 - 1917 - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/up-the-down-trench?in=thomas-newman-official/sets/1917-original-motion-picture',
		answer: '1917 - Up the Down Trench - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/gehenna?in=thomas-newman-official/sets/1917-original-motion-picture',
		answer: '1917 - Gehenna - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/a-scrap-of-ribbon?in=thomas-newman-official/sets/1917-original-motion-picture',
		answer: '1917 - A Scrap of Ribbon - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/the-night-window?in=thomas-newman-official/sets/1917-original-motion-picture',
		answer: '1917 - The Night Window - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/the-boche?in=thomas-newman-official/sets/1917-original-motion-picture',
		answer: '1917 - The Boche - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/tripwire?in=thomas-newman-official/sets/1917-original-motion-picture',
		answer: '1917 - Tripwire - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/a-bit-of-tin?in=thomas-newman-official/sets/1917-original-motion-picture',
		answer: '1917 - A Bit of Tin - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/lockhouse?in=thomas-newman-official/sets/1917-original-motion-picture',
		answer: '1917 - Lockhouse - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/blake-and-schofield?in=thomas-newman-official/sets/1917-original-motion-picture',
		answer: '1917 - Blake and Schofield - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/milk?in=thomas-newman-official/sets/1917-original-motion-picture',
		answer: '1917 - Milk - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/ecoust-saint-mein?in=thomas-newman-official/sets/1917-original-motion-picture',
		answer: '1917 - Écoust-Saint-Mein - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/les-arbres?in=thomas-newman-official/sets/1917-original-motion-picture',
		answer: '1917 - Les Arbres - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/englaender?in=thomas-newman-official/sets/1917-original-motion-picture',
		answer: '1917 - Engländer - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/the-rapids?in=thomas-newman-official/sets/1917-original-motion-picture',
		answer: '1917 - The Rapids - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/youre-so-cool',
		answer: "True Romance - You're So Cool - Hans Zimmer",
	},
	{
		url: 'https://soundcloud.com/fayssal-saoudi/hand-covers-bruise',
		answer:
			'The Social Network - Hand Covers Bruise - Trent Reznor & Atticus Ross',
	},
	{
		url: 'https://soundcloud.com/shirley-walker-official/ice-dance-edward-scissorhands',
		answer: 'Edward Scissorhands - Ice Dance - Danny Elfman',
	},
	{
		url: 'https://soundcloud.com/hildurgudnadottir-music/bathroom-dance',
		answer: 'Joker - Bathroom Dance - Hildur Guonadottir',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/new-moon?in=alexandre-desplat-official/sets/the-twilight-saga-new-moon-the',
		answer: 'The Twilight Saga: New Moon - New Moon - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/bella-dreams?in=alexandre-desplat-official/sets/the-twilight-saga-new-moon-the',
		answer: 'The Twilight Saga: New Moon - Bella Dreams - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/romeo-juliet?in=alexandre-desplat-official/sets/the-twilight-saga-new-moon-the',
		answer: 'The Twilight Saga: New Moon - Romeo & Juliet - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/volturi-waltz?in=alexandre-desplat-official/sets/the-twilight-saga-new-moon-the',
		answer: 'The Twilight Saga: New Moon - Volturi Waltz - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/blood-sample?in=alexandre-desplat-official/sets/the-twilight-saga-new-moon-the',
		answer: 'The Twilight Saga: New Moon - Blood Sample - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/edward-leaves?in=alexandre-desplat-official/sets/the-twilight-saga-new-moon-the',
		answer: 'The Twilight Saga: New Moon - Edward Leaves - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/werewolves?in=alexandre-desplat-official/sets/the-twilight-saga-new-moon-the',
		answer: 'The Twilight Saga: New Moon - Werewolves - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/i-need-you?in=alexandre-desplat-official/sets/the-twilight-saga-new-moon-the',
		answer: 'The Twilight Saga: New Moon - I Need You - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/break-up?in=alexandre-desplat-official/sets/the-twilight-saga-new-moon-the',
		answer: 'The Twilight Saga: New Moon - Break Up - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/memories-of-edward?in=alexandre-desplat-official/sets/the-twilight-saga-new-moon-the',
		answer:
			'The Twilight Saga: New Moon - Memories Of Edward - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/wolves-v-vampire?in=alexandre-desplat-official/sets/the-twilight-saga-new-moon-the',
		answer: 'The Twilight Saga: New Moon - Wolves V. Vampire - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/victoria?in=alexandre-desplat-official/sets/the-twilight-saga-new-moon-the',
		answer: 'The Twilight Saga: New Moon - Victoria - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/almost-a-kiss?in=alexandre-desplat-official/sets/the-twilight-saga-new-moon-the',
		answer: 'The Twilight Saga: New Moon - Almost A Kiss - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/adrenaline?in=alexandre-desplat-official/sets/the-twilight-saga-new-moon-the',
		answer: 'The Twilight Saga: New Moon - Adrenaline - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/alexandre-desplat-official/dreamcatcher?in=alexandre-desplat-official/sets/the-twilight-saga-new-moon-the',
		answer: 'The Twilight Saga: New Moon - Dreamcatcher - Alexandre Desplat',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/dream-of-arrakis?in=hans-zimmer-official/sets/dune-original-motion-picture',
		answer: 'Dune - Dream of Arrakis - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/herald-of-the-change?in=hans-zimmer-official/sets/dune-original-motion-picture',
		answer: 'Dune - Herald of the Change - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/bene-gesserit?in=hans-zimmer-official/sets/dune-original-motion-picture',
		answer: 'Dune - Bene Gesserit - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/gom-jabbar?in=hans-zimmer-official/sets/dune-original-motion-picture',
		answer: 'Dune - Gom Jabbar - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/the-one?in=hans-zimmer-official/sets/dune-original-motion-picture',
		answer: 'Dune - The One - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/leaving-caladan?in=hans-zimmer-official/sets/dune-original-motion-picture',
		answer: 'Dune - Leaving Caladan - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/arrakeen?in=hans-zimmer-official/sets/dune-original-motion-picture',
		answer: 'Dune - Arrakeen - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/ripples-in-the-sand?in=hans-zimmer-official/sets/dune-original-motion-picture',
		answer: 'Dune - Ripples in the Sand - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/visions-of-chani?in=hans-zimmer-official/sets/dune-original-motion-picture',
		answer: 'Dune - Visions of Chani - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/night-on-arrakis?in=hans-zimmer-official/sets/dune-original-motion-picture',
		answer: 'Dune - Night on Arrakis - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/armada?in=hans-zimmer-official/sets/dune-original-motion-picture',
		answer: 'Dune - Armada - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/burning-palms?in=hans-zimmer-official/sets/dune-original-motion-picture',
		answer: 'Dune - Burning Palms - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/stranded?in=hans-zimmer-official/sets/dune-original-motion-picture',
		answer: 'Dune - Stranded - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/blood-for-blood?in=hans-zimmer-official/sets/dune-original-motion-picture',
		answer: 'Dune - Blood for Blood - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/hans-zimmer-official/the-fall?in=hans-zimmer-official/sets/dune-original-motion-picture',
		answer: 'Dune - The Fall - Hans Zimmer',
	},
	{
		url: 'https://soundcloud.com/jmbernard/end-credits-from-e-t-the-extra',
		answer: 'E.T. The Extraterrestrial - End Credits - John Williams',
	},
	{
		url: 'https://soundcloud.com/vangelismusic/main-titles-from-blade-runner?in=vangelismusic/sets/blade-runner-3',
		answer: 'Blade Runner - Main Titles - Vangelis',
	},
	{
		url: 'https://soundcloud.com/vangelismusic/blush-response?in=vangelismusic/sets/blade-runner-3',
		answer: 'Blade Runner - Blush Response - Vangelis',
	},
	{
		url: 'https://soundcloud.com/vangelismusic/wait-for-me?in=vangelismusic/sets/blade-runner-3',
		answer: 'Blade Runner - Wait for Me - Vangelis',
	},
	{
		url: 'https://soundcloud.com/vangelismusic/rachels-song-2?in=vangelismusic/sets/blade-runner-3',
		answer: "Blade Runner - Rachel's Song - Vangelis",
	},
	{
		url: 'https://soundcloud.com/vangelismusic/love-theme-from-blade-runner?in=vangelismusic/sets/blade-runner-3',
		answer: 'Blade Runner - Love Theme - Vangelis',
	},
	{
		url: 'https://soundcloud.com/vangelismusic/one-more-kiss-dear?in=vangelismusic/sets/blade-runner-3',
		answer: 'Blade Runner - One More Kiss, Dear - Vangelis',
	},
	{
		url: 'https://soundcloud.com/vangelismusic/blade-runner-blues?in=vangelismusic/sets/blade-runner-3',
		answer: 'Blade Runner - Blade Runner Blues - Vangelis',
	},
	{
		url: 'https://soundcloud.com/vangelismusic/memories-of-green?in=vangelismusic/sets/blade-runner-3',
		answer: 'Blade Runner - Memories of Green - Vangelis',
	},
	{
		url: 'https://soundcloud.com/vangelismusic/tales-of-the-future?in=vangelismusic/sets/blade-runner-3',
		answer: 'Blade Runner - Tales of the Future - Vangelis',
	},
	{
		url: 'https://soundcloud.com/vangelismusic/damask-rose?in=vangelismusic/sets/blade-runner-3',
		answer: 'Blade Runner - Damask Rose - Vangelis',
	},
	{
		url: 'https://soundcloud.com/vangelismusic/blade-runner-end-titles?in=vangelismusic/sets/blade-runner-3',
		answer: 'Blade Runner - Blade Runner (End Titles) - Vangelis',
	},
	{
		url: 'https://soundcloud.com/vangelismusic/tears-in-rain?in=vangelismusic/sets/blade-runner-3',
		answer: 'Blade Runner - Tears in Rain - Vangelis',
	},
	{
		url: 'https://soundcloud.com/danny-elfman-official/main-titles-from-the',
		answer: 'Beetlejuice - Main Titles - Danny Elfman',
	},
	{
		url: 'https://soundcloud.com/michaelcrawfordofficial/put-on-your-sunday-clothes?in=thomas-newman-official/sets/wall-e-2',
		answer: 'WALL-E - Put On Your Sunday Clothes - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/2815-a-d?in=thomas-newman-official/sets/wall-e-2',
		answer: 'WALL-E - 2815 A.D. - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/wall-e?in=thomas-newman-official/sets/wall-e-2',
		answer: 'WALL-E - Wall-E - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/the-spaceship?in=thomas-newman-official/sets/wall-e-2',
		answer: 'WALL-E - The Spaceship - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/eve?in=thomas-newman-official/sets/wall-e-2',
		answer: 'WALL-E - EVE - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/thrust?in=thomas-newman-official/sets/wall-e-2',
		answer: 'WALL-E - Thrust - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/bubble-wrap?in=thomas-newman-official/sets/wall-e-2',
		answer: 'WALL-E - Bubble Wrap - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/louisarmstrongofficial/la-vie-en-rose-single-version?in=thomas-newman-official/sets/wall-e-2',
		answer: 'WALL-E - La vie en rose (Single Version) - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/eye-surgery?in=thomas-newman-official/sets/wall-e-2',
		answer: 'WALL-E - Eye Surgery - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/worry-wait?in=thomas-newman-official/sets/wall-e-2',
		answer: 'WALL-E - Worry Wait - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/first-date?in=thomas-newman-official/sets/wall-e-2',
		answer: 'WALL-E - First Date - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/eve-retrieve?in=thomas-newman-official/sets/wall-e-2',
		answer: 'WALL-E - Eve Retrieve - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/the-axiom?in=thomas-newman-official/sets/wall-e-2',
		answer: 'WALL-E - The Axiom - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/bnl?in=thomas-newman-official/sets/wall-e-2',
		answer: 'WALL-E - BNL - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/foreign-contaminant?in=thomas-newman-official/sets/wall-e-2',
		answer: 'WALL-E - Foreign Contaminant - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/repair-ward?in=thomas-newman-official/sets/wall-e-2',
		answer: 'WALL-E - Repair Ward - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/72-degrees-and-sunny?in=thomas-newman-official/sets/wall-e-2',
		answer: 'WALL-E - 72 Degrees and Sunny - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/typing-bot?in=thomas-newman-official/sets/wall-e-2',
		answer: 'WALL-E - Typing Bot - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/septuacentennial?in=thomas-newman-official/sets/wall-e-2',
		answer: 'WALL-E - Septuacentennial - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/gopher?in=thomas-newman-official/sets/wall-e-2',
		answer: 'WALL-E - Gopher - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/wall-es-pod-adventure?in=thomas-newman-official/sets/wall-e-2',
		answer: "WALL-E - Wall-E's Pod Adventure - Thomas Newman",
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/define-dancing?in=thomas-newman-official/sets/wall-e-2',
		answer: 'WALL-E - Define Dancing - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/no-splashing-no-diving?in=thomas-newman-official/sets/wall-e-2',
		answer: 'WALL-E - No Splashing No Diving - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/all-that-loves-about?in=thomas-newman-official/sets/wall-e-2',
		answer: "WALL-E - All That Love's About - Thomas Newman",
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/m-o?in=thomas-newman-official/sets/wall-e-2',
		answer: 'WALL-E - M-O - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/directive-a-113?in=thomas-newman-official/sets/wall-e-2',
		answer: 'WALL-E - Directive A-113 - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/mutiny?in=thomas-newman-official/sets/wall-e-2',
		answer: 'WALL-E - Mutiny! - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/fixing-wall-e?in=thomas-newman-official/sets/wall-e-2',
		answer: 'WALL-E - Fixing Wall-E - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/rogue-robots?in=thomas-newman-official/sets/wall-e-2',
		answer: 'WALL-E - Rogue Robots - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/march-of-the-gels?in=thomas-newman-official/sets/wall-e-2',
		answer: 'WALL-E - March of the Gels - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/tilt?in=thomas-newman-official/sets/wall-e-2',
		answer: 'WALL-E - Tilt - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/the-holo-detector?in=thomas-newman-official/sets/wall-e-2',
		answer: 'WALL-E - The Holo-Detector - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/hyperjump?in=thomas-newman-official/sets/wall-e-2',
		answer: 'WALL-E - Hyperjump - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/desperate-eve?in=thomas-newman-official/sets/wall-e-2',
		answer: 'WALL-E - Desperate Eve - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/static?in=thomas-newman-official/sets/wall-e-2',
		answer: 'WALL-E - Static - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/michaelcrawfordofficial/it-only-takes-a-moment?in=thomas-newman-official/sets/wall-e-2',
		answer: 'WALL-E - It Only Takes A Moment - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/peter-gabriel-official/down-to-earth?in=thomas-newman-official/sets/wall-e-2',
		answer:
			'WALL-E - Down To Earth (Soundtrack) [feat. Soweto Gospel Choir] - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/thomas-newman-official/horizon-12-2?in=thomas-newman-official/sets/wall-e-2',
		answer: 'WALL-E - Horizon 12.2 - Thomas Newman',
	},
	{
		url: 'https://soundcloud.com/john-carpenter-official/the-thing-1',
		answer: 'The Thing - The Thing - John Carpenter',
	},
	{
		url: 'https://soundcloud.com/james-horner-official/legends-of-the-fall-album?in=james-horner-official/sets/legends-of-the-fall-original',
		answer: 'Legends Of The Fall - Legends of the Fall - James Horner',
	},
	{
		url: 'https://soundcloud.com/james-horner-official/the-ludlows?in=james-horner-official/sets/legends-of-the-fall-original',
		answer: 'Legends Of The Fall - The Ludlows - James Horner',
	},
	{
		url: 'https://soundcloud.com/james-horner-official/off-to-war-album-version?in=james-horner-official/sets/legends-of-the-fall-original',
		answer: 'Legends Of The Fall - Off to War - James Horner',
	},
	{
		url: 'https://soundcloud.com/james-horner-official/to-the-boys-album-version?in=james-horner-official/sets/legends-of-the-fall-original',
		answer: 'Legends Of The Fall - To the Boys - James Horner',
	},
	{
		url: 'https://soundcloud.com/james-horner-official/samuels-death-album-version?in=james-horner-official/sets/legends-of-the-fall-original',
		answer: "Legends Of The Fall - Samuel's Death - James Horner",
	},
	{
		url: 'https://soundcloud.com/james-horner-official/alfred-moves-to-helena-album?in=james-horner-official/sets/legends-of-the-fall-original',
		answer: 'Legends Of The Fall - Alfred Moves to Helena - James Horner',
	},
	{
		url: 'https://soundcloud.com/james-horner-official/farewell-descent-into-madness?in=james-horner-official/sets/legends-of-the-fall-original',
		answer: 'Legends Of The Fall - Farewell/Descent Into Madness - James Horner',
	},
	{
		url: 'https://soundcloud.com/james-horner-official/the-changing-seasons-wild?in=james-horner-official/sets/legends-of-the-fall-original',
		answer:
			"Legends Of The Fall - The Changing Seasons, Wild Horses, Tristan's Return - James Horner",
	},
	{
		url: 'https://soundcloud.com/james-horner-official/the-wedding-album-version?in=james-horner-official/sets/legends-of-the-fall-original',
		answer: 'Legends Of The Fall - The Wedding - James Horner',
	},
	{
		url: 'https://soundcloud.com/james-horner-official/isabels-murder-recollections?in=james-horner-official/sets/legends-of-the-fall-original',
		answer:
			"Legends Of The Fall - Isabel's Murder, Recollections of Samuel - James Horner",
	},
	{
		url: 'https://soundcloud.com/james-horner-official/revenge-album-version?in=james-horner-official/sets/legends-of-the-fall-original',
		answer: 'Legends Of The Fall - Revenge - James Horner',
	},
	{
		url: 'https://soundcloud.com/james-horner-official/goodbyes-album-version?in=james-horner-official/sets/legends-of-the-fall-original',
		answer: 'Legends Of The Fall - Goodbyes - James Horner',
	},
	{
		url: 'https://soundcloud.com/james-horner-official/alfred-tristan-the-colonel-the?in=james-horner-official/sets/legends-of-the-fall-original',
		answer:
			'Legends Of The Fall - Alfred, Tristan, The Colonel, The Legend.. - James Horner',
	},
	{
		url: 'https://soundcloud.com/mandy-moore-official/when-will-my-life-begin-from?in=alan-menken/sets/tangled-12',
		answer: 'Tangled - When Will My Life Begin? - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/mandy-moore-official/when-will-my-life-begin?in=alan-menken/sets/tangled-12',
		answer: 'Tangled - When Will My Life Begin (Reprise 1) - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/donna-murphy-official/mother-knows-best?in=alan-menken/sets/tangled-12',
		answer: 'Tangled - Mother Knows Best - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/mandy-moore-official/when-will-my-life-begin-1?in=alan-menken/sets/tangled-12',
		answer: 'Tangled - When Will My Life Begin (Reprise 2) - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/mandy-moore-official/ive-got-a-dream?in=alan-menken/sets/tangled-12',
		answer: "Tangled - I've Got a Dream - Alan Menken",
	},
	{
		url: 'https://soundcloud.com/donna-murphy-official/mother-knows-best-reprise?in=alan-menken/sets/tangled-12',
		answer: 'Tangled - Mother Knows Best (Reprise) - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/mandy-moore-official/i-see-the-light-from-tangled?in=alan-menken/sets/tangled-12',
		answer: 'Tangled - I See the Light - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/mandy-moore-official/healing-incantation?in=alan-menken/sets/tangled-12',
		answer: 'Tangled - Healing Incantation - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/alan-menken/flynn-wanted?in=alan-menken/sets/tangled-12',
		answer: 'Tangled - Flynn Wanted (From "Tangled"/Score) - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/donna-murphy-official/prologue?in=alan-menken/sets/tangled-12',
		answer: 'Tangled - Prologue - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/alan-menken/horse-with-no-rider?in=alan-menken/sets/tangled-12',
		answer: 'Tangled - Horse with No Rider - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/alan-menken/escape-route?in=alan-menken/sets/tangled-12',
		answer: 'Tangled - Escape Route - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/alan-menken/campfire?in=alan-menken/sets/tangled-12',
		answer: 'Tangled - Campfire - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/alan-menken/kingdom-dance?in=alan-menken/sets/tangled-12',
		answer: 'Tangled - Kingdom Dance - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/alan-menken/waiting-for-the-lights?in=alan-menken/sets/tangled-12',
		answer: 'Tangled - Waiting for the Lights - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/elmer-bernstein/the-end',
		answer: 'Cape Fear - The End - Elmer Bernstein',
	},
	{
		url: 'https://soundcloud.com/ryuichi-sakamoto-official/the-revenant-main-theme?in=ryuichi-sakamoto-official/sets/the-revenant-original-motion-1',
		answer: 'The Revenant - The Revenant Main Theme - Ryuichi Sakamoto',
	},
	{
		url: 'https://soundcloud.com/ryuichi-sakamoto-official/hawk-punished-1?in=ryuichi-sakamoto-official/sets/the-revenant-original-motion-1',
		answer: 'The Revenant - Hawk Punished - Ryuichi Sakamoto',
	},
	{
		url: 'https://soundcloud.com/ryuichi-sakamoto-official/carrying-glass?in=ryuichi-sakamoto-official/sets/the-revenant-original-motion-1',
		answer: 'The Revenant - Carrying Glass - Ryuichi Sakamoto',
	},
	{
		url: 'https://soundcloud.com/ryuichi-sakamoto-official/first-dream-1?in=ryuichi-sakamoto-official/sets/the-revenant-original-motion-1',
		answer: 'The Revenant - First Dream - Ryuichi Sakamoto',
	},
	{
		url: 'https://soundcloud.com/ryuichi-sakamoto-official/killing-hawk-1?in=ryuichi-sakamoto-official/sets/the-revenant-original-motion-1',
		answer: 'The Revenant - Killing Hawk - Ryuichi Sakamoto',
	},
	{
		url: 'https://soundcloud.com/ryuichi-sakamoto-official/discovering-river?in=ryuichi-sakamoto-official/sets/the-revenant-original-motion-1',
		answer: 'The Revenant - Discovering River - Ryuichi Sakamoto',
	},
	{
		url: 'https://soundcloud.com/ryuichi-sakamoto-official/goodbye-to-hawk?in=ryuichi-sakamoto-official/sets/the-revenant-original-motion-1',
		answer: 'The Revenant - Goodbye to Hawk - Ryuichi Sakamoto',
	},
	{
		url: 'https://soundcloud.com/ryuichi-sakamoto-official/discovering-buffalo?in=ryuichi-sakamoto-official/sets/the-revenant-original-motion-1',
		answer: 'The Revenant - Discovering Buffalo - Ryuichi Sakamoto',
	},
	{
		url: 'https://soundcloud.com/ryuichi-sakamoto-official/hell-ensemble?in=ryuichi-sakamoto-official/sets/the-revenant-original-motion-1',
		answer: 'The Revenant - Hell Ensemble - Ryuichi Sakamoto',
	},
	{
		url: 'https://soundcloud.com/ryuichi-sakamoto-official/glass-and-buffalo-warrior?in=ryuichi-sakamoto-official/sets/the-revenant-original-motion-1',
		answer: 'The Revenant - Glass and Buffalo Warrior Travel - Ryuichi Sakamoto',
	},
	{
		url: 'https://soundcloud.com/ryuichi-sakamoto-official/arriving-at-fort-kiowa?in=ryuichi-sakamoto-official/sets/the-revenant-original-motion-1',
		answer: 'The Revenant - Arriving at Fort Kiowa - Ryuichi Sakamoto',
	},
	{
		url: 'https://soundcloud.com/ryuichi-sakamoto-official/church-dream-1?in=ryuichi-sakamoto-official/sets/the-revenant-original-motion-1',
		answer: 'The Revenant - Church Dream - Ryuichi Sakamoto',
	},
	{
		url: 'https://soundcloud.com/ryuichi-sakamoto-official/powaqa-rescue?in=ryuichi-sakamoto-official/sets/the-revenant-original-motion-1',
		answer: 'The Revenant - Powaqa Rescue - Ryuichi Sakamoto',
	},
	{
		url: 'https://soundcloud.com/ryuichi-sakamoto-official/imagining-buffalo?in=ryuichi-sakamoto-official/sets/the-revenant-original-motion-1',
		answer: 'The Revenant - Imagining Buffalo - Ryuichi Sakamoto',
	},
	{
		url: 'https://soundcloud.com/ryuichi-sakamoto-official/the-revenant-theme-2-1?in=ryuichi-sakamoto-official/sets/the-revenant-original-motion-1',
		answer: 'The Revenant - The Revenant Theme 2 - Ryuichi Sakamoto',
	},
	{
		url: 'https://soundcloud.com/munichsymphony/main-title?in=howard-shore-official/sets/the-silence-of-the-lambs-1',
		answer: 'The Silence Of The Lambs - Main Title - Howard Shore',
	},
	{
		url: 'https://soundcloud.com/howard-shore-official/the-asylum?in=howard-shore-official/sets/the-silence-of-the-lambs-1',
		answer: 'The Silence Of The Lambs - The Asylum - Howard Shore',
	},
	{
		url: 'https://soundcloud.com/howard-shore-official/clarice?in=howard-shore-official/sets/the-silence-of-the-lambs-1',
		answer: 'The Silence Of The Lambs - Clarice - Howard Shore',
	},
	{
		url: 'https://soundcloud.com/howard-shore-official/return-to-the-asylum?in=howard-shore-official/sets/the-silence-of-the-lambs-1',
		answer: 'The Silence Of The Lambs - Return To The Asylum - Howard Shore',
	},
	{
		url: 'https://soundcloud.com/howard-shore-official/the-abduction?in=howard-shore-official/sets/the-silence-of-the-lambs-1',
		answer: 'The Silence Of The Lambs - The Abduction - Howard Shore',
	},
	{
		url: 'https://soundcloud.com/howard-shore-official/quid-pro-quo?in=howard-shore-official/sets/the-silence-of-the-lambs-1',
		answer: 'The Silence Of The Lambs - Quid Pro Quo - Howard Shore',
	},
	{
		url: 'https://soundcloud.com/howard-shore-official/lecter-in-memphis?in=howard-shore-official/sets/the-silence-of-the-lambs-1',
		answer: 'The Silence Of The Lambs - Lecter In Memphis - Howard Shore',
	},
	{
		url: 'https://soundcloud.com/howard-shore-official/lambs-screaming-1?in=howard-shore-official/sets/the-silence-of-the-lambs-1',
		answer: 'The Silence Of The Lambs - Lambs Screaming - Howard Shore',
	},
	{
		url: 'https://soundcloud.com/howard-shore-official/lecter-escapes?in=howard-shore-official/sets/the-silence-of-the-lambs-1',
		answer: 'The Silence Of The Lambs - Lecter Escapes - Howard Shore',
	},
	{
		url: 'https://soundcloud.com/howard-shore-official/belvedere-ohio?in=howard-shore-official/sets/the-silence-of-the-lambs-1',
		answer: 'The Silence Of The Lambs - Belvedere, Ohio - Howard Shore',
	},
	{
		url: 'https://soundcloud.com/howard-shore-official/the-moth?in=howard-shore-official/sets/the-silence-of-the-lambs-1',
		answer: 'The Silence Of The Lambs - The Moth - Howard Shore',
	},
	{
		url: 'https://soundcloud.com/howard-shore-official/the-cellar?in=howard-shore-official/sets/the-silence-of-the-lambs-1',
		answer: 'The Silence Of The Lambs - The Cellar - Howard Shore',
	},
	{
		url: 'https://soundcloud.com/howard-shore-official/finale?in=howard-shore-official/sets/the-silence-of-the-lambs-1',
		answer: 'The Silence Of The Lambs - Finale - Howard Shore',
	},
	{
		url: 'https://soundcloud.com/mychael-danna/pis-lullaby?in=mychael-danna/sets/life-of-pi-22',
		answer: "Life of Pi - Pi's Lullaby - Mychael Danna",
	},
	{
		url: 'https://soundcloud.com/mychael-danna/piscine-molitor-patel-sous-le?in=mychael-danna/sets/life-of-pi-22',
		answer:
			'Life of Pi - Piscine Molitor Patel / Sous le Ciel de Paris - Mychael Danna',
	},
	{
		url: 'https://soundcloud.com/mychael-danna/pondicherry?in=mychael-danna/sets/life-of-pi-22',
		answer: 'Life of Pi - Pondicherry - Mychael Danna',
	},
	{
		url: 'https://soundcloud.com/mychael-danna/meeting-krishna?in=mychael-danna/sets/life-of-pi-22',
		answer: 'Life of Pi - Meeting Krishna - Mychael Danna',
	},
	{
		url: 'https://soundcloud.com/mychael-danna/christ-in-the-mountains?in=mychael-danna/sets/life-of-pi-22',
		answer: 'Life of Pi - Christ in the Mountains - Mychael Danna',
	},
	{
		url: 'https://soundcloud.com/mychael-danna/thank-you-vishnu-for?in=mychael-danna/sets/life-of-pi-22',
		answer:
			'Life of Pi - Thank you Vishnu for Introducing me to Christ / Raga Ahir Bhairav - Mychael Danna',
	},
	{
		url: 'https://soundcloud.com/mychael-danna/richard-parker?in=mychael-danna/sets/life-of-pi-22',
		answer: 'Life of Pi - Richard Parker - Mychael Danna',
	},
	{
		url: 'https://soundcloud.com/mychael-danna/appas-lesson?in=mychael-danna/sets/life-of-pi-22',
		answer: "Life of Pi - Appa's Lesson - Mychael Danna",
	},
	{
		url: 'https://soundcloud.com/mychael-danna/anandi?in=mychael-danna/sets/life-of-pi-22',
		answer: 'Life of Pi - Anandi - Mychael Danna',
	},
	{
		url: 'https://soundcloud.com/mychael-danna/leaving-india?in=mychael-danna/sets/life-of-pi-22',
		answer: 'Life of Pi - Leaving India - Mychael Danna',
	},
	{
		url: 'https://soundcloud.com/mychael-danna/the-deepest-spot-on-earth?in=mychael-danna/sets/life-of-pi-22',
		answer: 'Life of Pi - The Deepest Spot on Earth - Mychael Danna',
	},
	{
		url: 'https://soundcloud.com/mychael-danna/tsimtsum?in=mychael-danna/sets/life-of-pi-22',
		answer: 'Life of Pi - Tsimtsum - Mychael Danna',
	},
	{
		url: 'https://soundcloud.com/mychael-danna/death-of-the-zebra?in=mychael-danna/sets/life-of-pi-22',
		answer: 'Life of Pi - Death of the Zebra - Mychael Danna',
	},
	{
		url: 'https://soundcloud.com/mychael-danna/first-night-first-day?in=mychael-danna/sets/life-of-pi-22',
		answer: 'Life of Pi - First Night, First Day - Mychael Danna',
	},
	{
		url: 'https://soundcloud.com/mychael-danna/set-your-house-in-order?in=mychael-danna/sets/life-of-pi-22',
		answer: 'Life of Pi - Set Your House in Order - Mychael Danna',
	},
	{
		url: 'https://soundcloud.com/tyler-bates-official/morag?in=tyler-bates-official/sets/strazhi-galaktiki',
		answer: 'Guardians of the Galaxy - Morag - Tyler Bates',
	},
	{
		url: 'https://soundcloud.com/tyler-bates-official/the-final-battle-begins?in=tyler-bates-official/sets/strazhi-galaktiki',
		answer: 'Guardians of the Galaxy - The Final Battle Begins - Tyler Bates',
	},
	{
		url: 'https://soundcloud.com/tyler-bates-official/plasma-ball?in=tyler-bates-official/sets/strazhi-galaktiki',
		answer: 'Guardians of the Galaxy - Plasma Ball - Tyler Bates',
	},
	{
		url: 'https://soundcloud.com/tyler-bates-official/quills-big-retreat?in=tyler-bates-official/sets/strazhi-galaktiki',
		answer: "Guardians of the Galaxy - Quill's Big Retreat - Tyler Bates",
	},
	{
		url: 'https://soundcloud.com/tyler-bates-official/to-the-stars?in=tyler-bates-official/sets/strazhi-galaktiki',
		answer: 'Guardians of the Galaxy - To the Stars - Tyler Bates',
	},
	{
		url: 'https://soundcloud.com/tyler-bates-official/ronans-theme?in=tyler-bates-official/sets/strazhi-galaktiki',
		answer: "Guardians of the Galaxy - Ronan's Theme - Tyler Bates",
	},
	{
		url: 'https://soundcloud.com/tyler-bates-official/everyones-an-idiot?in=tyler-bates-official/sets/strazhi-galaktiki',
		answer: "Guardians of the Galaxy - Everyone's an Idiot - Tyler Bates",
	},
	{
		url: 'https://soundcloud.com/tyler-bates-official/what-a-bunch-of-a-holes?in=tyler-bates-official/sets/strazhi-galaktiki',
		answer: 'Guardians of the Galaxy - What a Bunch of A-Holes - Tyler Bates',
	},
	{
		url: 'https://soundcloud.com/tyler-bates-official/busted?in=tyler-bates-official/sets/strazhi-galaktiki',
		answer: 'Guardians of the Galaxy - Busted - Tyler Bates',
	},
	{
		url: 'https://soundcloud.com/tyler-bates-official/the-new-meat?in=tyler-bates-official/sets/strazhi-galaktiki',
		answer: 'Guardians of the Galaxy - The New Meat - Tyler Bates',
	},
	{
		url: 'https://soundcloud.com/tyler-bates-official/the-destroyer?in=tyler-bates-official/sets/strazhi-galaktiki',
		answer: 'Guardians of the Galaxy - The Destroyer - Tyler Bates',
	},
	{
		url: 'https://soundcloud.com/tyler-bates-official/sanctuary?in=tyler-bates-official/sets/strazhi-galaktiki',
		answer: 'Guardians of the Galaxy - Sanctuary - Tyler Bates',
	},
	{
		url: 'https://soundcloud.com/tyler-bates-official/the-kyln-escape?in=tyler-bates-official/sets/strazhi-galaktiki',
		answer: 'Guardians of the Galaxy - The Kyln Escape - Tyler Bates',
	},
	{
		url: 'https://soundcloud.com/tyler-bates-official/dont-mess-with-my-walkman?in=tyler-bates-official/sets/strazhi-galaktiki',
		answer: "Guardians of the Galaxy - Don't Mess With My Walkman - Tyler Bates",
	},
	{
		url: 'https://soundcloud.com/tyler-bates-official/the-great-companion?in=tyler-bates-official/sets/strazhi-galaktiki',
		answer: 'Guardians of the Galaxy - The Great Companion - Tyler Bates',
	},
	{
		url: 'https://soundcloud.com/tyler-bates-official/the-road-to-knowhere?in=tyler-bates-official/sets/strazhi-galaktiki',
		answer: 'Guardians of the Galaxy - The Road to Knowhere - Tyler Bates',
	},
	{
		url: 'https://soundcloud.com/tyler-bates-official/the-collector?in=tyler-bates-official/sets/strazhi-galaktiki',
		answer: 'Guardians of the Galaxy - The Collector - Tyler Bates',
	},
	{
		url: 'https://soundcloud.com/tyler-bates-official/ronans-arrival?in=tyler-bates-official/sets/strazhi-galaktiki',
		answer: "Guardians of the Galaxy - Ronan's Arrival - Tyler Bates",
	},
	{
		url: 'https://soundcloud.com/tyler-bates-official/the-pod-chase?in=tyler-bates-official/sets/strazhi-galaktiki',
		answer: 'Guardians of the Galaxy - The Pod Chase - Tyler Bates',
	},
	{
		url: 'https://soundcloud.com/tyler-bates-official/sacrifice?in=tyler-bates-official/sets/strazhi-galaktiki',
		answer: 'Guardians of the Galaxy - Sacrifice - Tyler Bates',
	},
	{
		url: 'https://soundcloud.com/tyler-bates-official/we-all-got-dead-people?in=tyler-bates-official/sets/strazhi-galaktiki',
		answer: 'Guardians of the Galaxy - We All Got Dead People - Tyler Bates',
	},
	{
		url: 'https://soundcloud.com/tyler-bates-official/the-ballad-of-the-nova-corps?in=tyler-bates-official/sets/strazhi-galaktiki',
		answer:
			'Guardians of the Galaxy - The Ballad of the Nova Corps. (Instrumental) - Tyler Bates',
	},
	{
		url: 'https://soundcloud.com/tyler-bates-official/groot-spores?in=tyler-bates-official/sets/strazhi-galaktiki',
		answer: 'Guardians of the Galaxy - Groot Spores - Tyler Bates',
	},
	{
		url: 'https://soundcloud.com/tyler-bates-official/guardians-united?in=tyler-bates-official/sets/strazhi-galaktiki',
		answer: 'Guardians of the Galaxy - Guardians United - Tyler Bates',
	},
	{
		url: 'https://soundcloud.com/tyler-bates-official/the-big-blast?in=tyler-bates-official/sets/strazhi-galaktiki',
		answer: 'Guardians of the Galaxy - The Big Blast - Tyler Bates',
	},
	{
		url: 'https://soundcloud.com/tyler-bates-official/groot-cocoon?in=tyler-bates-official/sets/strazhi-galaktiki',
		answer: 'Guardians of the Galaxy - Groot Cocoon - Tyler Bates',
	},
	{
		url: 'https://soundcloud.com/tyler-bates-official/black-tears?in=tyler-bates-official/sets/strazhi-galaktiki',
		answer: 'Guardians of the Galaxy - Black Tears - Tyler Bates',
	},
	{
		url: 'https://soundcloud.com/tyler-bates-official/citizens-unite?in=tyler-bates-official/sets/strazhi-galaktiki',
		answer: 'Guardians of the Galaxy - Citizens Unite - Tyler Bates',
	},
	{
		url: 'https://soundcloud.com/tyler-bates-official/a-nova-upgrade?in=tyler-bates-official/sets/strazhi-galaktiki',
		answer: 'Guardians of the Galaxy - A Nova Upgrade - Tyler Bates',
	},
	{
		url: 'https://soundcloud.com/chorus-official/virginia-company-1?in=alan-menken/sets/pocahontas-original-2',
		answer: 'Pocahontas Original - Virginia Company (1) - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/alan-menken/el-barco-en-el-mar?in=alan-menken/sets/pocahontas-original-2',
		answer: 'Pocahontas Original - Ship At Sea - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/chorus-official/virginia-company-2?in=alan-menken/sets/pocahontas-original-2',
		answer: 'Pocahontas Original - Virginia Company (2) - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/chorus-official/jak-uparty-bebna-dzwiek-i?in=alan-menken/sets/pocahontas-original-2',
		answer: 'Pocahontas Original - Jak Uparty Bebna Dzwiek (I) - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/janusz-zakrzenski/jak-uparty-bebna-dzwiek-ii?in=alan-menken/sets/pocahontas-original-2',
		answer: 'Pocahontas Original - Jak Uparty Bebna Dzwiek (II) - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/edyta-gorniak/ten-za-lukiem-rzeki-swiat?in=alan-menken/sets/pocahontas-original-2',
		answer:
			'Pocahontas Original - Ten za łukiem rzeki świat (z filmu „Pocahontas”/Ścieżka dźwiękowa polskiej wersji) - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/alan-menken/abuela-sauce?in=alan-menken/sets/pocahontas-original-2',
		answer: 'Pocahontas Original - Grandmother Willow - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/barbara-drapinska/wszystko-pojmiesz-wnet-i?in=alan-menken/sets/pocahontas-original-2',
		answer: 'Pocahontas Original - Wszystko Pojmiesz Wnet (I) - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/grzegorzwons/moj-moj-moj?in=alan-menken/sets/pocahontas-original-2',
		answer: 'Pocahontas Original - Mój, Mój, Mój - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/barbara-drapinska/wszyztko-pojmiesz-wnet-ii?in=alan-menken/sets/pocahontas-original-2',
		answer: 'Pocahontas Original - Wszyztko Pojmiesz Wnet (II) - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/edyta-gorniak/kolorowy-wiatr?in=alan-menken/sets/pocahontas-original-2',
		answer: 'Pocahontas Original - Kolorowy Wiatr - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/janusz-zakrzenski/dzicy-sa-cz-1?in=alan-menken/sets/pocahontas-original-2',
		answer: 'Pocahontas Original - Dzicy Sa (Cz 1) - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/janusz-zakrzenski/dzicy-sa-cz-2?in=alan-menken/sets/pocahontas-original-2',
		answer: 'Pocahontas Original - Dzicy Sa (Cz 2) - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/alan-menken/no-le-volvere-a-ver?in=alan-menken/sets/pocahontas-original-2',
		answer: "Pocahontas Original - I'll Never See Him Again - Alan Menken",
	},
	{
		url: 'https://soundcloud.com/alan-menken/pocahontas?in=alan-menken/sets/pocahontas-original-2',
		answer: 'Pocahontas Original - Pocahontas - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/danny-elfman-official/overture-the-nightmare-before?in=user-552765053/sets/nightmare-before-christmas',
		answer:
			'Nightmare Before Christmas - Overture - (The Nightmare Before Christmas)',
	},
	{
		url: 'https://soundcloud.com/patrick-stewart-official/opening-the-nightmare-before?in=user-552765053/sets/nightmare-before-christmas',
		answer:
			'Nightmare Before Christmas - Opening - (The Nightmare Before Christmas)',
	},
	{
		url: 'https://soundcloud.com/hammerstudentassociation/this-is-halloween-the?in=user-552765053/sets/nightmare-before-christmas',
		answer:
			'Nightmare Before Christmas - This Is Halloween - The Nightmare Before Christmas',
	},
	{
		url: 'https://soundcloud.com/changeoftrack/jacks-lament-lyrics-nightmare?in=user-552765053/sets/nightmare-before-christmas',
		answer:
			"Nightmare Before Christmas - Jack's Lament - Lyrics - Nightmare Before Christmas",
	},
	{
		url: 'https://soundcloud.com/user-811313743/nightmare-before-christmas-whats-this?in=user-552765053/sets/nightmare-before-christmas',
		answer:
			"Nightmare Before Christmas - Nightmare Before Christmas - What's This?",
	},
	{
		url: 'https://soundcloud.com/user-460515374/town-meeting-song-the?in=user-552765053/sets/nightmare-before-christmas',
		answer:
			'Nightmare Before Christmas - Town Meeting Song - The Nightmare Before Christmas',
	},
	{
		url: 'https://soundcloud.com/user-460515374/jacks-obsession-the-nightmare?in=user-552765053/sets/nightmare-before-christmas',
		answer:
			"Nightmare Before Christmas - Jack's Obsession - The Nightmare Before Christmas",
	},
	{
		url: 'https://soundcloud.com/danny-elfman-official/kidnap-the-sandy-claws?in=user-552765053/sets/nightmare-before-christmas',
		answer: 'Nightmare Before Christmas - Kidnap The Sandy Claws',
	},
	{
		url: 'https://soundcloud.com/danny-elfman-official/making-christmas-1?in=user-552765053/sets/nightmare-before-christmas',
		answer: 'Nightmare Before Christmas - Making Christmas',
	},
	{
		url: 'https://soundcloud.com/marvinag/the-nightmare-before-christmas-sallys-song?in=user-552765053/sets/nightmare-before-christmas',
		answer:
			"Nightmare Before Christmas - The Nightmare Before Christmas - Sally's Song",
	},
	{
		url: 'https://soundcloud.com/danny-elfman-official/poor-jack?in=user-552765053/sets/nightmare-before-christmas',
		answer: 'Nightmare Before Christmas - Poor Jack',
	},
	{
		url: 'https://soundcloud.com/sing-broadway-now/the-nightmare-before-73116881?in=user-552765053/sets/nightmare-before-christmas',
		answer: 'Nightmare Before Christmas - Finale / Reprise',
	},
	{
		url: 'https://soundcloud.com/jonnygreenwoodofficial/open-spaces?in=jonnygreenwoodofficial/sets/there-will-be-blood-music-from',
		answer: 'There Will Be Blood - Open Spaces - Jonny Greenwood',
	},
	{
		url: 'https://soundcloud.com/jonnygreenwoodofficial/future-markets?in=jonnygreenwoodofficial/sets/there-will-be-blood-music-from',
		answer: 'There Will Be Blood - Future Markets - Jonny Greenwood',
	},
	{
		url: 'https://soundcloud.com/jonnygreenwoodofficial/prospectors-arrive?in=jonnygreenwoodofficial/sets/there-will-be-blood-music-from',
		answer: 'There Will Be Blood - Prospectors Arrive - Jonny Greenwood',
	},
	{
		url: 'https://soundcloud.com/jonnygreenwoodofficial/eat-him-by-his-own-light?in=jonnygreenwoodofficial/sets/there-will-be-blood-music-from',
		answer: 'There Will Be Blood - Eat Him By His Own Light - Jonny Greenwood',
	},
	{
		url: 'https://soundcloud.com/jonnygreenwoodofficial/henry-plainview?in=jonnygreenwoodofficial/sets/there-will-be-blood-music-from',
		answer: 'There Will Be Blood - Henry Plainview - Jonny Greenwood',
	},
	{
		url: 'https://soundcloud.com/jonnygreenwoodofficial/there-will-be-blood?in=jonnygreenwoodofficial/sets/there-will-be-blood-music-from',
		answer: 'There Will Be Blood - There Will Be Blood - Jonny Greenwood',
	},
	{
		url: 'https://soundcloud.com/jonnygreenwoodofficial/oil?in=jonnygreenwoodofficial/sets/there-will-be-blood-music-from',
		answer: 'There Will Be Blood - Oil - Jonny Greenwood',
	},
	{
		url: 'https://soundcloud.com/jonnygreenwoodofficial/proven-lands-intro?in=jonnygreenwoodofficial/sets/there-will-be-blood-music-from',
		answer: 'There Will Be Blood - Proven Lands (Intro) - Jonny Greenwood',
	},
	{
		url: 'https://soundcloud.com/jonnygreenwoodofficial/proven-lands?in=jonnygreenwoodofficial/sets/there-will-be-blood-music-from',
		answer: 'There Will Be Blood - Proven Lands - Jonny Greenwood',
	},
	{
		url: 'https://soundcloud.com/jonnygreenwoodofficial/hw-hope-of-new-fields?in=jonnygreenwoodofficial/sets/there-will-be-blood-music-from',
		answer: 'There Will Be Blood - HW / Hope of New Fields - Jonny Greenwood',
	},
	{
		url: 'https://soundcloud.com/jonnygreenwoodofficial/stranded-the-line?in=jonnygreenwoodofficial/sets/there-will-be-blood-music-from',
		answer: 'There Will Be Blood - Stranded the Line - Jonny Greenwood',
	},
	{
		url: 'https://soundcloud.com/jonnygreenwoodofficial/prospectors-quartet?in=jonnygreenwoodofficial/sets/there-will-be-blood-music-from',
		answer: "There Will Be Blood - Prospector's Quartet - Jonny Greenwood",
	},
	{
		url: 'https://soundcloud.com/jonnygreenwoodofficial/de-tuned-quartet?in=jonnygreenwoodofficial/sets/there-will-be-blood-music-from',
		answer: 'There Will Be Blood - De-Tuned Quartet - Jonny Greenwood',
	},
	{
		url: 'https://soundcloud.com/hildurgudnadottir-music/call-me-joker',
		answer: 'Joker - Call Me Joker - Hildur Guonadottir',
	},
	{
		url: 'https://soundcloud.com/gustavo-santaolalla/opening?in=gustavo-santaolalla/sets/brokeback-mountain-soundtrack',
		answer: 'Brokeback Mountain - Opening - Gustavo Santaolalla',
	},
	{
		url: 'https://soundcloud.com/willienelsonofficial/he-was-a-friend-of-mine?in=gustavo-santaolalla/sets/brokeback-mountain-soundtrack',
		answer: 'Brokeback Mountain - He Was A Friend Of Mine - Gustavo Santaolalla',
	},
	{
		url: 'https://soundcloud.com/gustavo-santaolalla/brokeback-mountain-1?in=gustavo-santaolalla/sets/brokeback-mountain-soundtrack',
		answer: 'Brokeback Mountain - Brokeback Mountain 1 - Gustavo Santaolalla',
	},
	{
		url: 'https://soundcloud.com/emmylouharrisofficial/a-love-that-will-never-grow?in=gustavo-santaolalla/sets/brokeback-mountain-soundtrack',
		answer:
			'Brokeback Mountain - A Love That Will Never Grow Old - Gustavo Santaolalla',
	},
	{
		url: 'https://soundcloud.com/teddy-thompson-official/king-of-the-road?in=gustavo-santaolalla/sets/brokeback-mountain-soundtrack',
		answer: 'Brokeback Mountain - King Of The Road - Gustavo Santaolalla',
	},
	{
		url: 'https://soundcloud.com/gustavo-santaolalla/snow?in=gustavo-santaolalla/sets/brokeback-mountain-soundtrack',
		answer: 'Brokeback Mountain - Snow - Gustavo Santaolalla',
	},
	{
		url: 'https://soundcloud.com/steveearle/the-devils-right-hand-3?in=gustavo-santaolalla/sets/brokeback-mountain-soundtrack',
		answer: "Brokeback Mountain - The Devil's Right Hand - Gustavo Santaolalla",
	},
	{
		url: 'https://soundcloud.com/marymcbrideofficial/no-ones-gonna-love-you-like-me?in=gustavo-santaolalla/sets/brokeback-mountain-soundtrack',
		answer:
			"Brokeback Mountain - No One's Gonna Love You Like Me - Gustavo Santaolalla",
	},
	{
		url: 'https://soundcloud.com/gustavo-santaolalla/brokeback-mountain-2?in=gustavo-santaolalla/sets/brokeback-mountain-soundtrack',
		answer: 'Brokeback Mountain - Brokeback Mountain 2 - Gustavo Santaolalla',
	},
	{
		url: 'https://soundcloud.com/teddy-thompson-official/i-dont-want-to-say-goodbye?in=gustavo-santaolalla/sets/brokeback-mountain-soundtrack',
		answer:
			"Brokeback Mountain - I Don't Want To Say Goodbye - Gustavo Santaolalla",
	},
	{
		url: 'https://soundcloud.com/jackiegreene/i-will-never-let-you-go?in=gustavo-santaolalla/sets/brokeback-mountain-soundtrack',
		answer: 'Brokeback Mountain - I Will Never Let You Go - Gustavo Santaolalla',
	},
	{
		url: 'https://soundcloud.com/gustavo-santaolalla/riding-horses?in=gustavo-santaolalla/sets/brokeback-mountain-soundtrack',
		answer: 'Brokeback Mountain - Riding Horses - Gustavo Santaolalla',
	},
	{
		url: 'https://soundcloud.com/thegasband/an-angel-went-up-in-flames?in=gustavo-santaolalla/sets/brokeback-mountain-soundtrack',
		answer:
			'Brokeback Mountain - An Angel Went Up In Flames - Gustavo Santaolalla',
	},
	{
		url: 'https://soundcloud.com/lindaronstadt/its-so-easy?in=gustavo-santaolalla/sets/brokeback-mountain-soundtrack',
		answer: "Brokeback Mountain - It's So Easy - Gustavo Santaolalla",
	},
	{
		url: 'https://soundcloud.com/gustavo-santaolalla/brokeback-mountain-3?in=gustavo-santaolalla/sets/brokeback-mountain-soundtrack',
		answer: 'Brokeback Mountain - Brokeback Mountain 3 - Gustavo Santaolalla',
	},
	{
		url: 'https://soundcloud.com/rachel-portman-official/minor-swing?in=rachel-portman-official/sets/chocolat-original-motion',
		answer: 'Chocolat - Minor Swing - Rachel Portman',
	},
	{
		url: 'https://soundcloud.com/rachel-portman-official/chocolat-main-titles?in=rachel-portman-official/sets/chocolat-original-motion',
		answer: 'Chocolat - Main Title - Rachel Portman',
	},
	{
		url: 'https://soundcloud.com/rachel-portman-official/the-story-of-grandmere?in=rachel-portman-official/sets/chocolat-original-motion',
		answer: 'Chocolat - The Story of Grandmere (Instrumental) - Rachel Portman',
	},
	{
		url: 'https://soundcloud.com/rachel-portman-official/vianne-sets-up-shop?in=rachel-portman-official/sets/chocolat-original-motion',
		answer: 'Chocolat - Vianne Sets Up Shop - Rachel Portman',
	},
	{
		url: 'https://soundcloud.com/rachel-portman-official/three-women-instrumental?in=rachel-portman-official/sets/chocolat-original-motion',
		answer: 'Chocolat - Three Women (Instrumental) - Rachel Portman',
	},
	{
		url: 'https://soundcloud.com/rachel-portman-official/vianne-confronts-the-comte?in=rachel-portman-official/sets/chocolat-original-motion',
		answer:
			'Chocolat - Vianne Confronts the Comte (Instrumental) - Rachel Portman',
	},
	{
		url: 'https://soundcloud.com/rachel-portman-official/other-possibilities?in=rachel-portman-official/sets/chocolat-original-motion',
		answer: 'Chocolat - Other Possibilities (Instrumental) - Rachel Portman',
	},
	{
		url: 'https://soundcloud.com/rachel-portman-official/guillaumes-confession?in=rachel-portman-official/sets/chocolat-original-motion',
		answer: "Chocolat - Guillaume's Confession (Instrumental) - Rachel Portman",
	},
	{
		url: 'https://soundcloud.com/rachel-portman-official/passage-of-time?in=rachel-portman-official/sets/chocolat-original-motion',
		answer: 'Chocolat - Passage of Time - Rachel Portman',
	},
	{
		url: 'https://soundcloud.com/rachel-portman-official/boycott-immorality?in=rachel-portman-official/sets/chocolat-original-motion',
		answer: 'Chocolat - Boycott Immorality - Rachel Portman',
	},
	{
		url: 'https://soundcloud.com/rachel-portman-official/party-preparations?in=rachel-portman-official/sets/chocolat-original-motion',
		answer: 'Chocolat - Party Preparations (Instrumental) - Rachel Portman',
	},
	{
		url: 'https://soundcloud.com/rachel-portman-official/chocolate-sauce-instrumental?in=rachel-portman-official/sets/chocolat-original-motion',
		answer: 'Chocolat - Chocolate Sauce (Instrumental) - Rachel Portman',
	},
	{
		url: 'https://soundcloud.com/rachel-portman-official/fire-instrumental?in=rachel-portman-official/sets/chocolat-original-motion',
		answer: 'Chocolat - Fire (Instrumental) - Rachel Portman',
	},
	{
		url: 'https://soundcloud.com/rachel-portman-official/vianne-gazes-at-the-river?in=rachel-portman-official/sets/chocolat-original-motion',
		answer:
			'Chocolat - Vianne Gazes at the River (Instrumental) - Rachel Portman',
	},
	{
		url: 'https://soundcloud.com/rachel-portman-official/mayan-bowl-breaks-instrumental?in=rachel-portman-official/sets/chocolat-original-motion',
		answer: 'Chocolat - Mayan Bowl Breaks (Instrumental) - Rachel Portman',
	},
	{
		url: 'https://soundcloud.com/ludwiggoransson/rainy-night-in-tallinn?in=ludwiggoransson/sets/tenet-original-motion-1',
		answer: 'TENET - RAINY NIGHT IN TALLINN - Ludwig Goransson',
	},
	{
		url: 'https://soundcloud.com/ludwiggoransson/windmills?in=ludwiggoransson/sets/tenet-original-motion-1',
		answer: 'TENET - WINDMILLS - Ludwig Goransson',
	},
	{
		url: 'https://soundcloud.com/ludwiggoransson/meeting-neil?in=ludwiggoransson/sets/tenet-original-motion-1',
		answer: 'TENET - MEETING NEIL - Ludwig Goransson',
	},
	{
		url: 'https://soundcloud.com/ludwiggoransson/priya?in=ludwiggoransson/sets/tenet-original-motion-1',
		answer: 'TENET - PRIYA - Ludwig Goransson',
	},
	{
		url: 'https://soundcloud.com/ludwiggoransson/betrayal?in=ludwiggoransson/sets/tenet-original-motion-1',
		answer: 'TENET - BETRAYAL - Ludwig Goransson',
	},
	{
		url: 'https://soundcloud.com/ludwiggoransson/freeport?in=ludwiggoransson/sets/tenet-original-motion-1',
		answer: 'TENET - FREEPORT - Ludwig Goransson',
	},
	{
		url: 'https://soundcloud.com/ludwiggoransson/747-1?in=ludwiggoransson/sets/tenet-original-motion-1',
		answer: 'TENET - 747 - Ludwig Goransson',
	},
	{
		url: 'https://soundcloud.com/ludwiggoransson/from-mumbai-to-amalfi?in=ludwiggoransson/sets/tenet-original-motion-1',
		answer: 'TENET - FROM MUMBAI TO AMALFI - Ludwig Goransson',
	},
	{
		url: 'https://soundcloud.com/ludwiggoransson/foils?in=ludwiggoransson/sets/tenet-original-motion-1',
		answer: 'TENET - FOILS - Ludwig Goransson',
	},
	{
		url: 'https://soundcloud.com/ludwiggoransson/sator?in=ludwiggoransson/sets/tenet-original-motion-1',
		answer: 'TENET - SATOR - Ludwig Goransson',
	},
	{
		url: 'https://soundcloud.com/ludwiggoransson/trucks-in-place?in=ludwiggoransson/sets/tenet-original-motion-1',
		answer: 'TENET - TRUCKS IN PLACE - Ludwig Goransson',
	},
	{
		url: 'https://soundcloud.com/ludwiggoransson/red-room-blue-room?in=ludwiggoransson/sets/tenet-original-motion-1',
		answer: 'TENET - RED ROOM BLUE ROOM - Ludwig Goransson',
	},
	{
		url: 'https://soundcloud.com/ludwiggoransson/inversion?in=ludwiggoransson/sets/tenet-original-motion-1',
		answer: 'TENET - INVERSION - Ludwig Goransson',
	},
	{
		url: 'https://soundcloud.com/ludwiggoransson/retrieving-the-case?in=ludwiggoransson/sets/tenet-original-motion-1',
		answer: 'TENET - RETRIEVING THE CASE - Ludwig Goransson',
	},
	{
		url: 'https://soundcloud.com/ludwiggoransson/the-algorithm?in=ludwiggoransson/sets/tenet-original-motion-1',
		answer: 'TENET - THE ALGORITHM - Ludwig Goransson',
	},

	// {
	// 	url: 'https://soundcloud.com/kennyloggins/playing-with-the-boys?in=harold-faltermeyer/sets/top-gun-maverick-music-from',
	// 	answer:
	// 		'Top Gun: Maverick - Playing with the Boys (From "Top Gun" Original Soundtrack) - Harold Faltermeyer',
	// },
	// {
	// 	url: 'https://soundcloud.com/harold-faltermeyer/darkstar?in=harold-faltermeyer/sets/top-gun-maverick-music-from',
	// 	answer: 'Top Gun: Maverick - Darkstar - Harold Faltermeyer',
	// },
	// {
	// 	url: 'https://soundcloud.com/milesteller-sc/great-balls-of-fire-live?in=harold-faltermeyer/sets/top-gun-maverick-music-from',
	// 	answer: 'Top Gun: Maverick - Great Balls Of Fire (Live) - Harold Faltermeyer',
	// },
	// {
	// 	url: 'https://soundcloud.com/harold-faltermeyer/youre-where-you-belong-give-em?in=harold-faltermeyer/sets/top-gun-maverick-music-from',
	// 	answer:
	// 		'Top Gun: Maverick - You’re Where You Belong / Give ‘Em Hell - Harold Faltermeyer',
	// },
	// {
	// 	url: 'https://soundcloud.com/onerepublic/i-aint-worried?in=harold-faltermeyer/sets/top-gun-maverick-music-from',
	// 	answer: "Top Gun: Maverick - I Ain't Worried - Harold Faltermeyer",
	// },
	// {
	// 	url: 'https://soundcloud.com/harold-faltermeyer/dagger-one-is-hit-time-to-let?in=harold-faltermeyer/sets/top-gun-maverick-music-from',
	// 	answer:
	// 		'Top Gun: Maverick - Dagger One Is Hit / Time To Let Go - Harold Faltermeyer',
	// },
	// {
	// 	url: 'https://soundcloud.com/harold-faltermeyer/tally-two-whats-the-plan-f-14?in=harold-faltermeyer/sets/top-gun-maverick-music-from',
	// 	answer:
	// 		'Top Gun: Maverick - Tally Two / What’s The Plan / F-14 - Harold Faltermeyer',
	// },
	// {
	// 	url: 'https://soundcloud.com/harold-faltermeyer/the-man-the-legend-touchdown?in=harold-faltermeyer/sets/top-gun-maverick-music-from',
	// 	answer:
	// 		'Top Gun: Maverick - The Man, The Legend / Touchdown - Harold Faltermeyer',
	// },
	// {
	// 	url: 'https://soundcloud.com/harold-faltermeyer/penny-returns-interlude?in=harold-faltermeyer/sets/top-gun-maverick-music-from',
	// 	answer: 'Top Gun: Maverick - Penny Returns (Interlude) - Harold Faltermeyer',
	// },
	// {
	// 	url: 'https://soundcloud.com/ladygaga/hold-my-hand?in=harold-faltermeyer/sets/top-gun-maverick-music-from',
	// 	answer: 'Top Gun: Maverick - Hold My Hand - Harold Faltermeyer',
	// },
	// {
	// 	url: 'https://soundcloud.com/harold-faltermeyer/top-gun-anthem-1?in=harold-faltermeyer/sets/top-gun-maverick-music-from',
	// 	answer: 'Top Gun: Maverick - Top Gun Anthem - Harold Faltermeyer',
	// },
	{
		url: 'https://soundcloud.com/ludwiggoransson-sc/fission?in=ludwiggoransson-sc/sets/oppenheimer-original-motion',
		answer: 'Oppenheimer - Fission - Ludwig Göransson',
	},
	{
		url: 'https://soundcloud.com/ludwiggoransson-sc/can-you-hear-the-music?in=ludwiggoransson-sc/sets/oppenheimer-original-motion',
		answer: 'Oppenheimer - Can You Hear The Music - Ludwig Göransson',
	},
	{
		url: 'https://soundcloud.com/ludwiggoransson-sc/a-lowly-shoe-salesman?in=ludwiggoransson-sc/sets/oppenheimer-original-motion',
		answer: 'Oppenheimer - A Lowly Shoe Salesman - Ludwig Göransson',
	},
	{
		url: 'https://soundcloud.com/ludwiggoransson-sc/quantum-mechanics?in=ludwiggoransson-sc/sets/oppenheimer-original-motion',
		answer: 'Oppenheimer - Quantum Mechanics - Ludwig Göransson',
	},
	{
		url: 'https://soundcloud.com/ludwiggoransson-sc/gravity-swallows-light?in=ludwiggoransson-sc/sets/oppenheimer-original-motion',
		answer: 'Oppenheimer - Gravity Swallows Light - Ludwig Göransson',
	},
	{
		url: 'https://soundcloud.com/ludwiggoransson-sc/meeting-kitty?in=ludwiggoransson-sc/sets/oppenheimer-original-motion',
		answer: 'Oppenheimer - Meeting Kitty - Ludwig Göransson',
	},
	{
		url: 'https://soundcloud.com/ludwiggoransson-sc/groves?in=ludwiggoransson-sc/sets/oppenheimer-original-motion',
		answer: 'Oppenheimer - Groves - Ludwig Göransson',
	},
	{
		url: 'https://soundcloud.com/ludwiggoransson-sc/manhattan-project?in=ludwiggoransson-sc/sets/oppenheimer-original-motion',
		answer: 'Oppenheimer - Manhattan Project - Ludwig Göransson',
	},
	{
		url: 'https://soundcloud.com/ludwiggoransson-sc/american-prometheus?in=ludwiggoransson-sc/sets/oppenheimer-original-motion',
		answer: 'Oppenheimer - American Prometheus - Ludwig Göransson',
	},
	{
		url: 'https://soundcloud.com/ludwiggoransson-sc/atmospheric-ignition?in=ludwiggoransson-sc/sets/oppenheimer-original-motion',
		answer: 'Oppenheimer - Atmospheric Ignition - Ludwig Göransson',
	},
	{
		url: 'https://soundcloud.com/ludwiggoransson-sc/los-alamos?in=ludwiggoransson-sc/sets/oppenheimer-original-motion',
		answer: 'Oppenheimer - Los Alamos - Ludwig Göransson',
	},
	{
		url: 'https://soundcloud.com/ludwiggoransson-sc/fusion?in=ludwiggoransson-sc/sets/oppenheimer-original-motion',
		answer: 'Oppenheimer - Fusion - Ludwig Göransson',
	},
	{
		url: 'https://soundcloud.com/ludwiggoransson-sc/colonel-pash?in=ludwiggoransson-sc/sets/oppenheimer-original-motion',
		answer: 'Oppenheimer - Colonel Pash - Ludwig Göransson',
	},
	{
		url: 'https://soundcloud.com/ludwiggoransson-sc/theorists?in=ludwiggoransson-sc/sets/oppenheimer-original-motion',
		answer: 'Oppenheimer - Theorists - Ludwig Göransson',
	},
	{
		url: 'https://soundcloud.com/ludwiggoransson-sc/ground-zero?in=ludwiggoransson-sc/sets/oppenheimer-original-motion',
		answer: 'Oppenheimer - Ground Zero - Ludwig Göransson',
	},
	{
		url: 'https://soundcloud.com/charltonheston/long-ago?in=alan-menken/sets/hercules-7',
		answer: 'Hercules - Long Ago... - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/cheryl-freeman-official/the-gospel-truth-i-main-titles?in=alan-menken/sets/hercules-7',
		answer:
			'Hercules - The Gospel Truth I / Main Titles - Hercules - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/roz-ryan/the-gospel-truth-ii-soundtrack?in=alan-menken/sets/hercules-7',
		answer: 'Hercules - The Gospel Truth II - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/lillias-white/the-gospel-truth-iii?in=alan-menken/sets/hercules-7',
		answer: 'Hercules - The Gospel Truth III - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/roger-bart/go-the-distance?in=alan-menken/sets/hercules-7',
		answer: 'Hercules - Go the Distance - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/alan-menken/o-m-chtiger-zeus?in=alan-menken/sets/hercules-7',
		answer: 'Hercules - O Mächtiger Zeus - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/roger-bart/go-the-distance-reprise?in=alan-menken/sets/hercules-7',
		answer: 'Hercules - Go The Distance (Reprise) - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/dannydevitoofficial/one-last-hope?in=alan-menken/sets/hercules-7',
		answer: 'Hercules - One Last Hope - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/lillias-white/zero-to-hero?in=alan-menken/sets/hercules-7',
		answer: 'Hercules - Zero To Hero - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/susan-egan-official/i-wont-say-im-in-love-from?in=alan-menken/sets/hercules-7',
		answer: "Hercules - I Won't Say (I'm In Love) - Alan Menken",
	},
	{
		url: 'https://soundcloud.com/cheryl-freeman-official/a-star-is-born?in=alan-menken/sets/hercules-7',
		answer: 'Hercules - A Star Is Born - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/alan-menken/theben-erleben?in=alan-menken/sets/hercules-7',
		answer: 'Hercules - Theben Erleben - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/alan-menken/die-prophezeiung?in=alan-menken/sets/hercules-7',
		answer: 'Hercules - Die Prophezeiung - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/alan-menken/la-distruzione-di-agora?in=alan-menken/sets/hercules-7',
		answer: 'Hercules - Die Zerstörung Des Marktplatzes - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/alan-menken/phils-insel?in=alan-menken/sets/hercules-7',
		answer: 'Hercules - Phils Insel - Alan Menken',
	},
	{
		url: 'https://soundcloud.com/spider-manmotionpicture/main-title-album-version?in=spider-manmotionpicture/sets/spider-man-original-motion',
		answer: 'Spider-Man - Main Title - Spider-Man (Motion Picture)',
	},
	{
		url: 'https://soundcloud.com/spider-manmotionpicture/transformations-album-version?in=spider-manmotionpicture/sets/spider-man-original-motion',
		answer: 'Spider-Man - Transformations - Spider-Man (Motion Picture)',
	},
	{
		url: 'https://soundcloud.com/spider-manmotionpicture/costume-montage-album-version?in=spider-manmotionpicture/sets/spider-man-original-motion',
		answer: 'Spider-Man - Costume Montage - Spider-Man (Motion Picture)',
	},
	{
		url: 'https://soundcloud.com/spider-manmotionpicture/revenge-album-version?in=spider-manmotionpicture/sets/spider-man-original-motion',
		answer: 'Spider-Man - Revenge - Spider-Man (Motion Picture)',
	},
	{
		url: 'https://soundcloud.com/spider-manmotionpicture/first-web-album-version?in=spider-manmotionpicture/sets/spider-man-original-motion',
		answer: 'Spider-Man - First Web - Spider-Man (Motion Picture)',
	},
	{
		url: 'https://soundcloud.com/spider-manmotionpicture/somethings-different-album?in=spider-manmotionpicture/sets/spider-man-original-motion',
		answer: "Spider-Man - Something's Different - Spider-Man (Motion Picture)",
	},
	{
		url: 'https://soundcloud.com/pete-anthony-official/city-montage-album-version?in=spider-manmotionpicture/sets/spider-man-original-motion',
		answer: 'Spider-Man - City Montage - Spider-Man (Motion Picture)',
	},
	{
		url: 'https://soundcloud.com/spider-manmotionpicture/alone-album-version?in=spider-manmotionpicture/sets/spider-man-original-motion',
		answer: 'Spider-Man - Alone - Spider-Man (Motion Picture)',
	},
	{
		url: 'https://soundcloud.com/spider-manmotionpicture/parade-attack-album-version?in=spider-manmotionpicture/sets/spider-man-original-motion',
		answer: 'Spider-Man - Parade Attack - Spider-Man (Motion Picture)',
	},
	{
		url: 'https://soundcloud.com/peteranthonyofficial/specter-of-the-goblin-album?in=spider-manmotionpicture/sets/spider-man-original-motion',
		answer: 'Spider-Man - Specter of the Goblin - Spider-Man (Motion Picture)',
	},
	{
		url: 'https://soundcloud.com/spider-manmotionpicture/revelation-album-version?in=spider-manmotionpicture/sets/spider-man-original-motion',
		answer: 'Spider-Man - Revelation - Spider-Man (Motion Picture)',
	},
	{
		url: 'https://soundcloud.com/peteranthonyofficial/getting-through-album-version?in=spider-manmotionpicture/sets/spider-man-original-motion',
		answer: 'Spider-Man - Getting Through - Spider-Man (Motion Picture)',
	},
	{
		url: 'https://soundcloud.com/pete-anthony-official/final-confrontation-album?in=spider-manmotionpicture/sets/spider-man-original-motion',
		answer: 'Spider-Man - Final Confrontation - Spider-Man (Motion Picture)',
	},
	{
		url: 'https://soundcloud.com/spider-manmotionpicture/farewell-album-version-1?in=spider-manmotionpicture/sets/spider-man-original-motion',
		answer: 'Spider-Man - Farewell - Spider-Man (Motion Picture)',
	},
	{
		url: 'https://soundcloud.com/pete-anthony-official/end-credits-album-version?in=spider-manmotionpicture/sets/spider-man-original-motion',
		answer: 'Spider-Man - End Credits - Spider-Man (Motion Picture)',
	},
	// {
	// 	url: 'https://soundcloud.com/markronson/creation-of-barbie?in=markronson/sets/barbie-score-from-the-original',
	// 	answer: 'Barbie - Creation of Barbie - Mark Ronson',
	// },
	// {
	// 	url: 'https://soundcloud.com/markronson/beach-off?in=markronson/sets/barbie-score-from-the-original',
	// 	answer: 'Barbie - Beach Off - Mark Ronson',
	// },
	// {
	// 	url: 'https://soundcloud.com/markronson/ken-thinks?in=markronson/sets/barbie-score-from-the-original',
	// 	answer: 'Barbie - Ken Thinks - Mark Ronson',
	// },
	// {
	// 	url: 'https://soundcloud.com/markronson/stairway-to-weird-barbie?in=markronson/sets/barbie-score-from-the-original',
	// 	answer: 'Barbie - Stairway to Weird Barbie - Mark Ronson',
	// },
	// {
	// 	url: 'https://soundcloud.com/markronson/thoughts-of-death?in=markronson/sets/barbie-score-from-the-original',
	// 	answer: 'Barbie - Thoughts of Death - Mark Ronson',
	// },
	// {
	// 	url: 'https://soundcloud.com/markronson/send-me-through-the-portal?in=markronson/sets/barbie-score-from-the-original',
	// 	answer: 'Barbie - Send Me Through the Portal - Mark Ronson',
	// },
	// {
	// 	url: 'https://soundcloud.com/markronson/ken-makes-a-discovery?in=markronson/sets/barbie-score-from-the-original',
	// 	answer: 'Barbie - Ken Makes a Discovery - Mark Ronson',
	// },
	// {
	// 	url: 'https://soundcloud.com/markronson/bus-stop-billie?in=markronson/sets/barbie-score-from-the-original',
	// 	answer: 'Barbie - Bus Stop Billie - Mark Ronson',
	// },
	// {
	// 	url: 'https://soundcloud.com/markronson/mattel?in=markronson/sets/barbie-score-from-the-original',
	// 	answer: 'Barbie - Mattel - Mark Ronson',
	// },
	// {
	// 	url: 'https://soundcloud.com/markronson/meeting-ruth?in=markronson/sets/barbie-score-from-the-original',
	// 	answer: 'Barbie - Meeting Ruth - Mark Ronson',
	// },
	// {
	// 	url: 'https://soundcloud.com/markronson/lose-these-chuckleheads?in=markronson/sets/barbie-score-from-the-original',
	// 	answer: 'Barbie - Lose These Chuckleheads - Mark Ronson',
	// },
	// {
	// 	url: 'https://soundcloud.com/markronson/you-failed-me?in=markronson/sets/barbie-score-from-the-original',
	// 	answer: 'Barbie - You Failed Me! - Mark Ronson',
	// },
	// {
	// 	url: 'https://soundcloud.com/markronson/alan-vs-kens?in=markronson/sets/barbie-score-from-the-original',
	// 	answer: 'Barbie - Allan vs Kens - Mark Ronson',
	// },
	// {
	// 	url: 'https://soundcloud.com/markronson/deprogramming?in=markronson/sets/barbie-score-from-the-original',
	// 	answer: 'Barbie - Deprogramming - Mark Ronson',
	// },
	// {
	// 	url: 'https://soundcloud.com/markronson/warmth-of-your-gaze?in=markronson/sets/barbie-score-from-the-original',
	// 	answer: 'Barbie - Warmth of Your Gaze - Mark Ronson',
	// },
	// {
	// 	url: 'https://soundcloud.com/markronson/an-ending?in=markronson/sets/barbie-score-from-the-original',
	// 	answer: 'Barbie - An Ending - Mark Ronson',
	// },
	// {
	// 	url: 'https://soundcloud.com/markronson/i-dont-have-an-ending?in=markronson/sets/barbie-score-from-the-original',
	// 	answer: "Barbie - I Don't Have an Ending - Mark Ronson",
	// },
	{
		url: 'https://soundcloud.com/markronson/what-was-i-made-for-epilogue?in=markronson/sets/barbie-score-from-the-original',
		answer:
			'Barbie - What Was I Made For? (Epilogue) [Instrumental Version] - Mark Ronson',
	},
	{
		url: 'https://soundcloud.com/camille-official/le-festine?in=michael-giacchino/sets/ratatouille-1',
		answer: 'Ratatouille - Le Festin - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/welcome-to-gusteaus?in=michael-giacchino/sets/ratatouille-1',
		answer: "Ratatouille - Welcome to Gusteau's - Michael Giacchino",
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/this-is-me?in=michael-giacchino/sets/ratatouille-1',
		answer: 'Ratatouille - This Is Me - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/grany-get-your-gun?in=michael-giacchino/sets/ratatouille-1',
		answer: 'Ratatouille - Granny Get Your Gun - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/100-rat-dash?in=michael-giacchino/sets/ratatouille-1',
		answer: 'Ratatouille - 100 Rat Dash - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/wall-rat?in=michael-giacchino/sets/ratatouille-1',
		answer: 'Ratatouille - Wall Rat - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/cast-of-cooks?in=michael-giacchino/sets/ratatouille-1',
		answer: 'Ratatouille - Cast of Cooks - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/a-real-gourmet-kitchen?in=michael-giacchino/sets/ratatouille-1',
		answer: 'Ratatouille - A Real Gourmet Kitchen - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/souped-up?in=michael-giacchino/sets/ratatouille-1',
		answer: 'Ratatouille - Souped Up - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/is-it-soup-yet?in=michael-giacchino/sets/ratatouille-1',
		answer: 'Ratatouille - Is It Soup Yet? - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/a-new-deal?in=michael-giacchino/sets/ratatouille-1',
		answer: 'Ratatouille - A New Deal - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/remy-drives-a-linguini?in=michael-giacchino/sets/ratatouille-1',
		answer: 'Ratatouille - Remy Drives a Linguini - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/colette-shows-him-le-ropes?in=michael-giacchino/sets/ratatouille-1',
		answer: 'Ratatouille - Colette Shows Him Le Ropes - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/special-order?in=michael-giacchino/sets/ratatouille-1',
		answer: 'Ratatouille - Special Order - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/kiss-vinegar?in=michael-giacchino/sets/ratatouille-1',
		answer: 'Ratatouille - Kiss & Vinegar - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/john-debney-official/main-titles-princess-diaries?in=john-debney-official/sets/the-princess-diaries-1',
		answer:
			'The Princess Diaries - Main Titles - Princess Diaries Score - John Debney',
	},
	{
		url: 'https://soundcloud.com/john-debney-official/queen-clarisse-score?in=john-debney-official/sets/the-princess-diaries-1',
		answer: 'The Princess Diaries - Queen Clarisse - John Debney',
	},
	{
		url: 'https://soundcloud.com/john-debney-official/mia-invites-lilly-to-the-ball?in=john-debney-official/sets/the-princess-diaries-1',
		answer: 'The Princess Diaries - Mia Invites Lilly To The Ball - John Debney',
	},
	{
		url: 'https://soundcloud.com/john-debney-official/the-princess-diaries-waltz?in=john-debney-official/sets/the-princess-diaries-1',
		answer: 'The Princess Diaries - The Princess Diaries Waltz - John Debney',
	},
	{
		url: 'https://soundcloud.com/john-debney-official/mias-makeover-score?in=john-debney-official/sets/the-princess-diaries-1',
		answer: "The Princess Diaries - Mia's Makeover - John Debney",
	},
	{
		url: 'https://soundcloud.com/john-debney-official/princess-lessons-score?in=john-debney-official/sets/the-princess-diaries-1',
		answer: 'The Princess Diaries - Princess Lessons - John Debney',
	},
	{
		url: 'https://soundcloud.com/john-debney-official/a-new-mia-score?in=john-debney-official/sets/the-princess-diaries-1',
		answer: 'The Princess Diaries - A New Mia - John Debney',
	},
	{
		url: 'https://soundcloud.com/john-debney-official/mia-flees-score?in=john-debney-official/sets/the-princess-diaries-1',
		answer: 'The Princess Diaries - Mia Flees - John Debney',
	},
	{
		url: 'https://soundcloud.com/john-debney-official/sorry-dad-score?in=john-debney-official/sets/the-princess-diaries-1',
		answer: 'The Princess Diaries - Sorry, Dad - John Debney',
	},
	{
		url: 'https://soundcloud.com/john-debney-official/lana-the-traitor-score?in=john-debney-official/sets/the-princess-diaries-1',
		answer: 'The Princess Diaries - Lana, The Traitor - John Debney',
	},
	{
		url: 'https://soundcloud.com/john-debney-official/mia-visits-the-consulate-score?in=john-debney-official/sets/the-princess-diaries-1',
		answer: 'The Princess Diaries - Mia Visits The Consulate - John Debney',
	},
	{
		url: 'https://soundcloud.com/john-debney-official/scooter-talk-score?in=john-debney-official/sets/the-princess-diaries-1',
		answer: 'The Princess Diaries - Scooter Talk - John Debney',
	},
	{
		url: 'https://soundcloud.com/john-debney-official/i-dont-want-to-be-a-princess?in=john-debney-official/sets/the-princess-diaries-1',
		answer: "The Princess Diaries - I Don't Want To Be A Princess - John Debney",
	},
	{
		url: 'https://soundcloud.com/john-debney-official/father-talk-score?in=john-debney-official/sets/the-princess-diaries-1',
		answer: 'The Princess Diaries - Father Talk - John Debney',
	},
	{
		url: 'https://soundcloud.com/john-debney-official/the-ball-score?in=john-debney-official/sets/the-princess-diaries-1',
		answer: 'The Princess Diaries - The Ball - John Debney',
	},
	{
		url: 'https://soundcloud.com/john-goodman-official/if-i-didnt-have-you?in=randynewman/sets/monsters-inc-1',
		answer: "Monsters, Inc. - If I Didn't Have You - Randy Newman",
	},
	{
		url: 'https://soundcloud.com/randynewman/monsters-inc?in=randynewman/sets/monsters-inc-1',
		answer: 'Monsters, Inc. - Monsters, Inc. - Randy Newman',
	},
	{
		url: 'https://soundcloud.com/randynewman/school?in=randynewman/sets/monsters-inc-1',
		answer: 'Monsters, Inc. - School - Randy Newman',
	},
	{
		url: 'https://soundcloud.com/randynewman/walk-to-work-from-monsters-inc?in=randynewman/sets/monsters-inc-1',
		answer: 'Monsters, Inc. - Walk To Work - Randy Newman',
	},
	{
		url: 'https://soundcloud.com/randynewman/sulley-and-mike?in=randynewman/sets/monsters-inc-1',
		answer: 'Monsters, Inc. - Sulley And Mike - Randy Newman',
	},
	{
		url: 'https://soundcloud.com/randynewman/randall-appears?in=randynewman/sets/monsters-inc-1',
		answer: 'Monsters, Inc. - Randall Appears - Randy Newman',
	},
	{
		url: 'https://soundcloud.com/randynewman/enter-the-heroes?in=randynewman/sets/monsters-inc-1',
		answer: 'Monsters, Inc. - Enter The Heroes - Randy Newman',
	},
	{
		url: 'https://soundcloud.com/randynewman/the-scare-floor?in=randynewman/sets/monsters-inc-1',
		answer: 'Monsters, Inc. - The Scare Floor - Randy Newman',
	},
	{
		url: 'https://soundcloud.com/randynewman/oh-celia?in=randynewman/sets/monsters-inc-1',
		answer: 'Monsters, Inc. - Oh, Celia! - Randy Newman',
	},
	{
		url: 'https://soundcloud.com/randynewman/boos-adventures-in?in=randynewman/sets/monsters-inc-1',
		answer: "Monsters, Inc. - Boo's Adventures In Monstropolis - Randy Newman",
	},
	{
		url: 'https://soundcloud.com/randynewman/boos-tired?in=randynewman/sets/monsters-inc-1',
		answer: "Monsters, Inc. - Boo's Tired - Randy Newman",
	},
	{
		url: 'https://soundcloud.com/randynewman/putting-boo-back?in=randynewman/sets/monsters-inc-1',
		answer: 'Monsters, Inc. - Putting Boo Back - Randy Newman',
	},
	{
		url: 'https://soundcloud.com/randynewman/boo-escapes?in=randynewman/sets/monsters-inc-1',
		answer: 'Monsters, Inc. - Boo Escapes - Randy Newman',
	},
	{
		url: 'https://soundcloud.com/randynewman/celias-mad?in=randynewman/sets/monsters-inc-1',
		answer: "Monsters, Inc. - Celia's Mad - Randy Newman",
	},
	{
		url: 'https://soundcloud.com/randynewman/boo-is-a-cube?in=randynewman/sets/monsters-inc-1',
		answer: 'Monsters, Inc. - Boo Is A Cube - Randy Newman',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/star-trek-main-theme',
		answer: 'Star Trek - Main Theme - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/watertowermusic/youracreedclip',
		answer: "Creed - You're A Creed - Ludwig Goransson",
	},
	{
		url: 'https://soundcloud.com/unchained-soundtrack/01-winged-clean-mp3?in=jpraup/sets/django-unchained-sountrack',
		answer: 'Django Unchained - Winged (James Russo) - jpraup',
	},
	{
		url: 'https://soundcloud.com/unchained-soundtrack/02-django-28clean-29?in=jpraup/sets/django-unchained-sountrack',
		answer: 'Django Unchained - Django (Luis Bacalov) - jpraup',
	},
	{
		url: 'https://soundcloud.com/unchained-soundtrack/03-the-braying-mule-28clean-29?in=jpraup/sets/django-unchained-sountrack',
		answer: 'Django Unchained - The Braying Mule (Ennio Morricone) - jpraup',
	},
	{
		url: 'https://soundcloud.com/unchained-soundtrack/04-in-that-case-django-2c?in=jpraup/sets/django-unchained-sountrack',
		answer:
			'Django Unchained - "In that case Django, After You..." (Christoph Waltz) - jpraup',
	},
	{
		url: 'https://soundcloud.com/unchained-soundtrack/05-lo-chiamavano-king-28clean?in=jpraup/sets/django-unchained-sountrack',
		answer:
			'Django Unchained - Lo Chiamavano King (His Name is King) (Luis Bacalov) - jpraup',
	},
	{
		url: 'https://soundcloud.com/unchained-soundtrack/06-freedom-28clean-29?in=jpraup/sets/django-unchained-sountrack',
		answer:
			'Django Unchained - Freedom (Anthony Hamilton & Elayna Boynton) - jpraup',
	},
	{
		url: 'https://soundcloud.com/unchained-soundtrack/07-five-thousand-dollar-niggas?in=jpraup/sets/django-unchained-sountrack',
		answer:
			'Django Unchained - Five-Thousand Dollar Niggas and Gummy-Mouthed Bitches - jpraup',
	},
	{
		url: 'https://soundcloud.com/unchained-soundtrack/09-sneaky-schultz-and-the?in=jpraup/sets/django-unchained-sountrack',
		answer:
			'Django Unchained - Sneaky Schultz and the Demise of Sharp (Don Straud) - jpraup',
	},
	{
		url: 'https://soundcloud.com/unchained-soundtrack/11-day-of-anger-28clean-29?in=jpraup/sets/django-unchained-sountrack',
		answer: 'Django Unchained - Day of Anger (Riziero Ortolani) - jpraup',
	},
	{
		url: 'https://soundcloud.com/unchained-soundtrack/100-black-coffins?in=jpraup/sets/django-unchained-sountrack',
		answer: 'Django Unchained - 100 Black Coffins (Rick Ross) - jpraup',
	},
	{
		url: 'https://soundcloud.com/unchained-soundtrack/13-nicaragua-28clean-29?in=jpraup/sets/django-unchained-sountrack',
		answer: 'Django Unchained - Nicaragua (Jerry Goldsmith) - jpraup',
	},
	{
		url: 'https://soundcloud.com/unchained-soundtrack/14-hildi-27s-hot-box-28clean?in=jpraup/sets/django-unchained-sountrack',
		answer: "Django Unchained - Hildi's Hot Box (Samuel L. Jackson) - jpraup",
	},
	{
		url: 'https://soundcloud.com/unchained-soundtrack/15-sister-sara-27s-theme?in=jpraup/sets/django-unchained-sountrack',
		answer: "Django Unchained - Sister Sara's Theme (Ennio Morricone) - jpraup",
	},
	{
		url: 'https://soundcloud.com/unchained-soundtrack/16-ancora-qui-28clean-29?in=jpraup/sets/django-unchained-sountrack',
		answer: 'Django Unchained - Ancora Qui (Elisa Toffoli) - jpraup',
	},
	{
		url: 'https://soundcloud.com/unchained-soundtrack/unchained-the-payback?in=jpraup/sets/django-unchained-sountrack',
		answer:
			'Django Unchained - Unchained (The Payback/Untouchable) (James Brown & 2Pac) - jpraup',
	},
	{
		url: 'https://soundcloud.com/alan-silvestri/captain-america-main-titles?in=alan-silvestri/sets/captain-america-the-first-1',
		answer:
			'Captain America: The First Avenger - Captain America Main Titles - Alan Silvestri',
	},
	{
		url: 'https://soundcloud.com/alan-silvestri/frozen-wasteland?in=alan-silvestri/sets/captain-america-the-first-1',
		answer:
			'Captain America: The First Avenger - Frozen Wasteland - Alan Silvestri',
	},
	{
		url: 'https://soundcloud.com/alan-silvestri/schmidts-treasure?in=alan-silvestri/sets/captain-america-the-first-1',
		answer:
			'Captain America: The First Avenger - Schmidt’s Treasure - Alan Silvestri',
	},
	{
		url: 'https://soundcloud.com/alan-silvestri/farewell-to-bucky?in=alan-silvestri/sets/captain-america-the-first-1',
		answer:
			'Captain America: The First Avenger - Farewell To Bucky - Alan Silvestri',
	},
	{
		url: 'https://soundcloud.com/alan-silvestri/hydra-lab?in=alan-silvestri/sets/captain-america-the-first-1',
		answer: 'Captain America: The First Avenger - Hydra Lab - Alan Silvestri',
	},
	{
		url: 'https://soundcloud.com/alan-silvestri/training-the-supersoldier?in=alan-silvestri/sets/captain-america-the-first-1',
		answer:
			'Captain America: The First Avenger - Training The Supersoldier - Alan Silvestri',
	},
	{
		url: 'https://soundcloud.com/alan-silvestri/schmidts-story?in=alan-silvestri/sets/captain-america-the-first-1',
		answer:
			'Captain America: The First Avenger - Schmidt’s Story - Alan Silvestri',
	},
	{
		url: 'https://soundcloud.com/alan-silvestri/vitarays?in=alan-silvestri/sets/captain-america-the-first-1',
		answer: 'Captain America: The First Avenger - VitaRays - Alan Silvestri',
	},
	{
		url: 'https://soundcloud.com/alan-silvestri/captain-america-we-did-it?in=alan-silvestri/sets/captain-america-the-first-1',
		answer:
			'Captain America: The First Avenger - Captain America "We Did It" - Alan Silvestri',
	},
	{
		url: 'https://soundcloud.com/alan-silvestri/kruger-chase?in=alan-silvestri/sets/captain-america-the-first-1',
		answer: 'Captain America: The First Avenger - Kruger Chase - Alan Silvestri',
	},
	{
		url: 'https://soundcloud.com/alan-silvestri/hostage-on-the-pier?in=alan-silvestri/sets/captain-america-the-first-1',
		answer:
			'Captain America: The First Avenger - Hostage On The Pier - Alan Silvestri',
	},
	{
		url: 'https://soundcloud.com/alan-silvestri/generals-resign?in=alan-silvestri/sets/captain-america-the-first-1',
		answer:
			'Captain America: The First Avenger - General’s Resign - Alan Silvestri',
	},
	{
		url: 'https://soundcloud.com/alan-silvestri/unauthorized-night-flight?in=alan-silvestri/sets/captain-america-the-first-1',
		answer:
			'Captain America: The First Avenger - Unauthorized Night Flight - Alan Silvestri',
	},
	{
		url: 'https://soundcloud.com/alan-silvestri/troop-liberation?in=alan-silvestri/sets/captain-america-the-first-1',
		answer:
			'Captain America: The First Avenger - Troop Liberation - Alan Silvestri',
	},
	{
		url: 'https://soundcloud.com/alan-silvestri/factory-inferno?in=alan-silvestri/sets/captain-america-the-first-1',
		answer:
			'Captain America: The First Avenger - Factory Inferno - Alan Silvestri',
	},
	{
		url: 'https://soundcloud.com/joe-hisaishi-official/symphonic-suite-princess-4?in=joe-hisaishi-official/sets/symphonic-suite-princess',
		answer:
			'Princess Mononoke - Symphonic Suite “Princess Mononoke”2021 : I. The Legend Of Ashitaka (Live) - Joe Hisaishi',
	},
	{
		url: 'https://soundcloud.com/joe-hisaishi-official/symphonic-suite-princess-2?in=joe-hisaishi-official/sets/symphonic-suite-princess',
		answer:
			'Princess Mononoke - Symphonic Suite “Princess Mononoke”2021 : II. TA TA RI GAMI (Live) - Joe Hisaishi',
	},
	{
		url: 'https://soundcloud.com/joe-hisaishi-official/symphonic-suite-princess-5?in=joe-hisaishi-official/sets/symphonic-suite-princess',
		answer:
			'Princess Mononoke - Symphonic Suite “Princess Mononoke”2021 : III. The Journey Of The West - Kodamas (Live) - Joe Hisaishi',
	},
	{
		url: 'https://soundcloud.com/joe-hisaishi-official/symphonic-suite-princess-1?in=joe-hisaishi-official/sets/symphonic-suite-princess',
		answer:
			'Princess Mononoke - Symphonic Suite “Princess Mononoke”2021 : IV. The Demon Power - The Forest Of The Dear God (Live) - Joe Hisaishi',
	},
	{
		url: 'https://soundcloud.com/joe-hisaishi-official/symphonic-suite-princess?in=joe-hisaishi-official/sets/symphonic-suite-princess',
		answer:
			'Princess Mononoke - Symphonic Suite “Princess Mononoke”2021 : V. Mononoke Hime (Live) - Joe Hisaishi',
	},
	{
		url: 'https://soundcloud.com/joe-hisaishi-official/symphonic-suite-princess-6?in=joe-hisaishi-official/sets/symphonic-suite-princess',
		answer:
			'Princess Mononoke - Symphonic Suite “Princess Mononoke”2021 : VI. The World Of The Dead - Adagio Of Life & Death (Live) - Joe Hisaishi',
	},
	{
		url: 'https://soundcloud.com/joe-hisaishi-official/symphonic-suite-princess-3?in=joe-hisaishi-official/sets/symphonic-suite-princess',
		answer:
			'Princess Mononoke - Symphonic Suite “Princess Mononoke”2021 : VII. Ashitaka And San (Live) - Joe Hisaishi',
	},
	{
		url: 'https://soundcloud.com/joe-hisaishi-official/merry-go-round-2019-live?in=joe-hisaishi-official/sets/symphonic-suite-princess',
		answer: 'Princess Mononoke - Merry-Go-Round 2019 (Live) - Joe Hisaishi',
	},
	{
		url: 'https://soundcloud.com/joe-hisaishi-official/asian-works-2020-i-will-be-the?in=joe-hisaishi-official/sets/symphonic-suite-princess',
		answer:
			'Princess Mononoke - Asian Works 2020 : I. Will be the wind (Live) - Joe Hisaishi',
	},
	{
		url: 'https://soundcloud.com/joe-hisaishi-official/asian-works-2020-ii-yinglian?in=joe-hisaishi-official/sets/symphonic-suite-princess',
		answer:
			'Princess Mononoke - Asian Works 2020 : II. Yinglian (Live) - Joe Hisaishi',
	},
	{
		url: 'https://soundcloud.com/joe-hisaishi-official/asian-works-2020-iii-xpark?in=joe-hisaishi-official/sets/symphonic-suite-princess',
		answer:
			'Princess Mononoke - Asian Works 2020 : III. Xpark (Live) - Joe Hisaishi',
	},
	{
		url: 'https://soundcloud.com/joe-hisaishi-official/world-dreams-2021-live?in=joe-hisaishi-official/sets/symphonic-suite-princess',
		answer: 'Princess Mononoke - World Dreams 2021 (Live) - Joe Hisaishi',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/give-her-my-budapest?in=michael-giacchino/sets/mission-impossible-ghost-1',
		answer:
			'Mission: Impossible - Ghost Protocol - Give Her My Budapest - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/light-the-fuse?in=michael-giacchino/sets/mission-impossible-ghost-1',
		answer:
			'Mission: Impossible - Ghost Protocol - Light The Fuse - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/knife-to-a-gun-fight?in=michael-giacchino/sets/mission-impossible-ghost-1',
		answer:
			'Mission: Impossible - Ghost Protocol - Knife To A Gun Fight - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/in-russia-phone-dials-you?in=michael-giacchino/sets/mission-impossible-ghost-1',
		answer:
			'Mission: Impossible - Ghost Protocol - In Russia, Phone Dials You - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/kremlin-with-anticipation?in=michael-giacchino/sets/mission-impossible-ghost-1',
		answer:
			'Mission: Impossible - Ghost Protocol - Kremlin With Anticipation - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/from-russia-with-shove?in=michael-giacchino/sets/mission-impossible-ghost-1',
		answer:
			'Mission: Impossible - Ghost Protocol - From Russia With Shove - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/ghost-protocol?in=michael-giacchino/sets/mission-impossible-ghost-1',
		answer:
			'Mission: Impossible - Ghost Protocol - Ghost Protocol - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/railcar-rundown?in=michael-giacchino/sets/mission-impossible-ghost-1',
		answer:
			'Mission: Impossible - Ghost Protocol - Railcar Rundown - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/hendricks-manifesto?in=michael-giacchino/sets/mission-impossible-ghost-1',
		answer:
			"Mission: Impossible - Ghost Protocol - Hendricks' Manifesto - Michael Giacchino",
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/a-man-a-plan-a-code-dubai?in=michael-giacchino/sets/mission-impossible-ghost-1',
		answer:
			'Mission: Impossible - Ghost Protocol - A Man, A Plan, A Code, Dubai - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/love-the-glove?in=michael-giacchino/sets/mission-impossible-ghost-1',
		answer:
			'Mission: Impossible - Ghost Protocol - Love The Glove - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/the-express-elevator?in=michael-giacchino/sets/mission-impossible-ghost-1',
		answer:
			'Mission: Impossible - Ghost Protocol - The Express Elevator - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/mission-impersonatable?in=michael-giacchino/sets/mission-impossible-ghost-1',
		answer:
			'Mission: Impossible - Ghost Protocol - Mission Impersonatable - Michael Giacchino',
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/moreau-trouble-than-shes-worth?in=michael-giacchino/sets/mission-impossible-ghost-1',
		answer:
			"Mission: Impossible - Ghost Protocol - Moreau Trouble Than She's Worth - Michael Giacchino",
	},
	{
		url: 'https://soundcloud.com/michael-giacchino/out-for-a-run?in=michael-giacchino/sets/mission-impossible-ghost-1',
		answer:
			'Mission: Impossible - Ghost Protocol - Out For A Run - Michael Giacchino',
	},
];
