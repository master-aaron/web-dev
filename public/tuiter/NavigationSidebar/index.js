const NavigationSidebar = () => {
    return(`
            <div class="list-group">
            <a class="list-group-item" href="/">
                <i class="fab fa-twitter"></i></a>
                <a class="list-group-item list-group-item-action d-none d-xl-block d-xxl-block" href="home.html">
                <i class="fa fa-home"></i>
                  Home
              </a>
              <a class="list-group-item list-group-item-action d-xl-none d-xl-none" href="home.html">
                <i class="fa fa-home"></i>
              </a>
              
              <a
                href="explore.html"
                class="list-group-item list-group-item-action active d-none d-xl-block d-xxl-block"
              >
                <i class="fa fa-hashtag"></i>
                Explore
              </a>
              <a
                href="explore.html"
                class="list-group-item list-group-item-action active d-xl-none d-xl-none"
              >
                <i class="fa fa-hashtag"></i>
              </a>
              <a
                href="notifications.html"
                class="list-group-item list-group-item-action d-none d-xl-block d-xxl-block"
              >
              <i class="fa fa-bell"></i>
                Notifications
              </a>
              <a
                href="notifications.html"
                class="list-group-item list-group-item-action d-xl-none d-xl-none"
              >
              <i class="fa fa-bell"></i>
              </a>
              <a href="messages.html" class="list-group-item list-group-item-action d-none d-xl-block d-xxl-block">
                <i class="fa fa-envelope"></i>
                Messages
              </a>
              <a href="messages.html" class="list-group-item list-group-item-action d-xl-none d-xl-none">
                <i class="fa fa-envelope"></i>
              </a>
              <a href="bookmarks.html" class="list-group-item list-group-item-action d-none d-xl-block d-xxl-block">
                <i class="fa fa-bookmark"></i>
                Bookmarks
              </a>
              <a href="bookmarks.html" class="list-group-item list-group-item-action d-xl-none d-xl-none">
                <i class="fa fa-bookmark"></i>
              </a>
              <a href="lists.html" class="list-group-item list-group-item-action d-none d-xl-block d-xxl-block">
                <i class="fa fa-list"></i>
                Lists
              </a>
              <a href="lists.html" class="list-group-item list-group-item-action d-xl-none d-xl-none">
                <i class="fa fa-list"></i>
              </a>
              <a href="profile.html" class="list-group-item list-group-item-action d-none d-xl-block d-xxl-block">
                <i class="fa fa-person-booth"></i>
                Profile
              </a>
              <a href="profile.html" class="list-group-item list-group-item-action d-xl-none d-xl-none">
                <i class="fa fa-person-booth"></i>
              </a>
              <a href="more.html" class="list-group-item list-group-item-action d-none d-xl-block d-xxl-block">
                <i class="fa fa-circle-notch"></i>
                More
              </a>
              <a href="more.html" class="list-group-item list-group-item-action d-xl-none d-xl-none">
                <i class="fa fa-circle-notch"></i>
              </a></br>
                    </div>
            <div class="d-grid mt-2">
                <a href="tuit.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tuit</a>
            </div>
    `);
}
export default NavigationSidebar;
