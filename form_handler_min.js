(()=>{const f=document.getElementById("contactForm"),r=document.getElementById("responseMsg");f.addEventListener("submit",e=>{e.preventDefault();const d=new FormData(f),b=`Name: ${d.get("name")}
Travel Agency Name: ${d.get("travels_name")}
Designation: ${d.get("designation")}
Phone Number: ${d.get("phone")}
Email: ${d.get("email")}
Address: ${d.get("address")}
Website: ${d.get("website")}
District: ${d.get("district")}
Town / Place: ${d.get("town")}`.trim(),p=new FormData();p.append("body",b);p.append("sender",d.get("email"));fetch("assets/sass/pages/sm.php",{method:"POST",body:p}).then(t=>t.text()).then(t=>{r.innerHTML=t;f.reset()}).catch(()=>{r.innerHTML="<span style='color:red;'>❌ Something went wrong. Try again.</span>"})});})();
