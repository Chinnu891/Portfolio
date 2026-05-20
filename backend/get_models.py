import urllib.request, json

req = urllib.request.Request("https://openrouter.ai/api/v1/models")
try:
    res = urllib.request.urlopen(req)
    data = json.loads(res.read().decode())
    free_models = [m['id'] for m in data['data'] if ':free' in m['id']]
    print("Free models:")
    for fm in free_models[:15]:
        print("-", fm)
except Exception as e:
    print(e)
