import urllib.request, urllib.error, json
import json

req = urllib.request.Request(
    'http://localhost:8000/chat',
    data=b'{"message":"hello"}',
    headers={'Content-Type':'application/json'},
    method='POST'
)

with open('err.txt', 'w', encoding='utf-8') as f:
    try:
        res = urllib.request.urlopen(req)
        f.write("SUCCESS\n")
        f.write(res.read().decode())
    except urllib.error.HTTPError as e:
        body = e.read().decode()
        try:
            data = json.loads(body)
            f.write(json.dumps(data, indent=2))
        except Exception as exc:
            f.write("Raw error body:\n")
            f.write(body)
