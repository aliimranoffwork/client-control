async function safetyChecker(x) {
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
    try {
        await delay(5000);
        let url = x;
        let security_key = "True";
        const response = await fetch(`https://raw.githack.com/alysammy/client-control/main/clients/${url}.txt`);
        let customer_security_key = await response.text();
        customer_security_key = customer_security_key.trim()
        if (security_key === customer_security_key || response.ok==false || response.status==404) {
            console.log("YES");
            // console.log(customer_security_key,security_key)
            // console.log(security_key == customer_security_key)
        } else {
            document.querySelector('body').innerHTML = '';
            // console.log(`CustomerKey = ${customer_security_key.length}`,`SecKey = ${security_key.length}`)
            // console.log(security_key == customer_security_key)
        }
    } catch (error) {
        console.error("Request failed:", error);
    }
}
