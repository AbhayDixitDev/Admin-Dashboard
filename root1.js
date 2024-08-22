function dark() {
    localStorage.setItem('mode', 'dark');
    document.documentElement.classList.add('dark-mode');
    document.documentElement.classList.remove('light-mode');
  }
  
  function light() {
    localStorage.setItem('mode', 'light');
    document.documentElement.classList.add('light-mode');
    document.documentElement.classList.remove('dark-mode');
  }
  
  function h() {
    let mode = localStorage.getItem('mode');
    if (mode === 'dark') {
      document.documentElement.classList.add('dark-mode');
      document.documentElement.classList.remove('light-mode');
    } else if (mode === 'light') {
      document.documentElement.classList.add('light-mode');
      document.documentElement.classList.remove('dark-mode');
    }
  }
  
  // Initialize the mode on page load
  h();