// ✅ DOM Elements
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.querySelector('.sidebar');
const emergencyBtn = document.getElementById('emergency-btn');
const emergencyModal = document.getElementById('emergency-modal');
const cancelEmergency = document.getElementById('cancel-emergency');
const confirmEmergency = document.getElementById('confirm-emergency');
const tripToggle = document.getElementById('trip-toggle');
const tripStatus = document.getElementById('trip-status');
const statusBadge = document.querySelector('.status-badge');
const fakeCallBtn = document.getElementById('fake-call');
const checkinBtn = document.getElementById('safety-checkin');
const shareBtn = document.getElementById('share-location');
const logoutBtn = document.getElementById('logout-btn');
const usernameEl = document.getElementById('username');
const contactsCount = document.getElementById('contacts-count');

// ✅ Simulated User State
const user = {
    name: localStorage.getItem('userEmail')?.split('@')[0] || "User",
    contacts: [
        { name: "Chioma", phone: "+2348012345678" },
        { name: "Tunde", phone: "+2348098765432" },
        { name: "Amara", phone: "+2348055512345" }
    ],
    isTripActive: false
};

// ✅ Redirect if not logged in
const isLoggedIn = localStorage.getItem('loggedIn') || sessionStorage.getItem('loggedIn');
if (!isLoggedIn) {
    window.location.href = 'login.html';
}

// ✅ Initialize Dashboard
function initDashboard() {
    if (usernameEl) {
        const capitalized = user.name.charAt(0).toUpperCase() + user.name.slice(1);
        usernameEl.textContent = capitalized;
    }
    if (contactsCount) {
        contactsCount.textContent = `${user.contacts.length} people`;
    }
}
initDashboard();

// ✅ Sidebar toggle for mobile
menuToggle?.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-open');
});

// ✅ Emergency Modal
emergencyBtn?.addEventListener('click', () => {
    emergencyModal.style.display = 'flex';
});
cancelEmergency?.addEventListener('click', () => {
    emergencyModal.style.display = 'none';
});
confirmEmergency?.addEventListener('click', () => {
    alert(`SOS alert sent to ${user.contacts.length} contacts!`);
    emergencyModal.style.display = 'none';
    emergencyBtn.innerHTML = '<i class="fas fa-check"></i> SOS SENT';
    emergencyBtn.style.backgroundColor = '#4CAF50';
    emergencyBtn.classList.remove('pulse');

    setTimeout(() => {
        emergencyBtn.innerHTML = '<i class="fas fa-bell"></i> EMERGENCY SOS';
        emergencyBtn.style.backgroundColor = '#ff69b4';
        emergencyBtn.classList.add('pulse');
    }, 3000);
});

// ✅ Trip Tracking Toggle
tripToggle?.addEventListener('click', () => {
    user.isTripActive = !user.isTripActive;

    if (user.isTripActive) {
        tripStatus.textContent = "Active - Lagos → Ikeja";
        tripToggle.textContent = "End Trip";
        statusBadge.innerHTML = '<i class="fas fa-circle"></i> <span>Trip Active</span>';
        statusBadge.classList.add('active');
        alert("Trip tracking started. Contacts notified.");
    } else {
        tripStatus.textContent = "Not Active";
        tripToggle.textContent = "Start Trip";
        statusBadge.innerHTML = '<i class="fas fa-circle"></i> <span>Protection Active</span>';
        statusBadge.classList.remove('active');
        alert("Trip ended. Contacts notified.");
    }
});

// ✅ Quick Actions
fakeCallBtn?.addEventListener('click', () => {
    alert("Incoming call from: 'Mom' 📱");
});
checkinBtn?.addEventListener('click', () => {
    alert("Safety check-in sent to contacts.");
});
shareBtn?.addEventListener('click', () => {
    alert("Live location shared.");
});

// ✅ Logout
logoutBtn?.addEventListener('click', () => {
    if (confirm("Logout?")) {
        localStorage.clear();
        sessionStorage.clear();
        window.location.href = 'login.html';
    }
});

// ✅ Close Modal if clicking outside
window.addEventListener('click', (e) => {
    if (e.target === emergencyModal) {
        emergencyModal.style.display = 'none';
    }
});
