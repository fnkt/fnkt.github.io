javascript:(function() {
  var code = prompt('Enter code:');
  if (code) {
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/fnkt/fnkt.github.io@main/codes.js';
    script.onload = function() {
      if (typeof codes !== 'undefined' && codes.hasOwnProperty(code)) {
        createWindow(codes[code]);
      } else {
        alert('Invalid code');
      }
    };
    document.body.appendChild(script);
  } else {
    alert('No code entered');
  }

  function createWindow(url) {
    var windowDiv = document.createElement('div');
    windowDiv.style.position = 'fixed';
    windowDiv.style.top = '50px';
    windowDiv.style.left = '50px';
    windowDiv.style.width = '500px';
    windowDiv.style.height = '400px';
    windowDiv.style.border = '1px solid #ddd';
    windowDiv.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)';
    windowDiv.style.zIndex = '9999';
    windowDiv.style.background = '#000';
    windowDiv.style.color = '#fff';
    windowDiv.style.fontFamily = 'monospace';
    windowDiv.style.userSelect = 'none';
    windowDiv.style.overflow = 'hidden';

    var titleBar = document.createElement('div');
    titleBar.style.height = '30px';
    titleBar.style.backgroundColor = '#222';
    titleBar.style.cursor = 'move';
    titleBar.style.userSelect = 'none';

    var closeButton = document.createElement('div');
    closeButton.style.position = 'absolute';
    closeButton.style.top = '5px';
    closeButton.style.right = '5px';
    closeButton.style.width = '20px';
    closeButton.style.height = '20px';
    closeButton.style.background = 'red';
    closeButton.style.borderRadius = '50%';
    closeButton.style.textAlign = 'center';
    closeButton.style.lineHeight = '20px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.userSelect = 'none';
    closeButton.textContent = 'X';

    var iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.style.width = '100%';
    iframe.style.height = 'calc(100% - 30px)';
    iframe.style.border = 'none';

    windowDiv.appendChild(titleBar);
    titleBar.appendChild(closeButton);
    windowDiv.appendChild(iframe);
    document.body.appendChild(windowDiv);

    makeDraggable(windowDiv);
    makeResizable(windowDiv);
    closeButton.addEventListener('click', closeWindow);
    document.addEventListener('keydown', handleKeyPress);

    function makeDraggable(element) {
      var isDragging = false;
      var offsetX = 0;
      var offsetY = 0;

      titleBar.addEventListener('mousedown', startDrag);

      function startDrag(event) {
        isDragging = true;
        offsetX = event.clientX - element.offsetLeft;
        offsetY = event.clientY - element.offsetTop;
        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', stopDrag);
      }

      function drag(event) {
        if (!isDragging) return;
        element.style.left = event.clientX - offsetX + 'px';
        element.style.top = event.clientY - offsetY + 'px';
      }

      function stopDrag() {
        isDragging = false;
        document.removeEventListener('mousemove', drag);
        document.removeEventListener('mouseup', stopDrag);
      }
    }

    function makeResizable(element) {
      var resizer = document.createElement('div');
      resizer.style.position = 'absolute';
      resizer.style.width = '8px';
      resizer.style.height = '8px';
      resizer.style.bottom = '0';
      resizer.style.right = '0';
      resizer.style.cursor = 'se-resize';

      resizer.addEventListener('mousedown', startResize);

      element.appendChild(resizer);

      function startResize(event) {
        event.preventDefault();

        var startX = event.clientX;
        var startY = event.clientY;
        var startWidth = element.offsetWidth;
        var startHeight = element.offsetHeight;

        document.addEventListener('mousemove', resize);
        document.addEventListener('mouseup', stopResize);

        function resize(event) {
          var newWidth = startWidth + event.clientX - startX;
          var newHeight = startHeight + event.clientY - startY;

          element.style.width = newWidth + 'px';
          element.style.height = newHeight + 'px';
          iframe.style.height = 'calc(100% - 30px)';
        }

        function stopResize() {
          document.removeEventListener('mousemove', resize);
          document.removeEventListener('mouseup', stopResize);
        }
      }
    }

    function closeWindow() {
      document.body.removeChild(windowDiv);
    }

    function handleKeyPress(event) {
      if (event.key === 'Escape') {
        closeWindow();
      }
    }
  }
})();
