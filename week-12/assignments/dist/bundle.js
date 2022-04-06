(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
    const dealers = require("../data/mock_data.json");
    
    const getAllDealers = (term, cars_brand, valueTerm) =>
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
    module.exports=[{"id":1,"first_name":"Raquel","last_name":"Haugeh","email":"rhaugeh0@cyberchimps.com","gender":"Female","car":"Tacoma Xtra","car_year":1997,"ip_address":"38.117.30.31","company":"Toyota","cost":"$9604.26"},
    {"id":2,"first_name":"Ree","last_name":"Heskey","email":"rheskey1@meetup.com","gender":"Female","car":"Thunderbird","car_year":1994,"ip_address":"97.250.97.177","company":"Ford","cost":"$4232.73"},
    {"id":3,"first_name":"Engelbert","last_name":"Maleney","email":"emaleney2@cbsnews.com","gender":"Male","car":"TrailBlazer","car_year":2004,"ip_address":"157.165.204.75","company":"Chevrolet","cost":"$1897.42"},
    {"id":4,"first_name":"Ilise","last_name":"Donohue","email":"idonohue3@marriott.com","gender":"Female","car":"330","car_year":2006,"ip_address":"100.205.22.203","company":"BMW","cost":"$9662.58"},
    {"id":5,"first_name":"Neale","last_name":"Gordge","email":"ngordge4@eventbrite.com","gender":"Male","car":"A8","car_year":1997,"ip_address":"185.109.131.121","company":"Audi","cost":"$8515.32"},
    {"id":6,"first_name":"Keelby","last_name":"Bashford","email":"kbashford5@vkontakte.ru","gender":"Male","car":"F250","car_year":1999,"ip_address":"161.164.29.57","company":"Ford","cost":"$2259.29"},
    {"id":7,"first_name":"Rickey","last_name":"Andren","email":"randren6@vkontakte.ru","gender":"Male","car":"Truck","car_year":1991,"ip_address":"251.210.140.16","company":"Mitsubishi","cost":"$9710.53"},
    {"id":8,"first_name":"Muffin","last_name":"Selman","email":"mselman7@biblegateway.com","gender":"Male","car":"Cavalier","car_year":1996,"ip_address":"54.93.207.65","company":"Chevrolet","cost":"$6782.43"},
    {"id":9,"first_name":"Mahmoud","last_name":"Fobidge","email":"mfobidge8@ustream.tv","gender":"Male","car":"Imperial","car_year":1926,"ip_address":"105.164.56.47","company":"Chrysler","cost":"$5635.65"},
    {"id":10,"first_name":"Lainey","last_name":"Tarpey","email":"ltarpey9@jalbum.net","gender":"Female","car":"GT-R","car_year":2013,"ip_address":"53.122.125.210","company":"Nissan","cost":"$6651.31"},
    {"id":11,"first_name":"Gwenny","last_name":"Bulteel","email":"gbulteela@blog.com","gender":"Female","car":"CTS","car_year":2004,"ip_address":"203.82.106.2","company":"Cadillac","cost":"$3270.45"},
    {"id":12,"first_name":"Meggy","last_name":"Cawston","email":"mcawstonb@last.fm","gender":"Female","car":"MDX","car_year":2005,"ip_address":"235.187.46.53","company":"Acura","cost":"$5658.09"},
    {"id":13,"first_name":"Marlane","last_name":"Huegett","email":"mhuegettc@prnewswire.com","gender":"Female","car":"Skylark","car_year":1998,"ip_address":"164.117.180.160","company":"Buick","cost":"$4193.37"},
    {"id":14,"first_name":"Lorene","last_name":"Leyshon","email":"lleyshond@amazonaws.com","gender":"Genderqueer","car":"Astra","car_year":2008,"ip_address":"151.25.208.162","company":"Saturn","cost":"$4835.25"},
    {"id":15,"first_name":"Johny","last_name":"Cockshot","email":"jcockshote@godaddy.com","gender":"Male","car":"Range Rover","car_year":1986,"ip_address":"131.92.189.155","company":"Land Rover","cost":"$9891.00"},
    {"id":16,"first_name":"Rufus","last_name":"Gaffer","email":"rgafferf@gmpg.org","gender":"Genderqueer","car":"Countach","car_year":1988,"ip_address":"250.50.148.50","company":"Lamborghini","cost":"$3744.77"},
    {"id":17,"first_name":"Eartha","last_name":"Reddings","email":"ereddingsg@myspace.com","gender":"Bigender","car":"LeBaron","car_year":1993,"ip_address":"106.185.175.39","company":"Chrysler","cost":"$6889.36"},
    {"id":18,"first_name":"Nelie","last_name":"Andrea","email":"nandreah@princeton.edu","gender":"Female","car":"Fit","car_year":2011,"ip_address":"125.167.142.180","company":"Honda","cost":"$3877.55"},
    {"id":19,"first_name":"Teodora","last_name":"Hegel","email":"thegeli@wordpress.com","gender":"Polygender","car":"Mountaineer","car_year":2006,"ip_address":"183.40.227.143","company":"Mercury","cost":"$8163.02"},
    {"id":20,"first_name":"Leodora","last_name":"Mawson","email":"lmawsonj@blogspot.com","gender":"Female","car":"Miata MX-5","car_year":2004,"ip_address":"197.82.139.137","company":"Mazda","cost":"$9187.80"},
    {"id":21,"first_name":"Catharine","last_name":"Bearham","email":"cbearhamk@wsj.com","gender":"Female","car":"GLK-Class","car_year":2012,"ip_address":"136.186.247.18","company":"Mercedes-Benz","cost":"$3455.25"},
    {"id":22,"first_name":"Felicio","last_name":"Battista","email":"fbattistal@meetup.com","gender":"Male","car":"Accord Crosstour","car_year":2010,"ip_address":"5.88.100.137","company":"Honda","cost":"$1854.90"},
    {"id":23,"first_name":"Ellwood","last_name":"O' Mahony","email":"eomahonym@booking.com","gender":"Non-binary","car":"Cobalt","car_year":2010,"ip_address":"214.193.5.66","company":"Chevrolet","cost":"$3244.51"},
    {"id":24,"first_name":"Malinde","last_name":"Peagrim","email":"mpeagrimn@hp.com","gender":"Female","car":"Rocky","car_year":1992,"ip_address":"74.101.107.25","company":"Daihatsu","cost":"$6647.75"},
    {"id":25,"first_name":"Lonnie","last_name":"Rummer","email":"lrummero@marriott.com","gender":"Male","car":"C-Class","car_year":2012,"ip_address":"233.126.153.8","company":"Mercedes-Benz","cost":"$2237.28"},
    {"id":26,"first_name":"Beverlie","last_name":"Sparrowe","email":"bsparrowep@jimdo.com","gender":"Female","car":"Sierra 2500","car_year":2008,"ip_address":"174.57.210.220","company":"GMC","cost":"$2788.87"},
    {"id":27,"first_name":"Ewen","last_name":"Rangeley","email":"erangeleyq@dot.gov","gender":"Male","car":"LFA","car_year":2012,"ip_address":"10.134.81.19","company":"Lexus","cost":"$8032.99"},
    {"id":28,"first_name":"Avis","last_name":"Stonhouse","email":"astonhouser@biblegateway.com","gender":"Female","car":"Mazda6 5-Door","car_year":2006,"ip_address":"250.9.198.126","company":"Mazda","cost":"$8293.47"},
    {"id":29,"first_name":"Sean","last_name":"Bernholt","email":"sbernholts@howstuffworks.com","gender":"Male","car":"Diablo","car_year":1996,"ip_address":"182.63.51.9","company":"Lamborghini","cost":"$6748.40"},
    {"id":30,"first_name":"Cecily","last_name":"Kiley","email":"ckileyt@t-online.de","gender":"Female","car":"MX-5","car_year":1998,"ip_address":"62.43.54.183","company":"Mazda","cost":"$4699.49"},
    {"id":31,"first_name":"Rosabelle","last_name":"Bome","email":"rbomeu@aboutads.info","gender":"Female","car":"Caliber","car_year":2012,"ip_address":"189.245.39.54","company":"Dodge","cost":"$4192.37"},
    {"id":32,"first_name":"Chrisy","last_name":"Stratten","email":"cstrattenv@purevolume.com","gender":"Male","car":"F250","car_year":1998,"ip_address":"142.173.137.74","company":"Ford","cost":"$8663.07"},
    {"id":33,"first_name":"Antonia","last_name":"Brasted","email":"abrastedw@newyorker.com","gender":"Female","car":"i-Series","car_year":2008,"ip_address":"147.194.97.73","company":"Isuzu","cost":"$9988.45"},
    {"id":34,"first_name":"Nariko","last_name":"Dunnett","email":"ndunnettx@blogtalkradio.com","gender":"Female","car":"Talon","car_year":1996,"ip_address":"73.12.249.57","company":"Eagle","cost":"$1557.51"},
    {"id":35,"first_name":"Roxanna","last_name":"Hawke","email":"rhawkey@ezinearticles.com","gender":"Female","car":"Paseo","car_year":1996,"ip_address":"184.188.253.125","company":"Toyota","cost":"$8927.67"},
    {"id":36,"first_name":"Dorthy","last_name":"Daynter","email":"ddaynterz@apache.org","gender":"Female","car":"X5","car_year":2013,"ip_address":"138.168.9.95","company":"BMW","cost":"$7543.54"},
    {"id":37,"first_name":"Hobard","last_name":"Heard","email":"hheard10@cam.ac.uk","gender":"Male","car":"SL-Class","car_year":1999,"ip_address":"181.23.111.94","company":"Mercedes-Benz","cost":"$2620.86"},
    {"id":38,"first_name":"Fulton","last_name":"Coping","email":"fcoping11@msn.com","gender":"Male","car":"Tiburon","car_year":2006,"ip_address":"134.164.121.230","company":"Hyundai","cost":"$1856.48"},
    {"id":39,"first_name":"Shellie","last_name":"Pethybridge","email":"spethybridge12@51.la","gender":"Agender","car":"MKT","car_year":2011,"ip_address":"208.75.202.207","company":"Lincoln","cost":"$2285.48"},
    {"id":40,"first_name":"Barbara-anne","last_name":"Di Bartolomeo","email":"bdibartolomeo13@amazon.de","gender":"Female","car":"Reatta","car_year":1991,"ip_address":"192.137.231.41","company":"Buick","cost":"$5835.55"},
    {"id":41,"first_name":"Vassily","last_name":"Constantine","email":"vconstantine14@pinterest.com","gender":"Male","car":"Brougham","car_year":1992,"ip_address":"97.234.84.203","company":"Cadillac","cost":"$7172.07"},
    {"id":42,"first_name":"Blaire","last_name":"Netley","email":"bnetley15@ft.com","gender":"Female","car":"TL","car_year":1995,"ip_address":"22.232.62.167","company":"Acura","cost":"$8362.18"},
    {"id":43,"first_name":"Myra","last_name":"Saulter","email":"msaulter16@tinypic.com","gender":"Female","car":"Defender 90","car_year":1994,"ip_address":"152.249.124.25","company":"Land Rover","cost":"$3057.55"},
    {"id":44,"first_name":"Johnathon","last_name":"Jesse","email":"jjesse17@ovh.net","gender":"Male","car":"2500","car_year":1995,"ip_address":"172.222.36.133","company":"Chevrolet","cost":"$5043.26"},
    {"id":45,"first_name":"Elaine","last_name":"Smallpiece","email":"esmallpiece18@phoca.cz","gender":"Female","car":"B-Series","car_year":1993,"ip_address":"142.79.202.228","company":"Mazda","cost":"$6949.15"},
    {"id":46,"first_name":"Katharyn","last_name":"Gorrissen","email":"kgorrissen19@lycos.com","gender":"Female","car":"Thunderbird","car_year":1987,"ip_address":"130.85.153.104","company":"Ford","cost":"$2973.86"},
    {"id":47,"first_name":"Jacklin","last_name":"Rigney","email":"jrigney1a@1688.com","gender":"Female","car":"Vibe","car_year":2007,"ip_address":"5.139.105.66","company":"Pontiac","cost":"$2788.81"},
    {"id":48,"first_name":"Doug","last_name":"Light","email":"dlight1b@sogou.com","gender":"Male","car":"Avalanche","car_year":2009,"ip_address":"203.54.131.14","company":"Chevrolet","cost":"$3556.56"},
    {"id":49,"first_name":"Morton","last_name":"Skeermor","email":"mskeermor1c@t.co","gender":"Male","car":"Yukon","car_year":2004,"ip_address":"214.235.174.71","company":"GMC","cost":"$8588.57"},
    {"id":50,"first_name":"Meghann","last_name":"Feitosa","email":"mfeitosa1d@dyndns.org","gender":"Female","car":"Defender 90","car_year":1997,"ip_address":"238.247.222.140","company":"Land Rover","cost":"$1052.03"},
    {"id":51,"first_name":"Vivyanne","last_name":"Flintoft","email":"vflintoft1e@cmu.edu","gender":"Non-binary","car":"CLK-Class","car_year":1999,"ip_address":"151.239.26.17","company":"Mercedes-Benz","cost":"$6857.02"},
    {"id":52,"first_name":"Bord","last_name":"Eborn","email":"beborn1f@hexun.com","gender":"Male","car":"Navajo","car_year":1993,"ip_address":"5.92.234.151","company":"Mazda","cost":"$2324.36"},
    {"id":53,"first_name":"Pippa","last_name":"Hailston","email":"phailston1g@1und1.de","gender":"Female","car":"Accent","car_year":2009,"ip_address":"147.141.124.252","company":"Hyundai","cost":"$1795.79"},
    {"id":54,"first_name":"Deirdre","last_name":"Lafford","email":"dlafford1h@xinhuanet.com","gender":"Female","car":"CR-V","car_year":2004,"ip_address":"8.7.24.29","company":"Honda","cost":"$1561.32"},
    {"id":55,"first_name":"Torey","last_name":"Enefer","email":"tenefer1i@netscape.com","gender":"Female","car":"Celica","car_year":1983,"ip_address":"146.240.125.71","company":"Toyota","cost":"$1520.13"},
    {"id":56,"first_name":"Karyn","last_name":"Sauvage","email":"ksauvage1j@taobao.com","gender":"Female","car":"Durango","car_year":2001,"ip_address":"116.224.136.219","company":"Dodge","cost":"$4485.85"},
    {"id":57,"first_name":"Agatha","last_name":"Turtle","email":"aturtle1k@51.la","gender":"Female","car":"Outback","car_year":2012,"ip_address":"239.233.33.223","company":"Subaru","cost":"$2815.99"},
    {"id":58,"first_name":"Tessa","last_name":"Claremont","email":"tclaremont1l@jugem.jp","gender":"Female","car":"Mazda2","car_year":2012,"ip_address":"86.134.37.154","company":"Mazda","cost":"$8858.47"},
    {"id":59,"first_name":"Mohandas","last_name":"Willbourne","email":"mwillbourne1m@networkadvertising.org","gender":"Male","car":"MDX","car_year":2010,"ip_address":"37.148.104.118","company":"Acura","cost":"$1460.87"},
    {"id":60,"first_name":"Arlene","last_name":"Kleinber","email":"akleinber1n@newyorker.com","gender":"Female","car":"5000CS","car_year":1988,"ip_address":"94.227.82.18","company":"Audi","cost":"$9624.95"},
    {"id":61,"first_name":"Ellwood","last_name":"Tabb","email":"etabb1o@unc.edu","gender":"Male","car":"Venture","car_year":2004,"ip_address":"243.75.153.32","company":"Chevrolet","cost":"$4407.14"},
    {"id":62,"first_name":"Justus","last_name":"Stitt","email":"jstitt1p@myspace.com","gender":"Male","car":"Taurus","car_year":2003,"ip_address":"121.170.132.10","company":"Ford","cost":"$2314.83"},
    {"id":63,"first_name":"Sibbie","last_name":"Janik","email":"sjanik1q@ow.ly","gender":"Female","car":"Mountaineer","car_year":2010,"ip_address":"241.30.157.157","company":"Mercury","cost":"$3640.76"},
    {"id":64,"first_name":"Bengt","last_name":"Lifsey","email":"blifsey1r@goo.ne.jp","gender":"Male","car":"X5","car_year":2013,"ip_address":"162.138.253.199","company":"BMW","cost":"$4278.24"},
    {"id":65,"first_name":"Mariellen","last_name":"Billson","email":"mbillson1s@wordpress.com","gender":"Female","car":"Envoy XUV","car_year":2005,"ip_address":"253.65.18.92","company":"GMC","cost":"$6596.18"},
    {"id":66,"first_name":"Nappie","last_name":"Kornyshev","email":"nkornyshev1t@gravatar.com","gender":"Genderqueer","car":"Truck","car_year":1992,"ip_address":"177.202.87.106","company":"Mitsubishi","cost":"$9238.62"},
    {"id":67,"first_name":"Germaine","last_name":"Kiddy","email":"gkiddy1u@china.com.cn","gender":"Male","car":"Mazdaspeed 3","car_year":2008,"ip_address":"206.107.84.187","company":"Mazda","cost":"$2592.24"},
    {"id":68,"first_name":"Jolie","last_name":"Livesay","email":"jlivesay1v@engadget.com","gender":"Female","car":"Impreza","car_year":2011,"ip_address":"209.178.118.53","company":"Subaru","cost":"$4986.21"},
    {"id":69,"first_name":"Sergent","last_name":"Klosser","email":"sklosser1w@loc.gov","gender":"Male","car":"Celica","car_year":1994,"ip_address":"208.172.198.9","company":"Toyota","cost":"$4758.48"},
    {"id":70,"first_name":"Elisha","last_name":"Briggdale","email":"ebriggdale1x@1und1.de","gender":"Female","car":"VUE","car_year":2008,"ip_address":"164.129.110.212","company":"Saturn","cost":"$8484.39"},
    {"id":71,"first_name":"Genevra","last_name":"Stair","email":"gstair1y@ifeng.com","gender":"Female","car":"Sierra 3500","car_year":2011,"ip_address":"18.249.111.0","company":"GMC","cost":"$4883.69"},
    {"id":72,"first_name":"Xenos","last_name":"Bonsall","email":"xbonsall1z@jalbum.net","gender":"Male","car":"Magnum","car_year":2008,"ip_address":"30.101.197.48","company":"Dodge","cost":"$7763.63"},
    {"id":73,"first_name":"Drusie","last_name":"MacGorrie","email":"dmacgorrie20@jugem.jp","gender":"Female","car":"Aveo","car_year":2011,"ip_address":"223.151.150.135","company":"Chevrolet","cost":"$3152.10"},
    {"id":74,"first_name":"Brigg","last_name":"Batts","email":"bbatts21@oracle.com","gender":"Male","car":"Impala","car_year":1995,"ip_address":"181.167.50.242","company":"Chevrolet","cost":"$5579.58"},
    {"id":75,"first_name":"Betty","last_name":"Tait","email":"btait22@google.pl","gender":"Genderfluid","car":"Yukon XL 1500","car_year":2006,"ip_address":"182.44.178.66","company":"GMC","cost":"$6858.39"},
    {"id":76,"first_name":"Vi","last_name":"Tuminelli","email":"vtuminelli23@about.me","gender":"Female","car":"Tracer","car_year":1989,"ip_address":"148.223.204.104","company":"Mercury","cost":"$9777.16"},
    {"id":77,"first_name":"Brina","last_name":"Woodcock","email":"bwoodcock24@blogtalkradio.com","gender":"Bigender","car":"Compass","car_year":2010,"ip_address":"83.171.30.93","company":"Jeep","cost":"$8336.95"},
    {"id":78,"first_name":"Kitty","last_name":"Tapson","email":"ktapson25@ucla.edu","gender":"Female","car":"W123","car_year":1977,"ip_address":"169.41.85.109","company":"Mercedes-Benz","cost":"$3241.46"},
    {"id":79,"first_name":"Robby","last_name":"Newell","email":"rnewell26@dagondesign.com","gender":"Female","car":"S6","car_year":2003,"ip_address":"76.73.92.57","company":"Audi","cost":"$4109.40"},
    {"id":80,"first_name":"Oren","last_name":"Boynton","email":"oboynton27@istockphoto.com","gender":"Genderqueer","car":"Caravan","car_year":1994,"ip_address":"221.85.16.6","company":"Dodge","cost":"$5651.15"},
    {"id":81,"first_name":"Findlay","last_name":"Martyntsev","email":"fmartyntsev28@goo.ne.jp","gender":"Male","car":"X6 M","car_year":2012,"ip_address":"235.118.241.196","company":"BMW","cost":"$9153.96"},
    {"id":82,"first_name":"Rita","last_name":"Denyakin","email":"rdenyakin29@unicef.org","gender":"Agender","car":"Galant","car_year":1994,"ip_address":"190.202.230.14","company":"Mitsubishi","cost":"$9119.81"},
    {"id":83,"first_name":"Debby","last_name":"Cossam","email":"dcossam2a@chron.com","gender":"Female","car":"S80","car_year":2012,"ip_address":"3.209.86.220","company":"Volvo","cost":"$1642.78"},
    {"id":84,"first_name":"Mauricio","last_name":"Skuse","email":"mskuse2b@360.cn","gender":"Agender","car":"Laser","car_year":1985,"ip_address":"3.12.76.110","company":"Ford","cost":"$2137.46"},
    {"id":85,"first_name":"Ellwood","last_name":"Whitehorne","email":"ewhitehorne2c@squidoo.com","gender":"Male","car":"RAV4","car_year":2001,"ip_address":"223.70.235.112","company":"Toyota","cost":"$3380.13"},
    {"id":86,"first_name":"Alejandra","last_name":"Filipov","email":"afilipov2d@psu.edu","gender":"Female","car":"Alpina B7","car_year":2008,"ip_address":"6.129.255.107","company":"BMW","cost":"$5933.45"},
    {"id":87,"first_name":"Lenard","last_name":"Casement","email":"lcasement2e@miibeian.gov.cn","gender":"Male","car":"Fusion","car_year":2012,"ip_address":"3.168.78.84","company":"Ford","cost":"$4490.45"},
    {"id":88,"first_name":"Fanchette","last_name":"Samart","email":"fsamart2f@gov.uk","gender":"Female","car":"Jetta","car_year":1987,"ip_address":"59.58.218.80","company":"Volkswagen","cost":"$6993.20"},
    {"id":89,"first_name":"Clayson","last_name":"Hammond","email":"chammond2g@thetimes.co.uk","gender":"Male","car":"MKT","car_year":2012,"ip_address":"28.121.228.88","company":"Lincoln","cost":"$9890.50"},
    {"id":90,"first_name":"Iris","last_name":"Cuttles","email":"icuttles2h@hostgator.com","gender":"Female","car":"Tracer","car_year":1989,"ip_address":"209.82.165.183","company":"Mercury","cost":"$7265.18"},
    {"id":91,"first_name":"Tadio","last_name":"Rodliff","email":"trodliff2i@artisteer.com","gender":"Male","car":"Econoline E250","car_year":1994,"ip_address":"57.134.194.69","company":"Ford","cost":"$2662.02"},
    {"id":92,"first_name":"Trent","last_name":"Goodbarr","email":"tgoodbarr2j@msn.com","gender":"Male","car":"X5","car_year":2003,"ip_address":"140.113.218.103","company":"BMW","cost":"$3106.64"},
    {"id":93,"first_name":"Nicola","last_name":"Simonnet","email":"nsimonnet2k@yelp.com","gender":"Male","car":"Crossfire","car_year":2006,"ip_address":"135.97.156.79","company":"Chrysler","cost":"$2452.37"},
    {"id":94,"first_name":"Carmelina","last_name":"Shoebrook","email":"cshoebrook2l@rambler.ru","gender":"Genderfluid","car":"929","car_year":1988,"ip_address":"47.170.44.118","company":"Mazda","cost":"$6837.37"},
    {"id":95,"first_name":"Giana","last_name":"Ibert","email":"gibert2m@nymag.com","gender":"Female","car":"CT","car_year":2011,"ip_address":"79.125.213.57","company":"Lexus","cost":"$3595.67"},
    {"id":96,"first_name":"Cass","last_name":"Brayford","email":"cbrayford2n@mlb.com","gender":"Male","car":"Explorer","car_year":2010,"ip_address":"91.107.168.45","company":"Ford","cost":"$6423.54"},
    {"id":97,"first_name":"Neil","last_name":"MacCulloch","email":"nmacculloch2o@bizjournals.com","gender":"Male","car":"Echo","car_year":2002,"ip_address":"232.74.43.243","company":"Toyota","cost":"$4056.91"},
    {"id":98,"first_name":"Jarvis","last_name":"Woollin","email":"jwoollin2p@alibaba.com","gender":"Male","car":"Odyssey","car_year":2006,"ip_address":"78.2.187.32","company":"Honda","cost":"$3281.17"},
    {"id":99,"first_name":"Merwyn","last_name":"Saltmarsh","email":"msaltmarsh2q@google.pl","gender":"Male","car":"Pathfinder","car_year":2011,"ip_address":"131.73.226.163","company":"Nissan","cost":"$5583.88"},
    {"id":100,"first_name":"Carolee","last_name":"MacEnelly","email":"cmacenelly2r@digg.com","gender":"Female","car":"TT","car_year":2011,"ip_address":"3.250.89.51","company":"Audi","cost":"$8961.02"}]
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
      
      if(term === `id`) {
        getDealerById(valueTerm).then(({ data }) => renderTable(data));
      } else {
        getAllDealers(term, cars_brand.toLowerCase(), valueTerm.toLowerCase()).then(({ data }) => renderTable(data));
      }
    };
    
    const onReset = () => {
      window.location.replace(window.location.pathname);
      getAllDealers().then(({ data }) => renderTable(data));
    };
    
    document.getElementById("myForm").addEventListener("submit", onSubmit);
    document.getElementById("myForm").addEventListener("reset", onReset);
    
    },{"./api/dealer":1}]},{},[3]);