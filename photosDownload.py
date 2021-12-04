import json
import requests
import urllib.request


url = 'https://backheironka.herokuapp.com/cameras'
k = 0
f = requests.get(url).text
data = json.loads(f)
for dat in data:
    k += 1
 
    url = dat['photo']
    download = 'https://drive.google.com/u/0/uc?id=' + str(dat['photo'].split('/d/')[1].split('/view')[0]) + '&export=download'
    logo = urllib.request.urlopen(download).read()
    name_input = "first\\" + str(k) + ".jpg"
    f = open(name_input, "wb")
    f.write(logo)
    f.close()