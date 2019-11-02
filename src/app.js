const compute = function(ev) {
  ev.preventDefault();

  let form = ev.target;
  let phone = form.telephone.value.replace(/\s/g, "");
  let detector = new NetworkDetect(phone);
  let result = form.nettyResult;

  try {
    let network = detector.getNetworkName();

    if (!network) {
      return result.value = "Network not found, check the number and TRY AGAIN!!";
    }

    form.telephone.value = ''; // clear input field
    return new Toast({
      message: `${phone} belongs to the ${network} network 💚`,
      type: 'success'
    })
  } catch (e) {
    return new Toast({
      message: e.message,
      type: 'danger'
    })
  }
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('../sw.js')
      .then(function () {
        console.log("Service Worker Registered!");
      });
  });
}

console.log("Developed by Bolaji Ayodeji")
