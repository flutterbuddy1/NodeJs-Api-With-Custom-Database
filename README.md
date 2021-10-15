<center>
<h1>NodeJS API with Custom Database</h1>
</center>

## Important Commands
```
npm install
npm start
```
# Api Docs
## Get Users List
### Make **Get** Request
```
http://localhost:5000/users
```

## Get Specific Users

### Make **Get** Request
```
http://localhost:5000/users/5ae47d11-1410-4184-b43f-633aba795ac4
```


## Add New User
```
http://localhost:5000/users
```
### Make **Post** Request
```
{
    "firstname":"MyName",
    "lastname":"MyLastname",
    "age":5
}
```

## Update User
```
http://localhost:5000/users/5ae47d11-1410-4184-b43f-633aba795ac4
```
### Make **Patch** Request
```
{
    "firstname":"King",
    "lastname":"Dom",
    "age":70
}
```
## Delete User
### Make **Delete** Request
```
http://localhost:5000/users/5ae47d11-1410-4184-b43f-633aba795ac4
```


## Get All Users List in Table Then Open **./app/index.html**