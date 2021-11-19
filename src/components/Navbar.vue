<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" tag="a" to="/">Vue 3 Chat-app</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <router-link tag="a" class="nav-item" to="/chats">
            <a class="nav-link">All Chats</a>
          </router-link>
          <router-link tag="a" class="nav-item" to="/create_chat">
            <a class="nav-link">Create Chat</a>
          </router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>