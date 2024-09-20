function updateHeading() {
    const rewardHeading = document.querySelector('.rewards-box h2');
    const rewardText = document.querySelector('.rewardsbox-text');
    if (window.innerWidth <= 356) {
      rewardHeading.textContent = 'COMP6080 Customer Rewards';
      rewardText.textContent = 'Save on GitHub Pro, Nitro more';
    } else {
      rewardHeading.textContent = 'COMP6080 Rewards';
      rewardText.textContent = 'Save on GitHub Pro, Nitro and more';
    }
  }
  
  window.addEventListener('load', updateHeading);
  window.addEventListener('resize', updateHeading);