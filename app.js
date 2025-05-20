let hasWallet = false, hasFollowed = false, isSpinning = false;

// your COLORS & wheel setup go here (unchanged)...

// (1) Spin finished → show result, then collapse
function notifyResult(segment) {
  isSpinning = false;
  alert(`🎉 You won: ${segment.text}!`);

  // collapse the wheel
  const wrapper = document.getElementById('wheel-wrapper');
  wrapper.classList.add('collapsed');

  // if you’d rather use the separate tab instead:
  // wrapper.style.display = 'none';
  // document.getElementById('wheel-tab').style.display = 'block';
}

// (2) Allow clicking the tiny logo to re-open
document.getElementById('wheel-logo')
  .addEventListener('click', () => {
    const wrapper = document.getElementById('wheel-wrapper');
    if (wrapper.classList.contains('collapsed')) {
      wrapper.classList.remove('collapsed');
    }
  });

// (3) Or if you used the separate tab approach:
document.getElementById('wheel-tab')
  .addEventListener('click', () => {
    document.getElementById('wheel-wrapper').classList.remove('collapsed');
  });

// …the rest of your wallet/Twitter logic, spin-once handler, etc. …
