const logout = async () => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers { 'Content-Type': 'aapplication/json' },
    });
if (response.ok) {
    document.location.replace('/login');
} else {
    alert(response.status);
}
};
document.querySelector('#logout').addEventListener('click', logout);