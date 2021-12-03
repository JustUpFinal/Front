import json
import requests
import urllib.request


url = 'https://backheironka.herokuapp.com/cameras'
k = 0
f = requests.get(url).text
data = json.loads(f)
for dat in data:
    k += 1
    print(dat['addres_name'])
    print(dat['photo'])

    url = dat['photo']
    urllib.request.urlretrieve(url, f'C:\\Users\\Егор\\Desktop\\Хакатон_Финал_2021\\сайт\\first\\{k}.jpg')