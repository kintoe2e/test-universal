# Test Universal...

## microservice

| Setting  |  Value  |
|---|---|
| Port  |  8000 |
| Build Command | go build main.go  |
| Start Command  |  ./main |
| Language  |  Go 1.11.4 |
| SubFolder | microservice |
| Endpoints | GET /hello |
| | GET /headers|

## microservice-dockerfile

| Setting  |  Value  |
|---|---|
| Port  |  8000 |
| Language  |  Custom Dockerfile |
| SubFolder | microservice-dockerfile |
| Endpoints | GET /hello |
| | GET /headers|

## dynamic-website

| Setting  |  Value  |
|---|---|
| Port  |  8000 |
| Build Command | go build main.go  |
| Start Command  |  ./main |
| Language  |  Go 1.11.4 |
| SubFolder | dynamic-website |
| Endpoints | GET /hello |
| | GET /headers|

## static-website

| Setting  |  Value  |
|---|---|
| Build Required | false  |
| Build Command | n/a  |
| SubFolder | static-website |
| Endpoints | GET /index.html |

## static-website-build

| Setting  |  Value  |
|---|---|
| Build Required | true  |
| Language  |  Node |
| Build Command | npm install && npm run build  |
| Build Folder | build |
| SubFolder | static-website-build |
| Endpoints | GET /index.html |

### Build Args

| Key  |  Value  |
|---|---|
| USERNAME | `default:'nobody'` |

## static-website-build-dockerfile

| Setting  |  Value  |
|---|---|
| Build Required | true  |
| Language  |  Custom Dockerfile |
| Build Folder | /app/build |
| SubFolder | static-website-build-dockerfile |
| Endpoints | GET /index.html |

### Build Args

| Key  |  Value  |
|---|---|
| USERNAME | `default:'nobody'` |

## helm

| Setting  |  Value  |
|---|---|
| SubFolder | helm |
| Endpoints |  |


## dockerfile

| Setting  |  Value  |
|---|---|
| Build Required | true  |
| Build Command | n/a  |
| SubFolder | static-website-build |
| BuildFolder | build |
| Endpoints |  |


## mongodb-conn-test-job

| Setting  |  Value  |
|---|---|
| Type | Job |
| SubFolder | mongodb-conn-test-job |

### Environment Variables

| Key  |  Value  |
|---|---|
| MONGODB_CONNECTION_STRING | `default:'mongodb://'` |
| MONGODB_DATABASE_NAME | `default:'admin'` |
