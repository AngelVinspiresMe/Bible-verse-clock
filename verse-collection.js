// Expanded verse collection for Bible Verse Clock
const verseCollection = {
    // Existing verses
    "3:16": {
        text: "John 3:16 - For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
        categories: ["love", "faith"]
    },
    "10:10": {
        text: "John 10:10 - I have come that they may have life, and have it to the full.",
        categories: ["encouragement"]
    },
    "23:1": {
        text: "Psalm 23:1 - The Lord is my shepherd; I shall not want.",
        categories: ["peace", "faith"]
    },
    "7:7": {
        text: "Matthew 7:7 - Ask and it will be given to you; seek and you will find; knock and the door will be opened to you.",
        categories: ["encouragement", "faith"]
    },
    "6:33": {
        text: "Matthew 6:33 - But seek first his kingdom and his righteousness, and all these things will be given to you as well.",
        categories: ["wisdom", "faith"]
    },
    "4:13": {
        text: "Philippians 4:13 - I can do all things through Christ who strengthens me.",
        categories: ["encouragement", "faith"]
    },
    "8:28": {
        text: "Romans 8:28 - And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
        categories: ["encouragement", "faith"]
    },
    "11:1": {
        text: "Hebrews 11:1 - Now faith is confidence in what we hope for and assurance about what we do not see.",
        categories: ["faith", "wisdom"]
    },
    "13:34": {
        text: "John 13:34 - A new command I give you: Love one another. As I have loved you, so you must love one another.",
        categories: ["love"]
    },
    "12:2": {
        text: "Romans 12:2 - Do not conform to the pattern of this world, but be transformed by the renewing of your mind.",
        categories: ["wisdom"]
    },
    "5:16": {
        text: "1 Thessalonians 5:16-18 - Rejoice always, pray continually, give thanks in all circumstances; for this is God's will for you in Christ Jesus.",
        categories: ["encouragement", "peace"]
    },
    "9:9": {
        text: "Galatians 6:9 - Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.",
        categories: ["encouragement", "wisdom"]
    },
    "1:1": {
        text: "Genesis 1:1 - In the beginning God created the heavens and the earth.",
        categories: ["faith"]
    },
    "4:6": {
        text: "Philippians 4:6-7 - Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.",
        categories: ["peace", "encouragement"]
    },
    
    // Additional verses for more hours
    "12:15": {
        text: "Proverbs 17:22 - A cheerful heart is good medicine, but a crushed spirit dries up the bones.",
        categories: ["encouragement", "wisdom"]
    },
    "1:16": {
        text: "Jeremiah 29:11 - For I know the plans I have for you, declares the LORD, plans to prosper you and not to harm you, plans to give you hope and a future.",
        categories: ["encouragement", "faith"]
    },
    "2:3": {
        text: "Proverbs 3:5-6 - Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
        categories: ["wisdom", "faith"]
    },
    "2:20": {
        text: "Isaiah 40:31 - But those who hope in the LORD will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
        categories: ["encouragement", "faith"]
    },
    "3:30": {
        text: "Psalm 46:10 - Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth.",
        categories: ["peace", "faith"]
    },
    "5:55": {
        text: "1 Peter 5:7 - Cast all your anxiety on him because he cares for you.",
        categories: ["peace", "love"]
    },
    "6:20": {
        text: "Psalm 118:24 - This is the day which the LORD has made; Let us rejoice and be glad in it.",
        categories: ["encouragement"]
    },
    "7:14": {
        text: "2 Chronicles 7:14 - If my people, who are called by my name, will humble themselves and pray and seek my face and turn from their wicked ways, then I will hear from heaven, and I will forgive their sin and will heal their land.",
        categories: ["faith", "wisdom"]
    },
    "7:30": {
        text: "Joshua 1:9 - Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go.",
        categories: ["encouragement", "faith"]
    },
    "8:15": {
        text: "Psalm 37:4 - Take delight in the LORD, and he will give you the desires of your heart.",
        categories: ["faith", "love"]
    },
    "9:11": {
        text: "Micah 6:8 - He has shown you, O mortal, what is good. And what does the LORD require of you? To act justly and to love mercy and to walk humbly with your God.",
        categories: ["wisdom", "faith"]
    },
    "9:30": {
        text: "Lamentations 3:22-23 - Because of the LORD's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness.",
        categories: ["love", "faith"]
    },
    "10:30": {
        text: "Romans 15:13 - May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.",
        categories: ["peace", "encouragement"]
    },
    "11:11": {
        text: "Psalm 91:11 - For he will command his angels concerning you to guard you in all your ways.",
        categories: ["peace", "faith"]
    },
    "11:30": {
        text: "Colossians 3:23-24 - Whatever you do, work at it with all your heart, as working for the Lord, not for human masters, since you know that you will receive an inheritance from the Lord as a reward.",
        categories: ["wisdom", "encouragement"]
    },
    "12:12": {
        text: "Psalm 121:2 - My help comes from the LORD, the Maker of heaven and earth.",
        categories: ["faith", "peace"]
    },
    "12:30": {
        text: "Zephaniah 3:17 - The LORD your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing.",
        categories: ["love", "peace"]
    },
    "13:13": {
        text: "1 Corinthians 13:13 - And now these three remain: faith, hope and love. But the greatest of these is love.",
        categories: ["love", "faith"]
    },
    "14:14": {
        text: "John 14:6 - Jesus answered, 'I am the way and the truth and the life. No one comes to the Father except through me.'",
        categories: ["faith"]
    },
    "15:15": {
        text: "John 15:13 - Greater love has no one than this: to lay down one's life for one's friends.",
        categories: ["love"]
    },
    "16:16": {
        text: "2 Timothy 1:7 - For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.",
        categories: ["encouragement", "love"]
    },
    "17:17": {
        text: "Psalm 119:105 - Your word is a lamp for my feet, a light on my path.",
        categories: ["wisdom", "faith"]
    },
    "18:18": {
        text: "Matthew 11:28 - Come to me, all you who are weary and burdened, and I will give you rest.",
        categories: ["peace", "encouragement"]
    },
    "19:19": {
        text: "Revelation 3:20 - Here I am! I stand at the door and knock. If anyone hears my voice and opens the door, I will come in and eat with that person, and they with me.",
        categories: ["faith", "love"]
    },
    "20:20": {
        text: "Ephesians 3:20 - Now to him who is able to do immeasurably more than all we ask or imagine, according to his power that is at work within us.",
        categories: ["faith", "encouragement"]
    },
    "21:21": {
        text: "Psalm 27:1 - The LORD is my light and my salvation—whom shall I fear? The LORD is the stronghold of my life—of whom shall I be afraid?",
        categories: ["faith", "peace"]
    },
    "22:22": {
        text: "Psalm 91:1 - Whoever dwells in the shelter of the Most High will rest in the shadow of the Almighty.",
        categories: ["peace", "faith"]
    },
    "0:01": {
        text: "Ecclesiastes 3:1 - There is a time for everything, and a season for every activity under the heavens.",
        categories: ["wisdom"]
    },
    "1:11": {
        text: "Psalm 1:1-2 - Blessed is the one who does not walk in step with the wicked or stand in the way that sinners take or sit in the company of mockers, but whose delight is in the law of the LORD, and who meditates on his law day and night.",
        categories: ["wisdom", "faith"]
    },
    "2:22": {
        text: "Galatians 2:20 - I have been crucified with Christ and I no longer live, but Christ lives in me. The life I now live in the body, I live by faith in the Son of God, who loved me and gave himself for me.",
        categories: ["faith", "love"]
    },
    "3:33": {
        text: "Matthew 5:16 - In the same way, let your light shine before others, that they may see your good deeds and glorify your Father in heaven.",
        categories: ["encouragement", "faith"]
    },
    "4:44": {
        text: "Isaiah 41:10 - So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.",
        categories: ["encouragement", "faith"]
    },
    "5:55": {
        text: "Psalm 56:3 - When I am afraid, I put my trust in you.",
        categories: ["peace", "faith"]
    },
    // Additional verses for more comprehensive coverage
    "0:30": {
        text: "Psalm 8:3-4 - When I consider your heavens, the work of your fingers, the moon and the stars, which you have set in place, what is mankind that you are mindful of them, human beings that you care for them?",
        categories: ["faith", "wisdom"]
    },
    "1:30": {
        text: "Psalm 63:1 - You, God, are my God, earnestly I seek you; I thirst for you, my whole being longs for you, in a dry and parched land where there is no water.",
        categories: ["faith", "love"]
    },
    "2:30": {
        text: "2 Corinthians 5:17 - Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!",
        categories: ["faith", "encouragement"]
    },
    "3:00": {
        text: "Psalm 55:17 - Evening, morning and noon I cry out in distress, and he hears my voice.",
        categories: ["peace", "faith"]
    },
    "4:00": {
        text: "Ephesians 6:10 - Finally, be strong in the Lord and in his mighty power.",
        categories: ["encouragement", "faith"]
    },
    "4:30": {
        text: "Matthew 4:4 - Jesus answered, 'It is written: Man shall not live on bread alone, but on every word that comes from the mouth of God.'",
        categories: ["wisdom", "faith"]
    },
    "5:00": {
        text: "Psalm 143:8 - Let the morning bring me word of your unfailing love, for I have put my trust in you. Show me the way I should go, for to you I entrust my life.",
        categories: ["love", "faith"]
    },
    "5:30": {
        text: "Lamentations 3:25-26 - The LORD is good to those whose hope is in him, to the one who seeks him; it is good to wait quietly for the salvation of the LORD.",
        categories: ["peace", "faith"]
    },
    "6:00": {
        text: "Psalm 5:3 - In the morning, LORD, you hear my voice; in the morning I lay my requests before you and wait expectantly.",
        categories: ["faith", "peace"]
    },
    "6:15": {
        text: "Psalm 90:14 - Satisfy us in the morning with your unfailing love, that we may sing for joy and be glad all our days.",
        categories: ["love", "joy"]
    },
    "6:45": {
        text: "Proverbs 16:3 - Commit to the LORD whatever you do, and he will establish your plans.",
        categories: ["wisdom", "faith"]
    },
    "7:00": {
        text: "Psalm 59:16 - But I will sing of your strength, in the morning I will sing of your love; for you are my fortress, my refuge in times of trouble.",
        categories: ["love", "peace"]
    },
    "7:15": {
        text: "Psalm 92:1-2 - It is good to praise the LORD and make music to your name, O Most High, proclaiming your love in the morning and your faithfulness at night.",
        categories: ["love", "faith"]
    },
    "7:45": {
        text: "Psalm 62:5 - Yes, my soul, find rest in God; my hope comes from him.",
        categories: ["peace", "faith"]
    },
    "8:00": {
        text: "Psalm 118:24 - The LORD has done it this very day; let us rejoice today and be glad.",
        categories: ["joy", "encouragement"]
    },
    "8:30": {
        text: "Colossians 3:15 - Let the peace of Christ rule in your hearts, since as members of one body you were called to peace. And be thankful.",
        categories: ["peace", "encouragement"]
    },
    "8:45": {
        text: "Psalm 138:3 - When I called, you answered me; you greatly emboldened me.",
        categories: ["encouragement", "faith"]
    },
    "9:00": {
        text: "2 Corinthians 9:8 - And God is able to bless you abundantly, so that in all things at all times, having all that you need, you will abound in every good work.",
        categories: ["encouragement", "faith"]
    },
    "9:15": {
        text: "Proverbs 2:6 - For the LORD gives wisdom; from his mouth come knowledge and understanding.",
        categories: ["wisdom", "faith"]
    },
    "9:45": {
        text: "Philippians 1:6 - Being confident of this, that he who began a good work in you will carry it on to completion until the day of Christ Jesus.",
        categories: ["encouragement", "faith"]
    },
    "10:00": {
        text: "Ephesians 2:10 - For we are God's handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.",
        categories: ["encouragement", "faith"]
    },
    "10:15": {
        text: "Isaiah 26:3 - You will keep in perfect peace those whose minds are steadfast, because they trust in you.",
        categories: ["peace", "faith"]
    },
    "10:45": {
        text: "James 1:5 - If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault, and it will be given to you.",
        categories: ["wisdom", "faith"]
    },
    "11:15": {
        text: "2 Timothy 3:16-17 - All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness, so that the servant of God may be thoroughly equipped for every good work.",
        categories: ["wisdom", "faith"]
    },
    "11:45": {
        text: "Proverbs 18:10 - The name of the LORD is a fortified tower; the righteous run to it and are safe.",
        categories: ["peace", "faith"]
    },
    "12:00": {
        text: "Psalm 19:14 - May these words of my mouth and this meditation of my heart be pleasing in your sight, LORD, my Rock and my Redeemer.",
        categories: ["faith", "wisdom"]
    },
    "12:45": {
        text: "1 John 4:16 - And so we know and rely on the love God has for us. God is love. Whoever lives in love lives in God, and God in them.",
        categories: ["love", "faith"]
    },
    "13:00": {
        text: "Galatians 5:22-23 - But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control. Against such things there is no law.",
        categories: ["wisdom", "character"]
    },
    "13:15": {
        text: "Psalm 139:14 - I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well.",
        categories: ["encouragement", "faith"]
    },
    "13:30": {
        text: "James 1:22 - Do not merely listen to the word, and so deceive yourselves. Do what it says.",
        categories: ["wisdom", "faith"]
    },
    "13:45": {
        text: "Philippians 2:3-4 - Do nothing out of selfish ambition or vain conceit. Rather, in humility value others above yourselves, not looking to your own interests but each of you to the interests of the others.",
        categories: ["love", "wisdom"]
    },
    "14:00": {
        text: "John 14:27 - Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.",
        categories: ["peace", "encouragement"]
    },
    "14:30": {
        text: "1 John 3:1 - See what great love the Father has lavished on us, that we should be called children of God! And that is what we are!",
        categories: ["love", "faith"]
    },
    "14:45": {
        text: "Psalm 103:8 - The LORD is compassionate and gracious, slow to anger, abounding in love.",
        categories: ["love", "character"]
    },
    "15:00": {
        text: "Romans 12:12 - Be joyful in hope, patient in affliction, faithful in prayer.",
        categories: ["encouragement", "faith"]
    },
    "15:30": {
        text: "Hebrews 4:16 - Let us then approach God's throne of grace with confidence, so that we may receive mercy and find grace to help us in our time of need.",
        categories: ["encouragement", "faith"]
    },
    "15:45": {
        text: "Proverbs 15:1 - A gentle answer turns away wrath, but a harsh word stirs up anger.",
        categories: ["wisdom", "peace"]
    },
    "16:00": {
        text: "Colossians 3:16 - Let the message of Christ dwell among you richly as you teach and admonish one another with all wisdom through psalms, hymns, and songs from the Spirit, singing to God with gratitude in your hearts.",
        categories: ["faith", "wisdom"]
    },
    "16:30": {
        text: "1 Corinthians 16:14 - Do everything in love.",
        categories: ["love", "wisdom"]
    },
    "16:45": {
        text: "Romans 12:18 - If it is possible, as far as it depends on you, live at peace with everyone.",
        categories: ["peace", "wisdom"]
    },
    "17:00": {
        text: "1 Peter 3:15 - But in your hearts revere Christ as Lord. Always be prepared to give an answer to everyone who asks you to give the reason for the hope that you have. But do this with gentleness and respect.",
        categories: ["wisdom", "faith"]
    },
    "17:30": {
        text: "Psalm 62:1-2 - Truly my soul finds rest in God; my salvation comes from him. Truly he is my rock and my salvation; he is my fortress, I will never be shaken.",
        categories: ["peace", "faith"]
    },
    "17:45": {
        text: "Ephesians 4:32 - Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you.",
        categories: ["love", "wisdom"]
    },
    "18:00": {
        text: "Psalm 34:8 - Taste and see that the LORD is good; blessed is the one who takes refuge in him.",
        categories: ["faith", "encouragement"]
    },
    "18:30": {
        text: "Romans 15:5-6 - May the God who gives endurance and encouragement give you the same attitude of mind toward each other that Christ Jesus had, so that with one mind and one voice you may glorify the God and Father of our Lord Jesus Christ.",
        categories: ["encouragement", "love"]
    },
    "18:45": {
        text: "1 Peter 5:8-9 - Be alert and of sober mind. Your enemy the devil prowls around like a roaring lion looking for someone to devour. Resist him, standing firm in the faith.",
        categories: ["wisdom", "faith"]
    },
    "19:00": {
        text: "Psalm 46:1 - God is our refuge and strength, an ever-present help in trouble.",
        categories: ["peace", "faith"]
    },
    "19:30": {
        text: "1 John 1:9 - If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness.",
        categories: ["faith", "peace"]
    },
    "19:45": {
        text: "James 4:8 - Come near to God and he will come near to you.",
        categories: ["faith", "encouragement"]
    },
    "20:00": {
        text: "Psalm 31:24 - Be strong and take heart, all you who hope in the LORD.",
        categories: ["encouragement", "faith"]
    },
    "20:30": {
        text: "2 Corinthians 4:18 - So we fix our eyes not on what is seen, but on what is unseen, since what is seen is temporary, but what is unseen is eternal.",
        categories: ["faith", "wisdom"]
    },
    "20:45": {
        text: "James 5:16 - Therefore confess your sins to each other and pray for each other so that you may be healed. The prayer of a righteous person is powerful and effective.",
        categories: ["faith", "wisdom"]
    },
    "21:00": {
        text: "Psalm 16:8 - I keep my eyes always on the LORD. With him at my right hand, I will not be shaken.",
        categories: ["faith", "peace"]
    },
    "21:30": {
        text: "Hebrews 12:1-2 - Therefore, since we are surrounded by such a great cloud of witnesses, let us throw off everything that hinders and the sin that so easily entangles. And let us run with perseverance the race marked out for us, fixing our eyes on Jesus.",
        categories: ["faith", "encouragement"]
    },
    "21:45": {
        text: "Proverbs 3:3-4 - Let love and faithfulness never leave you; bind them around your neck, write them on the tablet of your heart. Then you will win favor and a good name in the sight of God and man.",
        categories: ["wisdom", "love"]
    },
    "22:00": {
        text: "Psalm 4:8 - In peace I will lie down and sleep, for you alone, LORD, make me dwell in safety.",
        categories: ["peace", "faith"]
    },
    "22:30": {
        text: "Philippians 4:8 - Finally, brothers and sisters, whatever is true, whatever is noble, whatever is right, whatever is pure, whatever is lovely, whatever is admirable—if anything is excellent or praiseworthy—think about such things.",
        categories: ["wisdom", "peace"]
    },
    "22:45": {
        text: "Psalm 139:23-24 - Search me, God, and know my heart; test me and know my anxious thoughts. See if there is any offensive way in me, and lead me in the way everlasting.",
        categories: ["faith", "wisdom"]
    },
    "23:00": {
        text: "Romans 8:38-39 - For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.",
        categories: ["love", "faith"]
    },
    "23:30": {
        text: "Psalm 121:7-8 - The LORD will keep you from all harm— he will watch over your life; the LORD will watch over your coming and going both now and forevermore.",
        categories: ["peace", "faith"]
    },
    "23:45": {
        text: "Jude 1:24-25 - To him who is able to keep you from stumbling and to present you before his glorious presence without fault and with great joy— to the only God our Savior be glory, majesty, power and authority, through Jesus Christ our Lord, before all ages, now and forevermore!",
        categories: ["faith", "encouragement"]
    },
    "0:15": {
        text: "Psalm 127:2 - In vain you rise early and stay up late, toiling for food to eat—for he grants sleep to those he loves.",
        categories: ["peace", "wisdom"]
    }
};
