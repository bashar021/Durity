  // Search functionality
  const searchInput = document.getElementById('searchInput')
  const searchDropdown = document.querySelector('.search-dropdown');
  console.log(searchInput,searchDropdown)

  searchInput.addEventListener('input', () => {
    console.log('hiiii')
      if (searchInput.value !== '') {
          searchDropdown.classList.add('active');
          filterSuggestions(searchInput.value)
      } else {
          searchDropdown.classList.remove('active');
          suggestions.innerHTML = ''; // Clear previous suggestions
          searchDropdown.style.display = 'none'
      }

  });
 
  document.addEventListener('click', (e) => {
      if (!searchInput.contains(e.target) && !suggestions.contains(e.target)) {
          suggestions.style.display = 'none';
          md_suggestions.style.display = 'none';
      }
  });
  function filterSuggestions(query) {
      suggestions.innerHTML = ''; // Clear previous suggestions
      const filtered = itemNames?.filter(item => item?.toLowerCase().includes(query.toLowerCase()));
      if (filtered.length > 0) {
          suggestions.style.display = 'block'; // Show suggestions
          filtered.forEach(item => {
              const div = document.createElement('div');
              div.className = 'suggestion-item';
              div.textContent = item;
              div.onclick = () => {
                  searchInput.value = item; // Set input value to clicked suggestion
                  window.open(`/components/product.html?${itemsMapping[item]}`, '_self');
                  suggestions.style.display = 'none'; // Hide suggestions
              };
              suggestions.appendChild(div);
          });
      } else {
          suggestions.style.display = 'none'; // Hide if no suggestions
      }
  }


  // Mobile sidebar functionality
  const hamburger = document.querySelector('.hamburger');
  const sidebar = document.querySelector('.sidebar');
  const closeBtn = document.querySelector('.close-btn');

  hamburger.addEventListener('click', () => {
      sidebar.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
      sidebar.classList.remove('active');
  });

  // Mobile dropdown functionality
  const mobileDropdowns = document.querySelectorAll('.sidebar .dropdown');

  mobileDropdowns.forEach(dropdown => {
      dropdown.querySelector('a').addEventListener('click', (e) => {
          e.preventDefault();
          dropdown.classList.toggle('active');
      });
  });
