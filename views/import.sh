cat index.html| grep -o "http://mosquid.com/sand/.*.js" | xargs -L1 wget
cat *.css| grep -o "/images/.*)" |xargs -I string echo 'http://mosquid.com/sand'string | sed 's/)$//'| xargs wget
