(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
    const dealers = require("../data/mock_data.json");
    
    const getAllDealers = (term,selling, cars_brand, valueTerm) =>
      new Promise((resolve) => {
        let data = dealers;
    
        if(term) {
    
            switch(term) {
                
                case "first_name":
                    data = data.filter((dealer) => dealer.first_name.toLowerCase().includes(valueTerm));
                    break;
                case "last_name":
                    data = data.filter((dealer) => dealer.last_name.toLowerCase().includes(valueTerm));
                    break;
                case "gender":
                    data = data.filter((dealer) => dealer.gender.toLowerCase() === valueTerm.toLowerCase());
                    break;
                case "email":
                    data = data.filter((dealer) => dealer.email.toLowerCase().includes(valueTerm));
                    break;
                case "car":
                    data = data.filter((dealer) => dealer.car.toLowerCase().includes(valueTerm));
                    break;
                case "car_year":
                    data = data.filter((dealer) => dealer.car_year.toLowerCase().includes(valueTerm));
                    break;
                case "ip_address":
                    data = data.filter((dealer) => dealer.ip_address.includes(valueTerm));
                    break;    
                default:
                    // do nothing
                    break;
            }
        }
          // check status
          if(selling && selling != "none") {
            selling = (selling == "selling") ? true : false;
            data = data.filter(({is_selling}) => selling === is_selling);
          }
        if(cars_brand && cars_brand != "all") {
            data = data.filter((dealer) => dealer.company.toLowerCase() === cars_brand);
        }
        
        resolve({ code: 200, data: data });
      });
    
    const getDealerById = (id) =>
      new Promise((resolve) => {
        const dealer = dealers.find((dealer) => dealer.id === Number(id.trim()));
    
        if (dealer) {
            resolve({ code: 200, data: Array(dealer) });
        } else {
            resolve({
                code: 404,
                data: { message: `No Car found for id ${id}` },
            });
        }
      });
    
    module.exports = {
      getAllDealers,
      getDealerById,
    };
    
    // build : browerift main.js -o dist/bundle.js
    },{"../data/mock_data.json":2}],2:[function(require,module,exports){
    module.exports=[{"id":1,"first_name":"Tremaine","last_name":"Thornthwaite","email":"tthornthwaite0@msn.com","gender":"Male","car":"Sierra 2500","car_year":2004,"ip_address":"237.176.30.123","company":"GMC","cost":"$4967.84","is_selling":true},
    {"id":2,"first_name":"Elroy","last_name":"Whistlecraft","email":"ewhistlecraft1@netscape.com","gender":"Male","car":"Silverado 1500","car_year":2005,"ip_address":"133.176.156.8","company":"Chevrolet","cost":"$2963.83","is_selling":false},
    {"id":3,"first_name":"Viviyan","last_name":"Mayoral","email":"vmayoral2@microsoft.com","gender":"Female","car":"626","car_year":1987,"ip_address":"77.31.221.200","company":"Mazda","cost":"$1610.62","is_selling":true},
    {"id":4,"first_name":"Adriena","last_name":"Benson","email":"abenson3@phoca.cz","gender":"Female","car":"Forester","car_year":2012,"ip_address":"159.123.103.109","company":"Subaru","cost":"$6829.84","is_selling":false},
    {"id":5,"first_name":"Leland","last_name":"Lehr","email":"llehr4@indiegogo.com","gender":"Female","car":"Type 2","car_year":1985,"ip_address":"96.74.20.190","company":"Volkswagen","cost":"$8970.46","is_selling":true},
    {"id":6,"first_name":"Benoite","last_name":"Exroll","email":"bexroll5@ycombinator.com","gender":"Female","car":"Grand Caravan","car_year":2004,"ip_address":"194.78.94.235","company":"Dodge","cost":"$7895.32","is_selling":false},
    {"id":7,"first_name":"Joseito","last_name":"Lerohan","email":"jlerohan6@samsung.com","gender":"Male","car":"Marquis","car_year":1985,"ip_address":"183.80.59.120","company":"Mercury","cost":"$4432.49","is_selling":true},
    {"id":8,"first_name":"Cord","last_name":"Weight","email":"cweight7@bloomberg.com","gender":"Male","car":"Taurus","car_year":2005,"ip_address":"135.181.230.110","company":"Ford","cost":"$6058.48","is_selling":true},
    {"id":9,"first_name":"Emmi","last_name":"Margach","email":"emargach8@youtube.com","gender":"Genderfluid","car":"Explorer Sport Trac","car_year":2010,"ip_address":"54.235.64.56","company":"Ford","cost":"$1323.40","is_selling":true},
    {"id":10,"first_name":"Jamie","last_name":"Haith","email":"jhaith9@sciencedaily.com","gender":"Male","car":"Yukon XL 2500","car_year":2010,"ip_address":"220.0.34.220","company":"GMC","cost":"$5620.67","is_selling":true},
    {"id":11,"first_name":"Shanta","last_name":"Di Frisco","email":"sdifriscoa@si.edu","gender":"Female","car":"9-5","car_year":2011,"ip_address":"181.135.206.230","company":"Saab","cost":"$7321.92","is_selling":false},
    {"id":12,"first_name":"Dieter","last_name":"Noni","email":"dnonib@illinois.edu","gender":"Male","car":"Concorde","car_year":2001,"ip_address":"9.213.101.175","company":"Chrysler","cost":"$1169.72","is_selling":true},
    {"id":13,"first_name":"Meghann","last_name":"Monkton","email":"mmonktonc@theatlantic.com","gender":"Female","car":"XL-7","car_year":2005,"ip_address":"136.195.41.108","company":"Suzuki","cost":"$6456.16","is_selling":false},
    {"id":14,"first_name":"Randolf","last_name":"Malenoir","email":"rmalenoird@google.co.jp","gender":"Male","car":"IS","car_year":2012,"ip_address":"240.126.155.69","company":"Lexus","cost":"$3779.41","is_selling":false},
    {"id":15,"first_name":"Donetta","last_name":"Shewen","email":"dshewene@unc.edu","gender":"Female","car":"F-Series","car_year":1991,"ip_address":"8.16.144.66","company":"Ford","cost":"$2683.48","is_selling":false},
    {"id":16,"first_name":"Elijah","last_name":"Kuhnwald","email":"ekuhnwaldf@mozilla.com","gender":"Male","car":"Grand Prix","car_year":2007,"ip_address":"223.131.247.253","company":"Pontiac","cost":"$6808.85","is_selling":false},
    {"id":17,"first_name":"Jeffie","last_name":"Stammler","email":"jstammlerg@yellowpages.com","gender":"Male","car":"R-Class","car_year":2009,"ip_address":"64.236.122.71","company":"Mercedes-Benz","cost":"$2499.95","is_selling":false},
    {"id":18,"first_name":"Tana","last_name":"Mathers","email":"tmathersh@telegraph.co.uk","gender":"Female","car":"Jetta","car_year":1989,"ip_address":"90.131.11.44","company":"Volkswagen","cost":"$7704.44","is_selling":false},
    {"id":19,"first_name":"Leora","last_name":"Hewlings","email":"lhewlingsi@paypal.com","gender":"Female","car":"Chariot","car_year":1992,"ip_address":"190.149.189.170","company":"Mitsubishi","cost":"$9322.29","is_selling":false},
    {"id":20,"first_name":"Lynn","last_name":"Haker","email":"lhakerj@soup.io","gender":"Male","car":"Camry","car_year":1996,"ip_address":"92.117.106.14","company":"Toyota","cost":"$5072.21","is_selling":true},
    {"id":21,"first_name":"Fidelio","last_name":"McCaw","email":"fmccawk@weather.com","gender":"Male","car":"C70","car_year":1998,"ip_address":"15.247.66.218","company":"Volvo","cost":"$1126.55","is_selling":true},
    {"id":22,"first_name":"Pegeen","last_name":"Vanyashkin","email":"pvanyashkinl@phoca.cz","gender":"Female","car":"G-Class","car_year":2009,"ip_address":"51.133.156.189","company":"Mercedes-Benz","cost":"$3143.85","is_selling":false},
    {"id":23,"first_name":"Meier","last_name":"Southcott","email":"msouthcottm@intel.com","gender":"Male","car":"X5 M","car_year":2010,"ip_address":"62.41.101.19","company":"BMW","cost":"$5529.65","is_selling":false},
    {"id":24,"first_name":"Melesa","last_name":"Housecroft","email":"mhousecroftn@imageshack.us","gender":"Female","car":"RS 6","car_year":2003,"ip_address":"215.209.241.69","company":"Audi","cost":"$6323.95","is_selling":true},
    {"id":25,"first_name":"Ofelia","last_name":"Freezer","email":"ofreezero@sina.com.cn","gender":"Female","car":"Grand Caravan","car_year":2004,"ip_address":"229.202.236.211","company":"Dodge","cost":"$4810.53","is_selling":false},
    {"id":26,"first_name":"Antonino","last_name":"Mercik","email":"amercikp@goodreads.com","gender":"Male","car":"G-Series G10","car_year":1994,"ip_address":"157.148.186.194","company":"Chevrolet","cost":"$6441.23","is_selling":true},
    {"id":27,"first_name":"Alden","last_name":"Millyard","email":"amillyardq@ustream.tv","gender":"Male","car":"Bel Air","car_year":1967,"ip_address":"47.227.141.253","company":"Chevrolet","cost":"$3419.96","is_selling":true},
    {"id":28,"first_name":"Cthrine","last_name":"Swinburn","email":"cswinburnr@ihg.com","gender":"Female","car":"Envoy XL","car_year":2005,"ip_address":"80.240.10.116","company":"GMC","cost":"$9207.97","is_selling":true},
    {"id":29,"first_name":"Alick","last_name":"Fieldstone","email":"afieldstones@bandcamp.com","gender":"Male","car":"MKZ","car_year":2012,"ip_address":"181.94.0.176","company":"Lincoln","cost":"$7008.08","is_selling":true},
    {"id":30,"first_name":"Eldredge","last_name":"Brave","email":"ebravet@photobucket.com","gender":"Male","car":"Torrent","car_year":2009,"ip_address":"179.176.196.233","company":"Pontiac","cost":"$8148.39","is_selling":true},
    {"id":31,"first_name":"Gael","last_name":"Regler","email":"gregleru@seattletimes.com","gender":"Male","car":"Firebird","car_year":1985,"ip_address":"58.208.74.136","company":"Pontiac","cost":"$1624.01","is_selling":true},
    {"id":32,"first_name":"Brear","last_name":"Patis","email":"bpatisv@admin.ch","gender":"Female","car":"Aspen","car_year":2008,"ip_address":"82.232.4.215","company":"Chrysler","cost":"$4713.02","is_selling":false},
    {"id":33,"first_name":"Marlie","last_name":"Munnings","email":"mmunningsw@shop-pro.jp","gender":"Female","car":"Laser","car_year":1990,"ip_address":"39.160.78.133","company":"Plymouth","cost":"$9133.24","is_selling":true},
    {"id":34,"first_name":"Antonetta","last_name":"Shearwood","email":"ashearwoodx@apple.com","gender":"Female","car":"Volt","car_year":2011,"ip_address":"145.43.64.8","company":"Chevrolet","cost":"$3183.80","is_selling":true},
    {"id":35,"first_name":"Wade","last_name":"Dahill","email":"wdahilly@techcrunch.com","gender":"Male","car":"Town & Country","car_year":2001,"ip_address":"165.234.76.208","company":"Chrysler","cost":"$5234.49","is_selling":true},
    {"id":36,"first_name":"Ericka","last_name":"Worsfield","email":"eworsfieldz@uiuc.edu","gender":"Female","car":"Spyder","car_year":2004,"ip_address":"58.169.135.171","company":"Maserati","cost":"$6610.27","is_selling":false},
    {"id":37,"first_name":"Carly","last_name":"Scathard","email":"cscathard10@cnbc.com","gender":"Male","car":"GTO","car_year":1994,"ip_address":"142.78.194.16","company":"Mitsubishi","cost":"$8590.70","is_selling":false},
    {"id":38,"first_name":"Jecho","last_name":"Cypler","email":"jcypler11@163.com","gender":"Male","car":"Ranger","car_year":1994,"ip_address":"58.101.236.15","company":"Ford","cost":"$7724.12","is_selling":true},
    {"id":39,"first_name":"Freda","last_name":"Harbidge","email":"fharbidge12@hostgator.com","gender":"Female","car":"G","car_year":1993,"ip_address":"28.171.22.187","company":"Infiniti","cost":"$2753.28","is_selling":false},
    {"id":40,"first_name":"Hamid","last_name":"Woolf","email":"hwoolf13@cbsnews.com","gender":"Male","car":"Cougar","car_year":1970,"ip_address":"188.122.217.58","company":"Mercury","cost":"$3005.44","is_selling":true},
    {"id":41,"first_name":"Alena","last_name":"Denman","email":"adenman14@prlog.org","gender":"Female","car":"E-Class","car_year":1998,"ip_address":"226.129.241.138","company":"Mercedes-Benz","cost":"$2351.30","is_selling":false},
    {"id":42,"first_name":"Abdul","last_name":"Daymond","email":"adaymond15@pinterest.com","gender":"Male","car":"928","car_year":1994,"ip_address":"151.79.29.207","company":"Porsche","cost":"$8755.53","is_selling":false},
    {"id":43,"first_name":"Debera","last_name":"Yusupov","email":"dyusupov16@odnoklassniki.ru","gender":"Female","car":"Sephia","car_year":2000,"ip_address":"74.108.94.111","company":"Kia","cost":"$7913.47","is_selling":true},
    {"id":44,"first_name":"Jervis","last_name":"Castangia","email":"jcastangia17@businesswire.com","gender":"Male","car":"Spectra","car_year":2004,"ip_address":"9.34.10.206","company":"Kia","cost":"$4249.67","is_selling":false},
    {"id":45,"first_name":"Cinnamon","last_name":"Dudman","email":"cdudman18@pagesperso-orange.fr","gender":"Female","car":"3000GT","car_year":1992,"ip_address":"42.172.99.75","company":"Mitsubishi","cost":"$8463.39","is_selling":true},
    {"id":46,"first_name":"Sheila-kathryn","last_name":"Coxhell","email":"scoxhell19@surveymonkey.com","gender":"Female","car":"Xterra","car_year":2012,"ip_address":"206.104.57.90","company":"Nissan","cost":"$7389.98","is_selling":false},
    {"id":47,"first_name":"Cy","last_name":"Cottrell","email":"ccottrell1a@live.com","gender":"Male","car":"Regal","car_year":2004,"ip_address":"94.67.241.215","company":"Buick","cost":"$4447.57","is_selling":false},
    {"id":48,"first_name":"Morrie","last_name":"Danielsen","email":"mdanielsen1b@networkadvertising.org","gender":"Male","car":"Cayenne","car_year":2005,"ip_address":"207.35.17.247","company":"Porsche","cost":"$9948.35","is_selling":false},
    {"id":49,"first_name":"Ardyth","last_name":"Scrooby","email":"ascrooby1c@feedburner.com","gender":"Female","car":"Venza","car_year":2012,"ip_address":"188.141.138.98","company":"Toyota","cost":"$7205.65","is_selling":true},
    {"id":50,"first_name":"Rosaleen","last_name":"Ever","email":"rever1d@sourceforge.net","gender":"Female","car":"Firebird","car_year":1985,"ip_address":"62.164.212.218","company":"Pontiac","cost":"$8632.64","is_selling":false},
    {"id":51,"first_name":"Kennith","last_name":"Lindl","email":"klindl1e@mac.com","gender":"Male","car":"Civic","car_year":1990,"ip_address":"95.0.82.20","company":"Honda","cost":"$2451.85","is_selling":true},
    {"id":52,"first_name":"Louise","last_name":"Ruddiforth","email":"lruddiforth1f@addthis.com","gender":"Polygender","car":"V8","car_year":1991,"ip_address":"136.227.78.96","company":"Audi","cost":"$5252.06","is_selling":false},
    {"id":53,"first_name":"Venita","last_name":"Twitching","email":"vtwitching1g@wired.com","gender":"Female","car":"Firefly","car_year":1990,"ip_address":"96.135.46.20","company":"Pontiac","cost":"$8392.35","is_selling":false},
    {"id":54,"first_name":"Lizette","last_name":"Swithenby","email":"lswithenby1h@plala.or.jp","gender":"Female","car":"Viper","car_year":1992,"ip_address":"89.136.199.231","company":"Dodge","cost":"$3125.88","is_selling":true},
    {"id":55,"first_name":"Husein","last_name":"State","email":"hstate1i@nifty.com","gender":"Male","car":"Century","car_year":1994,"ip_address":"165.9.255.111","company":"Buick","cost":"$7137.98","is_selling":false},
    {"id":56,"first_name":"Renaldo","last_name":"Lagne","email":"rlagne1j@yellowpages.com","gender":"Non-binary","car":"Five Hundred","car_year":2005,"ip_address":"88.243.159.189","company":"Ford","cost":"$5870.52","is_selling":true},
    {"id":57,"first_name":"Raviv","last_name":"Bosworth","email":"rbosworth1k@ibm.com","gender":"Male","car":"Sable","car_year":1999,"ip_address":"250.140.109.233","company":"Mercury","cost":"$9956.74","is_selling":true},
    {"id":58,"first_name":"Anselm","last_name":"Cuschieri","email":"acuschieri1l@prnewswire.com","gender":"Male","car":"CR-V","car_year":1997,"ip_address":"49.222.153.186","company":"Honda","cost":"$5669.33","is_selling":false},
    {"id":59,"first_name":"Lorry","last_name":"Carillo","email":"lcarillo1m@alexa.com","gender":"Female","car":"Odyssey","car_year":2000,"ip_address":"138.55.144.226","company":"Honda","cost":"$3078.83","is_selling":true},
    {"id":60,"first_name":"Trula","last_name":"Casolla","email":"tcasolla1n@etsy.com","gender":"Female","car":"Galant","car_year":1999,"ip_address":"248.77.234.140","company":"Mitsubishi","cost":"$8916.25","is_selling":true},
    {"id":61,"first_name":"Philip","last_name":"Blague","email":"pblague1o@unc.edu","gender":"Male","car":"Lucerne","car_year":2008,"ip_address":"136.25.95.174","company":"Buick","cost":"$2006.58","is_selling":true},
    {"id":62,"first_name":"Rodrique","last_name":"Lebond","email":"rlebond1p@deliciousdays.com","gender":"Male","car":"Montero Sport","car_year":2003,"ip_address":"230.32.14.230","company":"Mitsubishi","cost":"$7855.34","is_selling":false},
    {"id":63,"first_name":"Orv","last_name":"Salzberg","email":"osalzberg1q@nytimes.com","gender":"Male","car":"Maxima","car_year":1990,"ip_address":"238.35.8.92","company":"Nissan","cost":"$9245.56","is_selling":false},
    {"id":64,"first_name":"Rosanne","last_name":"Millam","email":"rmillam1r@jigsy.com","gender":"Female","car":"Evora","car_year":2012,"ip_address":"239.75.204.111","company":"Lotus","cost":"$2830.43","is_selling":false},
    {"id":65,"first_name":"Kori","last_name":"Fynn","email":"kfynn1s@uiuc.edu","gender":"Female","car":"Passport","car_year":2001,"ip_address":"61.48.155.95","company":"Honda","cost":"$5294.98","is_selling":false},
    {"id":66,"first_name":"Rachelle","last_name":"Barker","email":"rbarker1t@friendfeed.com","gender":"Female","car":"Terrain","car_year":2012,"ip_address":"33.29.72.50","company":"GMC","cost":"$2466.75","is_selling":false},
    {"id":67,"first_name":"Bessie","last_name":"Gowar","email":"bgowar1u@dedecms.com","gender":"Agender","car":"S2000","car_year":2000,"ip_address":"133.107.27.234","company":"Honda","cost":"$5412.57","is_selling":false},
    {"id":68,"first_name":"Philomena","last_name":"Caren","email":"pcaren1v@ow.ly","gender":"Non-binary","car":"TT","car_year":2006,"ip_address":"159.57.128.23","company":"Audi","cost":"$6922.92","is_selling":false},
    {"id":69,"first_name":"Ana","last_name":"Stratley","email":"astratley1w@marriott.com","gender":"Female","car":"Eclipse","car_year":2008,"ip_address":"137.87.148.168","company":"Mitsubishi","cost":"$4119.37","is_selling":false},
    {"id":70,"first_name":"Huntlee","last_name":"Cadman","email":"hcadman1x@sogou.com","gender":"Male","car":"SLR McLaren","car_year":2007,"ip_address":"22.209.162.1","company":"Mercedes-Benz","cost":"$3031.03","is_selling":true},
    {"id":71,"first_name":"Elsworth","last_name":"Mewhirter","email":"emewhirter1y@nationalgeographic.com","gender":"Male","car":"Cavalier","car_year":1998,"ip_address":"17.40.65.194","company":"Chevrolet","cost":"$2256.03","is_selling":true},
    {"id":72,"first_name":"Bianca","last_name":"Hoff","email":"bhoff1z@dailymotion.com","gender":"Female","car":"TL","car_year":1999,"ip_address":"254.86.160.35","company":"Acura","cost":"$3402.63","is_selling":false},
    {"id":73,"first_name":"Clywd","last_name":"Dagleas","email":"cdagleas20@elegantthemes.com","gender":"Male","car":"Type 2","car_year":1991,"ip_address":"18.45.182.116","company":"Volkswagen","cost":"$9741.01","is_selling":false},
    {"id":74,"first_name":"Bartie","last_name":"MacAnulty","email":"bmacanulty21@liveinternet.ru","gender":"Male","car":"Exige","car_year":2011,"ip_address":"187.9.71.204","company":"Lotus","cost":"$5020.52","is_selling":true},
    {"id":75,"first_name":"Amye","last_name":"Jelks","email":"ajelks22@sciencedaily.com","gender":"Female","car":"QX","car_year":2012,"ip_address":"253.72.102.126","company":"Infiniti","cost":"$2964.50","is_selling":true},
    {"id":76,"first_name":"Donelle","last_name":"Gore","email":"dgore23@t.co","gender":"Female","car":"2500","car_year":1993,"ip_address":"116.217.180.100","company":"GMC","cost":"$7798.98","is_selling":true},
    {"id":77,"first_name":"Domingo","last_name":"Belcher","email":"dbelcher24@about.me","gender":"Male","car":"5 Series","car_year":2001,"ip_address":"136.169.98.235","company":"BMW","cost":"$7840.53","is_selling":false},
    {"id":78,"first_name":"Gaspar","last_name":"Nicolson","email":"gnicolson25@google.com.hk","gender":"Male","car":"Altima","car_year":1996,"ip_address":"15.148.216.206","company":"Nissan","cost":"$6711.49","is_selling":false},
    {"id":79,"first_name":"Redford","last_name":"Linforth","email":"rlinforth26@thetimes.co.uk","gender":"Male","car":"F250","car_year":1994,"ip_address":"220.149.21.33","company":"Ford","cost":"$5589.96","is_selling":false},
    {"id":80,"first_name":"Arlana","last_name":"Dryden","email":"adryden27@simplemachines.org","gender":"Female","car":"Express 2500","car_year":2009,"ip_address":"245.58.125.241","company":"Chevrolet","cost":"$6531.74","is_selling":true},
    {"id":81,"first_name":"Reuben","last_name":"Harbard","email":"rharbard28@seattletimes.com","gender":"Male","car":"Charger","car_year":2012,"ip_address":"199.249.93.221","company":"Dodge","cost":"$3039.84","is_selling":false},
    {"id":82,"first_name":"Willard","last_name":"Jordi","email":"wjordi29@sciencedirect.com","gender":"Male","car":"Sportvan G30","car_year":1995,"ip_address":"233.137.63.85","company":"Chevrolet","cost":"$5542.64","is_selling":false},
    {"id":83,"first_name":"Alasdair","last_name":"Reburn","email":"areburn2a@webs.com","gender":"Male","car":"200","car_year":2012,"ip_address":"62.49.66.250","company":"Chrysler","cost":"$8962.35","is_selling":false},
    {"id":84,"first_name":"Drucy","last_name":"Paute","email":"dpaute2b@goodreads.com","gender":"Female","car":"GT-R","car_year":2013,"ip_address":"120.192.248.153","company":"Nissan","cost":"$1099.06","is_selling":false},
    {"id":85,"first_name":"Pepe","last_name":"Laidlow","email":"plaidlow2c@mozilla.com","gender":"Male","car":"Camaro","car_year":1972,"ip_address":"165.45.222.214","company":"Chevrolet","cost":"$3878.33","is_selling":false},
    {"id":86,"first_name":"Krissy","last_name":"Sicely","email":"ksicely2d@mozilla.com","gender":"Female","car":"Impala","car_year":1995,"ip_address":"192.116.115.39","company":"Chevrolet","cost":"$3040.99","is_selling":false},
    {"id":87,"first_name":"Emeline","last_name":"Stag","email":"estag2e@sakura.ne.jp","gender":"Female","car":"MX-6","car_year":1991,"ip_address":"94.110.184.172","company":"Mazda","cost":"$8429.05","is_selling":true},
    {"id":88,"first_name":"Gipsy","last_name":"Ayerst","email":"gayerst2f@cisco.com","gender":"Female","car":"S6","car_year":2007,"ip_address":"47.174.244.2","company":"Audi","cost":"$4945.29","is_selling":false},
    {"id":89,"first_name":"Keefe","last_name":"Savine","email":"ksavine2g@geocities.com","gender":"Male","car":"Malibu","car_year":2011,"ip_address":"12.155.67.243","company":"Chevrolet","cost":"$9684.23","is_selling":true},
    {"id":90,"first_name":"Feliks","last_name":"Lorenzini","email":"florenzini2h@wikimedia.org","gender":"Male","car":"F-Series","car_year":1994,"ip_address":"199.141.185.234","company":"Ford","cost":"$2910.92","is_selling":false},
    {"id":91,"first_name":"Kermy","last_name":"Cockerham","email":"kcockerham2i@ed.gov","gender":"Male","car":"F150","car_year":2009,"ip_address":"128.24.110.250","company":"Ford","cost":"$9752.29","is_selling":true},
    {"id":92,"first_name":"Skylar","last_name":"Castellino","email":"scastellino2j@java.com","gender":"Male","car":"Amanti","car_year":2009,"ip_address":"136.115.114.134","company":"Kia","cost":"$8671.87","is_selling":false},
    {"id":93,"first_name":"Nessie","last_name":"Shafto","email":"nshafto2k@godaddy.com","gender":"Female","car":"QX56","car_year":2007,"ip_address":"50.214.145.54","company":"Infiniti","cost":"$7451.55","is_selling":true},
    {"id":94,"first_name":"Stephana","last_name":"Rhodes","email":"srhodes2l@uol.com.br","gender":"Female","car":"RL","car_year":1998,"ip_address":"48.176.241.74","company":"Acura","cost":"$6381.37","is_selling":false},
    {"id":95,"first_name":"Shamus","last_name":"McGeady","email":"smcgeady2m@seattletimes.com","gender":"Male","car":"Savana 2500","car_year":1996,"ip_address":"250.4.160.190","company":"GMC","cost":"$2342.74","is_selling":true},
    {"id":96,"first_name":"Flore","last_name":"Rutledge","email":"frutledge2n@pinterest.com","gender":"Female","car":"Boxster","car_year":1997,"ip_address":"101.68.205.184","company":"Porsche","cost":"$9974.91","is_selling":true},
    {"id":97,"first_name":"Susannah","last_name":"Gerraty","email":"sgerraty2o@dyndns.org","gender":"Female","car":"Ram Van 3500","car_year":1998,"ip_address":"50.58.15.138","company":"Dodge","cost":"$1140.55","is_selling":true},
    {"id":98,"first_name":"Cirilo","last_name":"McGreary","email":"cmcgreary2p@upenn.edu","gender":"Male","car":"500SEC","car_year":1993,"ip_address":"244.179.247.196","company":"Mercedes-Benz","cost":"$2331.63","is_selling":false},
    {"id":99,"first_name":"Humfrey","last_name":"Oxenbury","email":"hoxenbury2q@who.int","gender":"Male","car":"Odyssey","car_year":2012,"ip_address":"36.123.4.111","company":"Honda","cost":"$4906.33","is_selling":true},
    {"id":100,"first_name":"Willy","last_name":"Kliemke","email":"wkliemke2r@japanpost.jp","gender":"Male","car":"Lumina","car_year":1994,"ip_address":"127.57.163.76","company":"Chevrolet","cost":"$4989.92","is_selling":true},
    {"id":101,"first_name":"Berton","last_name":"Cashley","email":"bcashley2s@themeforest.net","gender":"Male","car":"458 Italia","car_year":2011,"ip_address":"137.131.228.193","company":"Ferrari","cost":"$3953.48","is_selling":false},
    {"id":102,"first_name":"Kris","last_name":"Arnaud","email":"karnaud2t@nytimes.com","gender":"Male","car":"V70","car_year":1998,"ip_address":"19.116.200.145","company":"Volvo","cost":"$3345.00","is_selling":false},
    {"id":103,"first_name":"Gradeigh","last_name":"Sedworth","email":"gsedworth2u@cargocollective.com","gender":"Male","car":"5000CS","car_year":1988,"ip_address":"151.195.123.47","company":"Audi","cost":"$9442.65","is_selling":false},
    {"id":104,"first_name":"Terrye","last_name":"Brito","email":"tbrito2v@ucsd.edu","gender":"Female","car":"MDX","car_year":2010,"ip_address":"3.62.156.183","company":"Acura","cost":"$6210.41","is_selling":true},
    {"id":105,"first_name":"Benedikta","last_name":"Schaffler","email":"bschaffler2w@homestead.com","gender":"Female","car":"Elantra","car_year":2001,"ip_address":"218.112.103.180","company":"Hyundai","cost":"$4125.95","is_selling":false},
    {"id":106,"first_name":"Saba","last_name":"Scrowby","email":"sscrowby2x@oracle.com","gender":"Female","car":"Riviera","car_year":1986,"ip_address":"34.72.81.154","company":"Buick","cost":"$7147.25","is_selling":true},
    {"id":107,"first_name":"Cecilia","last_name":"Duiged","email":"cduiged2y@w3.org","gender":"Female","car":"XC90","car_year":2007,"ip_address":"203.178.50.243","company":"Volvo","cost":"$7389.17","is_selling":false},
    {"id":108,"first_name":"Chev","last_name":"Iacopetti","email":"ciacopetti2z@shutterfly.com","gender":"Male","car":"Monte Carlo","car_year":1973,"ip_address":"209.113.222.207","company":"Chevrolet","cost":"$8212.76","is_selling":true},
    {"id":109,"first_name":"Aldo","last_name":"Adamowicz","email":"aadamowicz30@shop-pro.jp","gender":"Male","car":"300C","car_year":2005,"ip_address":"190.16.57.92","company":"Chrysler","cost":"$8155.48","is_selling":true},
    {"id":110,"first_name":"Davy","last_name":"Northage","email":"dnorthage31@canalblog.com","gender":"Genderfluid","car":"Suburban 1500","car_year":1995,"ip_address":"108.95.29.70","company":"GMC","cost":"$1171.81","is_selling":false},
    {"id":111,"first_name":"Ellerey","last_name":"Furneaux","email":"efurneaux32@discuz.net","gender":"Agender","car":"LTD Crown Victoria","car_year":1989,"ip_address":"252.201.158.125","company":"Ford","cost":"$1556.59","is_selling":false},
    {"id":112,"first_name":"Gael","last_name":"Vockings","email":"gvockings33@usnews.com","gender":"Male","car":"Galant","car_year":1994,"ip_address":"191.163.237.225","company":"Mitsubishi","cost":"$8503.75","is_selling":false},
    {"id":113,"first_name":"Elka","last_name":"Mardoll","email":"emardoll34@stumbleupon.com","gender":"Female","car":"1500","car_year":1998,"ip_address":"28.27.173.177","company":"GMC","cost":"$2982.30","is_selling":false},
    {"id":114,"first_name":"Dawn","last_name":"Honig","email":"dhonig35@flavors.me","gender":"Female","car":"Accord","car_year":1995,"ip_address":"223.63.163.56","company":"Honda","cost":"$4301.82","is_selling":true},
    {"id":115,"first_name":"Calhoun","last_name":"Mabon","email":"cmabon36@desdev.cn","gender":"Male","car":"Rio","car_year":2004,"ip_address":"16.123.200.96","company":"Kia","cost":"$5167.23","is_selling":false},
    {"id":116,"first_name":"Ignacius","last_name":"Danielski","email":"idanielski37@theguardian.com","gender":"Male","car":"Odyssey","car_year":2007,"ip_address":"250.127.236.161","company":"Honda","cost":"$9120.71","is_selling":false},
    {"id":117,"first_name":"Celestia","last_name":"Goretti","email":"cgoretti38@statcounter.com","gender":"Female","car":"Discovery","car_year":2004,"ip_address":"74.88.239.113","company":"Land Rover","cost":"$5208.15","is_selling":false},
    {"id":118,"first_name":"Gabbie","last_name":"Stainbridge","email":"gstainbridge39@blinklist.com","gender":"Female","car":"Grand Prix","car_year":1974,"ip_address":"172.53.59.186","company":"Pontiac","cost":"$3417.53","is_selling":true},
    {"id":119,"first_name":"Lynna","last_name":"Brandolini","email":"lbrandolini3a@nih.gov","gender":"Female","car":"DeVille","car_year":1992,"ip_address":"20.55.253.175","company":"Cadillac","cost":"$8288.33","is_selling":false},
    {"id":120,"first_name":"Salomi","last_name":"Danilevich","email":"sdanilevich3b@ebay.com","gender":"Female","car":"Raider","car_year":2009,"ip_address":"245.252.39.179","company":"Mitsubishi","cost":"$9520.80","is_selling":false},
    {"id":121,"first_name":"Jessica","last_name":"Everill","email":"jeverill3c@rakuten.co.jp","gender":"Female","car":"Fifth Ave","car_year":1993,"ip_address":"191.120.59.248","company":"Chrysler","cost":"$3076.10","is_selling":false},
    {"id":122,"first_name":"Milo","last_name":"Meneghi","email":"mmeneghi3d@networkadvertising.org","gender":"Polygender","car":"Marauder","car_year":2003,"ip_address":"176.10.127.105","company":"Mercury","cost":"$1507.86","is_selling":false},
    {"id":123,"first_name":"Kalli","last_name":"Gabbitis","email":"kgabbitis3e@yellowpages.com","gender":"Genderqueer","car":"Tacoma","car_year":2006,"ip_address":"48.251.91.150","company":"Toyota","cost":"$7048.99","is_selling":false},
    {"id":124,"first_name":"Jeniffer","last_name":"Leeming","email":"jleeming3f@yahoo.co.jp","gender":"Female","car":"Ram Van 2500","car_year":1997,"ip_address":"217.14.245.234","company":"Dodge","cost":"$6622.52","is_selling":true},
    {"id":125,"first_name":"Jennee","last_name":"Rathborne","email":"jrathborne3g@over-blog.com","gender":"Female","car":"GS","car_year":2006,"ip_address":"3.254.25.199","company":"Lexus","cost":"$2391.28","is_selling":true},
    {"id":126,"first_name":"Godfree","last_name":"Kiddye","email":"gkiddye3h@facebook.com","gender":"Male","car":"Silverado 3500","car_year":2006,"ip_address":"165.28.30.210","company":"Chevrolet","cost":"$7746.97","is_selling":false},
    {"id":127,"first_name":"Hollis","last_name":"Haveline","email":"hhaveline3i@oakley.com","gender":"Male","car":"CLK-Class","car_year":2009,"ip_address":"10.60.165.87","company":"Mercedes-Benz","cost":"$9876.31","is_selling":false},
    {"id":128,"first_name":"Dagmar","last_name":"Blevin","email":"dblevin3j@kickstarter.com","gender":"Female","car":"Miata MX-5","car_year":2001,"ip_address":"219.36.183.61","company":"Mazda","cost":"$1195.01","is_selling":true},
    {"id":129,"first_name":"Kingston","last_name":"Gallymore","email":"kgallymore3k@odnoklassniki.ru","gender":"Male","car":"Clubman","car_year":2008,"ip_address":"102.68.159.7","company":"MINI","cost":"$3377.61","is_selling":false},
    {"id":130,"first_name":"Ofilia","last_name":"Dennison","email":"odennison3l@naver.com","gender":"Female","car":"Taurus X","car_year":2008,"ip_address":"129.98.199.248","company":"Ford","cost":"$8674.81","is_selling":false},
    {"id":131,"first_name":"Yulma","last_name":"English","email":"yenglish3m@seesaa.net","gender":"Male","car":"600SEC","car_year":1993,"ip_address":"214.184.13.222","company":"Mercedes-Benz","cost":"$1945.62","is_selling":true},
    {"id":132,"first_name":"Marisa","last_name":"Sturgess","email":"msturgess3n@google.com.au","gender":"Female","car":"LR3","car_year":2006,"ip_address":"213.233.217.255","company":"Land Rover","cost":"$9572.33","is_selling":false},
    {"id":133,"first_name":"Maurizio","last_name":"Swadon","email":"mswadon3o@indiegogo.com","gender":"Male","car":"Esteem","car_year":1995,"ip_address":"113.27.245.79","company":"Suzuki","cost":"$7142.85","is_selling":false},
    {"id":134,"first_name":"Ardelia","last_name":"Emmatt","email":"aemmatt3p@cnet.com","gender":"Female","car":"Econoline E150","car_year":2001,"ip_address":"78.104.168.76","company":"Ford","cost":"$6983.33","is_selling":true},
    {"id":135,"first_name":"Lian","last_name":"Fomichkin","email":"lfomichkin3q@alibaba.com","gender":"Female","car":"Millenia","car_year":1998,"ip_address":"22.77.236.204","company":"Mazda","cost":"$4290.71","is_selling":true},
    {"id":136,"first_name":"Steffen","last_name":"Khristyukhin","email":"skhristyukhin3r@pinterest.com","gender":"Male","car":"L300","car_year":1987,"ip_address":"106.186.26.149","company":"Mitsubishi","cost":"$5955.98","is_selling":false},
    {"id":137,"first_name":"Alick","last_name":"Lechelle","email":"alechelle3s@nps.gov","gender":"Male","car":"New Beetle","car_year":2008,"ip_address":"61.67.53.182","company":"Volkswagen","cost":"$4386.19","is_selling":true},
    {"id":138,"first_name":"Milty","last_name":"McCuish","email":"mmccuish3t@disqus.com","gender":"Male","car":"Santa Fe","car_year":2009,"ip_address":"200.162.210.148","company":"Hyundai","cost":"$9158.41","is_selling":false},
    {"id":139,"first_name":"Clayborn","last_name":"Langhor","email":"clanghor3u@dmoz.org","gender":"Polygender","car":"M-Class","car_year":2009,"ip_address":"129.106.255.115","company":"Mercedes-Benz","cost":"$4859.18","is_selling":true},
    {"id":140,"first_name":"Keane","last_name":"Gebbie","email":"kgebbie3v@ed.gov","gender":"Polygender","car":"Special","car_year":1962,"ip_address":"58.69.250.214","company":"Buick","cost":"$3207.03","is_selling":false},
    {"id":141,"first_name":"Madel","last_name":"Tooze","email":"mtooze3w@soundcloud.com","gender":"Female","car":"Lancer","car_year":2009,"ip_address":"151.30.161.229","company":"Mitsubishi","cost":"$2268.64","is_selling":false},
    {"id":142,"first_name":"Keenan","last_name":"Gritton","email":"kgritton3x@npr.org","gender":"Male","car":"Spyder","car_year":2002,"ip_address":"101.164.58.162","company":"Maserati","cost":"$1836.62","is_selling":false},
    {"id":143,"first_name":"Jannel","last_name":"O'Hern","email":"johern3y@fda.gov","gender":"Female","car":"Frontier","car_year":1998,"ip_address":"19.126.174.165","company":"Nissan","cost":"$5103.44","is_selling":false},
    {"id":144,"first_name":"Eunice","last_name":"Wille","email":"ewille3z@nature.com","gender":"Female","car":"Voyager","car_year":1999,"ip_address":"169.39.180.85","company":"Plymouth","cost":"$8805.12","is_selling":false},
    {"id":145,"first_name":"Di","last_name":"Sommerly","email":"dsommerly40@naver.com","gender":"Female","car":"Ranger","car_year":2004,"ip_address":"150.221.205.182","company":"Ford","cost":"$8157.23","is_selling":false},
    {"id":146,"first_name":"Eleni","last_name":"Kienl","email":"ekienl41@homestead.com","gender":"Female","car":"Durango","car_year":1998,"ip_address":"223.68.72.96","company":"Dodge","cost":"$1653.29","is_selling":true},
    {"id":147,"first_name":"Guss","last_name":"Blandamere","email":"gblandamere42@constantcontact.com","gender":"Bigender","car":"Regal","car_year":1990,"ip_address":"243.178.253.29","company":"Buick","cost":"$7291.41","is_selling":false},
    {"id":148,"first_name":"Minnnie","last_name":"Southworth","email":"msouthworth43@arizona.edu","gender":"Genderfluid","car":"Beretta","car_year":1996,"ip_address":"84.90.54.189","company":"Chevrolet","cost":"$1977.87","is_selling":false},
    {"id":149,"first_name":"Shelton","last_name":"Reiglar","email":"sreiglar44@ucsd.edu","gender":"Male","car":"XK","car_year":2010,"ip_address":"167.215.127.0","company":"Jaguar","cost":"$9711.67","is_selling":false},
    {"id":150,"first_name":"Welsh","last_name":"Orsay","email":"worsay45@earthlink.net","gender":"Genderqueer","car":"Elantra","car_year":1996,"ip_address":"109.168.63.46","company":"Hyundai","cost":"$1010.31","is_selling":false},
    {"id":151,"first_name":"Agnola","last_name":"Verduin","email":"averduin46@mayoclinic.com","gender":"Female","car":"NSX","car_year":1997,"ip_address":"175.143.126.178","company":"Acura","cost":"$1890.17","is_selling":false},
    {"id":152,"first_name":"Bryant","last_name":"Mahody","email":"bmahody47@va.gov","gender":"Male","car":"Freelander","car_year":2010,"ip_address":"158.1.148.44","company":"Land Rover","cost":"$9492.70","is_selling":true},
    {"id":153,"first_name":"Quintus","last_name":"Lodge","email":"qlodge48@theguardian.com","gender":"Male","car":"S80","car_year":2007,"ip_address":"176.91.62.149","company":"Volvo","cost":"$7973.77","is_selling":false},
    {"id":154,"first_name":"Pernell","last_name":"Robertz","email":"probertz49@comsenz.com","gender":"Male","car":"Escort","car_year":1984,"ip_address":"223.63.233.178","company":"Ford","cost":"$6741.00","is_selling":true},
    {"id":155,"first_name":"Dyanna","last_name":"Fullman","email":"dfullman4a@disqus.com","gender":"Female","car":"Silhouette","car_year":2000,"ip_address":"202.223.12.88","company":"Oldsmobile","cost":"$1532.77","is_selling":false},
    {"id":156,"first_name":"Traver","last_name":"Bradbeer","email":"tbradbeer4b@purevolume.com","gender":"Male","car":"1500 Club Coupe","car_year":1993,"ip_address":"222.208.104.62","company":"GMC","cost":"$2752.56","is_selling":false},
    {"id":157,"first_name":"Gerard","last_name":"Karpenko","email":"gkarpenko4c@whitehouse.gov","gender":"Male","car":"Thunderbird","car_year":1977,"ip_address":"176.214.201.156","company":"Ford","cost":"$8731.62","is_selling":false},
    {"id":158,"first_name":"Kimmie","last_name":"Balle","email":"kballe4d@jiathis.com","gender":"Genderfluid","car":"626","car_year":1995,"ip_address":"90.47.246.198","company":"Mazda","cost":"$7836.13","is_selling":false},
    {"id":159,"first_name":"Aryn","last_name":"Bedingfield","email":"abedingfield4e@canalblog.com","gender":"Female","car":"Hemisfear","car_year":2007,"ip_address":"80.45.191.8","company":"Foose","cost":"$9737.56","is_selling":false},
    {"id":160,"first_name":"Sharona","last_name":"Arents","email":"sarents4f@prweb.com","gender":"Female","car":"H1","car_year":2004,"ip_address":"115.199.105.206","company":"Hummer","cost":"$1189.15","is_selling":true},
    {"id":161,"first_name":"Perri","last_name":"Hayden","email":"phayden4g@devhub.com","gender":"Female","car":"Town Car","car_year":1984,"ip_address":"92.147.176.169","company":"Lincoln","cost":"$1727.78","is_selling":true},
    {"id":162,"first_name":"Doti","last_name":"Baber","email":"dbaber4h@aboutads.info","gender":"Female","car":"Express 2500","car_year":2007,"ip_address":"24.212.180.247","company":"Chevrolet","cost":"$3034.52","is_selling":true},
    {"id":163,"first_name":"Natassia","last_name":"Frickey","email":"nfrickey4i@ameblo.jp","gender":"Female","car":"Express 1500","car_year":1997,"ip_address":"218.180.145.126","company":"Chevrolet","cost":"$6305.12","is_selling":true},
    {"id":164,"first_name":"Antonino","last_name":"Pepperrall","email":"apepperrall4j@prweb.com","gender":"Male","car":"Sierra 2500","car_year":2012,"ip_address":"90.138.99.204","company":"GMC","cost":"$3720.22","is_selling":false},
    {"id":165,"first_name":"Ingmar","last_name":"Hargie","email":"ihargie4k@princeton.edu","gender":"Male","car":"F250","car_year":2002,"ip_address":"24.48.114.157","company":"Ford","cost":"$5600.24","is_selling":true},
    {"id":166,"first_name":"Roda","last_name":"Sehorsch","email":"rsehorsch4l@jugem.jp","gender":"Female","car":"C8 Spyder Wide Body","car_year":2004,"ip_address":"173.198.234.210","company":"Spyker","cost":"$1625.02","is_selling":true},
    {"id":167,"first_name":"Lora","last_name":"Stait","email":"lstait4m@weebly.com","gender":"Female","car":"Ion","car_year":2005,"ip_address":"147.34.68.195","company":"Saturn","cost":"$4026.65","is_selling":false},
    {"id":168,"first_name":"Grenville","last_name":"Terbrug","email":"gterbrug4n@zimbio.com","gender":"Male","car":"Tiburon","car_year":2003,"ip_address":"239.11.207.111","company":"Hyundai","cost":"$9884.17","is_selling":true},
    {"id":169,"first_name":"Emelda","last_name":"Dumbelton","email":"edumbelton4o@wisc.edu","gender":"Female","car":"Explorer","car_year":1994,"ip_address":"135.56.246.236","company":"Ford","cost":"$8309.48","is_selling":false},
    {"id":170,"first_name":"Katusha","last_name":"Wellen","email":"kwellen4p@chron.com","gender":"Female","car":"M6","car_year":2006,"ip_address":"0.61.64.239","company":"BMW","cost":"$4032.66","is_selling":true},
    {"id":171,"first_name":"Will","last_name":"Nelsen","email":"wnelsen4q@ucoz.com","gender":"Male","car":"Th!nk","car_year":2002,"ip_address":"71.3.155.100","company":"Ford","cost":"$4299.05","is_selling":true},
    {"id":172,"first_name":"Kettie","last_name":"Ekell","email":"kekell4r@examiner.com","gender":"Female","car":"88","car_year":1996,"ip_address":"216.234.40.62","company":"Oldsmobile","cost":"$2384.83","is_selling":true},
    {"id":173,"first_name":"Lorettalorna","last_name":"Tattersall","email":"ltattersall4s@apple.com","gender":"Female","car":"ZX2","car_year":2003,"ip_address":"207.94.23.63","company":"Ford","cost":"$9200.18","is_selling":true},
    {"id":174,"first_name":"Gusella","last_name":"Renon","email":"grenon4t@livejournal.com","gender":"Non-binary","car":"Grand Cherokee","car_year":1997,"ip_address":"9.37.61.195","company":"Jeep","cost":"$1982.29","is_selling":true},
    {"id":175,"first_name":"Noak","last_name":"Maymond","email":"nmaymond4u@ustream.tv","gender":"Male","car":"SRX","car_year":2009,"ip_address":"84.144.208.227","company":"Cadillac","cost":"$6282.29","is_selling":true},
    {"id":176,"first_name":"Grazia","last_name":"le Keux","email":"glekeux4v@ezinearticles.com","gender":"Female","car":"XJ Series","car_year":1997,"ip_address":"214.249.250.103","company":"Jaguar","cost":"$4104.78","is_selling":true},
    {"id":177,"first_name":"Archie","last_name":"Katt","email":"akatt4w@globo.com","gender":"Male","car":"S4","car_year":2010,"ip_address":"138.66.68.55","company":"Audi","cost":"$8736.44","is_selling":false},
    {"id":178,"first_name":"Nickolas","last_name":"Kingston","email":"nkingston4x@deliciousdays.com","gender":"Male","car":"Cougar","car_year":1984,"ip_address":"233.197.200.117","company":"Mercury","cost":"$4554.51","is_selling":false},
    {"id":179,"first_name":"Bernete","last_name":"McCarroll","email":"bmccarroll4y@prnewswire.com","gender":"Genderqueer","car":"Fleetwood","car_year":1954,"ip_address":"152.108.2.220","company":"Cadillac","cost":"$6126.13","is_selling":true},
    {"id":180,"first_name":"Rudolfo","last_name":"Prestedge","email":"rprestedge4z@constantcontact.com","gender":"Male","car":"Mirage","car_year":2000,"ip_address":"152.218.135.41","company":"Mitsubishi","cost":"$3312.07","is_selling":false},
    {"id":181,"first_name":"Kenny","last_name":"Dybbe","email":"kdybbe50@blog.com","gender":"Male","car":"Blazer","car_year":2000,"ip_address":"56.247.114.67","company":"Chevrolet","cost":"$6611.93","is_selling":false},
    {"id":182,"first_name":"Worth","last_name":"Whannel","email":"wwhannel51@tiny.cc","gender":"Male","car":"SL-Class","car_year":1984,"ip_address":"128.205.56.149","company":"Mercedes-Benz","cost":"$2716.64","is_selling":false},
    {"id":183,"first_name":"Cly","last_name":"Jirek","email":"cjirek52@java.com","gender":"Male","car":"S4","car_year":2012,"ip_address":"253.95.214.100","company":"Audi","cost":"$5591.44","is_selling":false},
    {"id":184,"first_name":"Allistir","last_name":"Bockett","email":"abockett53@elpais.com","gender":"Male","car":"Envoy XL","car_year":2005,"ip_address":"179.217.52.5","company":"GMC","cost":"$7765.53","is_selling":false},
    {"id":185,"first_name":"Hetti","last_name":"Klagges","email":"hklagges54@psu.edu","gender":"Female","car":"Silverado 3500HD","car_year":2006,"ip_address":"15.93.0.199","company":"Chevrolet","cost":"$1041.76","is_selling":true},
    {"id":186,"first_name":"Shandeigh","last_name":"Lofts","email":"slofts55@infoseek.co.jp","gender":"Female","car":"Phaeton","car_year":2004,"ip_address":"27.20.246.227","company":"Volkswagen","cost":"$8275.11","is_selling":false},
    {"id":187,"first_name":"Kaine","last_name":"Segeswoeth","email":"ksegeswoeth56@dedecms.com","gender":"Male","car":"B2500","car_year":2001,"ip_address":"182.133.238.129","company":"Mazda","cost":"$5688.45","is_selling":false},
    {"id":188,"first_name":"Cyril","last_name":"Buck","email":"cbuck57@ox.ac.uk","gender":"Male","car":"Silhouette","car_year":2000,"ip_address":"73.210.33.246","company":"Oldsmobile","cost":"$2385.07","is_selling":true},
    {"id":189,"first_name":"Frederik","last_name":"Arnefield","email":"farnefield58@godaddy.com","gender":"Agender","car":"Cobalt","car_year":2008,"ip_address":"92.5.0.89","company":"Chevrolet","cost":"$1027.41","is_selling":false},
    {"id":190,"first_name":"Caren","last_name":"Burfield","email":"cburfield59@sun.com","gender":"Female","car":"EXP","car_year":1984,"ip_address":"101.251.103.221","company":"Ford","cost":"$1825.27","is_selling":true},
    {"id":191,"first_name":"Benetta","last_name":"Kernan","email":"bkernan5a@patch.com","gender":"Female","car":"Compass","car_year":2012,"ip_address":"121.20.4.146","company":"Jeep","cost":"$7515.28","is_selling":false},
    {"id":192,"first_name":"Ania","last_name":"Gebhardt","email":"agebhardt5b@msu.edu","gender":"Female","car":"Insight","car_year":2004,"ip_address":"191.168.178.176","company":"Honda","cost":"$2861.37","is_selling":true},
    {"id":193,"first_name":"Greg","last_name":"Bollam","email":"gbollam5c@google.com","gender":"Male","car":"BRZ","car_year":2013,"ip_address":"143.21.214.243","company":"Subaru","cost":"$3907.24","is_selling":true},
    {"id":194,"first_name":"Armand","last_name":"Limeburner","email":"alimeburner5d@admin.ch","gender":"Male","car":"MX-5","car_year":1990,"ip_address":"249.175.5.186","company":"Mazda","cost":"$9286.31","is_selling":true},
    {"id":195,"first_name":"Daryl","last_name":"Wildey","email":"dwildey5e@miibeian.gov.cn","gender":"Male","car":"XT","car_year":1985,"ip_address":"246.251.222.234","company":"Subaru","cost":"$2661.03","is_selling":true},
    {"id":196,"first_name":"Miguel","last_name":"Felten","email":"mfelten5f@newyorker.com","gender":"Male","car":"Tracker","car_year":2002,"ip_address":"237.204.73.44","company":"Chevrolet","cost":"$1982.03","is_selling":false},
    {"id":197,"first_name":"Emelia","last_name":"Perrett","email":"eperrett5g@youtube.com","gender":"Female","car":"Vandura 3500","car_year":1992,"ip_address":"147.173.243.36","company":"GMC","cost":"$6293.81","is_selling":true},
    {"id":198,"first_name":"Andriana","last_name":"Trythall","email":"atrythall5h@toplist.cz","gender":"Female","car":"Navajo","car_year":1991,"ip_address":"125.43.190.127","company":"Mazda","cost":"$6992.30","is_selling":false},
    {"id":199,"first_name":"Emalia","last_name":"Renforth","email":"erenforth5i@howstuffworks.com","gender":"Female","car":"Sienna","car_year":2000,"ip_address":"251.182.133.94","company":"Toyota","cost":"$9203.24","is_selling":false},
    {"id":200,"first_name":"Mattie","last_name":"Denisard","email":"mdenisard5j@netvibes.com","gender":"Female","car":"Suburban","car_year":2006,"ip_address":"101.199.56.119","company":"Chevrolet","cost":"$5454.19","is_selling":true}]
    },{}],3:[function(require,module,exports){
    const { getAllDealers, getDealerById } = require("./api/dealer");
    
    const renderTable = (data) => {
      const tableBody = document.getElementById("table-body");
    
      if (!tableBody) {
        throw new Error("No table element found");
      }
      
      const rows = data.reduce(
        (acc, { id, first_name, last_name, email, gender, car, car_year, ip_address, company, cost}) =>
          acc +
          `<tr>
            <td>${id}</td>
            <td>${first_name}</td>
            <td>${last_name}</td>
            <td>${email}</td>
            <td>${gender}</td>
            <td>${car}</td>
            <td>${car_year}</td>
            <td>${ip_address}</td>
            <td>${company}</td>
            <td>${cost}</td>

        </tr>`,
        ``
      );
    
      tableBody.innerHTML = rows;
    };
    
    
   
    getAllDealers().then(({ data }) => renderTable(data));  
    
    const onSubmit = (event) => {
      event.preventDefault();
      const term = event.target.filters.value;
      const cars_brand = event.target.cars_brand.value;
      const valueTerm = event.target.input.value;
      const selling = event.target.selling.value;

      if(term === `id`) {
        getDealerById(valueTerm).then(({ data }) => renderTable(data));
      } else {
        getAllDealers(term,selling, cars_brand.toLowerCase(), valueTerm.toLowerCase()).then(({ data }) => renderTable(data));
      }
    };
    
    const onReset = () => {
      window.location.replace(window.location.pathname);
      getAllDealers().then(({ data }) => renderTable(data));
    };
    
    document.getElementById("myForm").addEventListener("submit", onSubmit);
    document.getElementById("myForm").addEventListener("reset", onReset);
    
    },{"./api/dealer":1}]},{},[3]);