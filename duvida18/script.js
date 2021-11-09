var campos[ document.querySelector("#data"), document.querySelector("#quantidade"), document.querySelector("#valor") ];

console.log(campos); var tbody = document.querySelector('table tbody'); document.querySelector('.form').addEventListener('submit',function(event){ event.PreventDefault(); var tr = document.createElement('tr'); campos.forEach(function(campo){ var td = document.createElement('td'); td.textContent = campo.value; tr.appendChild(td); });

var tdVolume = document.createElement('td');
tdVolume.TextContent = campos[1].value * campos[2].value;
tr.AppendChild(tdVolume);
tbody.AppendChild(tr);
});

