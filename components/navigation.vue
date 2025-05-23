<template>
  <nav class="navbar">
    <div class="nav-container">
      <NuxtLink to="/" class="logo">MyBlog</NuxtLink>
      <div class="nav-links">
        <NuxtLink to="/blog" class="nav-item">Blog</NuxtLink>
        <NuxtLink to="/profile" class="nav-item">Profile</NuxtLink>
        <NuxtLink to="/login" class="nav-item">Login</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  padding: 1rem 2rem;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-weight: bold;
  font-size: 1.25rem;
  text-decoration: none;
  color: #333;
}

.nav-links {
  display: flex;
  gap: 1rem;
}

.nav-item {
  text-decoration: none;
  color: #555;
  font-weight: 500;
  transition: color 0.2s ease;
}

.nav-item:hover {
  color: #000;
}
</style>
