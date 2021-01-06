import requests
import json
import os

f1 = open(os.path.abspath('.')+'\\token', "r+")
access_token = f1.readline()
f1.close()

url = "https://openapi.baidu.com/rest/2.0/tongji/report/getData"
data = {
    'access_token':access_token,
    'site_id':'15679908',
    'start_date':'20200101',
    'end_date':'20210101',
    'metrics':'pv_count',
    'method':'visit/district/a'
}

url_re = 'http://openapi.baidu.com/oauth/2.0/token'
data_re = {
    'grant_type':'refresh_token',
    "refresh_token":"122.5b35a80aa5d68dfbeeedf946e809b93e.YG_ZRRQNo7llMKE66zNfOnFiv5-ZA90Yp2ykpkD.aprm8Q",
    'client_id':'iNLx8OOxpWQplVGus73bbaLt',
    'client_secret':'77uNHWqhpvytkscoG41pRXNNoExhrAik'
}

res = requests.post(url=url,data=data)
state = json.loads(res.text).get('result')

if state is None:
    res = requests.post(url=url_re,data=data_re)
    state = json.loads(res.text)
    print(state)
    data['access_token'] = state.get('access_token')
    f1 = open(os.path.abspath('.')+'\\token', "r+")
    access_token = f1.writelines(str(state.get('access_token')))
    f1.close()

    res = requests.post(url=url,data=data)
    state = json.loads(res.text).get('result')

print(state.get('sum')[0][0])
f2 = open(os.path.abspath('.')+'\\result.json', "r+")
f2.writelines(str(state.get('sum')[0][0]))