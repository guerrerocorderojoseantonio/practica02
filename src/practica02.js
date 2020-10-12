db.coches.insertOne({ marca:"ford", modelo :"mustang", kms :240000, año :1997})
db.coches.insertOne({ marca:"ferrari", modelo :"LaFerrari", kms :4000, año :2016})
db.coches.insertOne({ marca:"lamborghini", modelo :"reventon", kms :120000, año :2012})
db.coches.insertOne({ marca:"ford", modelo :"mondeo", kms :71000, año :2020})
/*Ahora vamos a pasar a realizar las consultas*/
db.coches.find({"marca": "ford"})
db.coches.find({"marca": "ferrari"}) 
db.coches.find({"marca": "bmw"}) 
db.coches.find({"marca": "lamborghini"}) 
db.coches.find({"marca": "ford", "año": 1997}) 
db.coches.find({"marca": "ford", "modelo": "mondeo"})
db.coches.find({"año":{$gt: 1997}})
//por último subiré un poco el nivel con esta
db.coches.find({"año":{$gt: 2000, $lt: 2021}})