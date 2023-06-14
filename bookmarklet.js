javascript:(function() {
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
      titleBar.className = 'title-bar';
      titleBar.addEventListener('mousedown', startDragging, false);
  
      var titleText = document.createElement('span');
      titleText.innerHTML = 'Window';
      titleBar.appendChild(titleText);
  
      var closeButton = document.createElement('span');
      closeButton.className = 'close-button';
      closeButton.innerHTML = '&times;';
      closeButton.innerHTML =
      closeButton.addEventListener('click', function() {
        document.body.removeChild(windowDiv);
      });
      titleBar.appendChild(closeButton);
  
      var iframe = document.createElement('iframe');
      iframe.src = url;
      iframe.style.width = '100%';
      iframe.style.height = 'calc(100% - 30px)'; 
      iframe.style.border = 'none';
  
      windowDiv.appendChild(titleBar);
      windowDiv.appendChild(iframe);
      document.body.appendChild(windowDiv);
  
      windowDiv.style.resize = 'both';
      windowDiv.style.overflow = 'auto';
  
      windowDiv.style.position = 'fixed';
      windowDiv.style.top = '0';
      windowDiv.style.left = '0';
      windowDiv.style.width = '400px'; 
      windowDiv.style.height = '400px'; 
      windowDiv.style.cursor = 'move';
      windowDiv.style.zIndex = '9999';
  
      var isDragging = false;
      var dragStartX, dragStartY, windowStartLeft, windowStartTop;
  
      function startDragging(e) {
        isDragging = true;
        dragStartX = e.clientX;
        dragStartY = e.clientY;
        windowStartLeft = parseInt(windowDiv.style.left, 10);
        windowStartTop = parseInt(windowDiv.style.top, 10);
  
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', stopDragging);
      }
  
      function stopDragging() {
        isDragging = false;
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', stopDragging);
      }
  
      function handleMouseMove(e) {
        if (!isDragging) return;
  
        var dx = e.clientX - dragStartX;
        var dy = e.clientY - dragStartY;
  
        windowDiv.style.left = windowStartLeft + dx + 'px';
        windowDiv.style.top = windowStartTop + dy + 'px';
      }
  
      titleBar.addEventListener('mousemove', function(e) {
        if (!isDragging) return;
  
        var dx = e.clientX - dragStartX;
        var dy = e.clientY - dragStartY;
  
        titleBar.style.left = windowStartLeft + dx + 'px';
        titleBar.style.top = windowStartTop + dy + 'px';
      });
    }
  
    var code = prompt('Enter code:');
    if (code === '3197') {
      createWindow('https://slopegame.io/1.embed');
    } else if (code === '7913') {
      createWindow('https://gray-camile-20.tiiny.site/');
    } else if (code === '1234') {
      createWindow('https://www.deepl.com/translator');
    } else if (code === '1232') {
      createWindow('https://html5.gamedistribution.com/rvvASMiM/6210bcbbdc2c473bb57a827c3cddc036/index.html?gd_sdk_referrer_url=https%3A%2F%2Fwww.y8.com%2Fgames%2Fhighway_road_racing&key=y8&value=default&gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovL3d3dy55OC5jb20vZ2FtZXMvaGlnaHdheV9yb2FkX3JhY2luZyIsInBhcmVudERvbWFpbiI6Ink4LmNvbSIsInRvcERvbWFpbiI6Ink4LmNvbSIsImhhc0ltcHJlc3Npb24iOmZhbHNlLCJsb2FkZXJFbmFibGVkIjp0cnVlLCJob3N0IjoiaHRtbDUuZ2FtZWRpc3RyaWJ1dGlvbi5jb20iLCJ2ZXJzaW9uIjoiMS41LjE2In0%253D');
    } else {
      alert('Invalid code');
    }
  })();
  