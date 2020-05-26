const courses = document.querySelectorAll('.course');

for(let course of courses) {
  course.addEventListener("click", function() {
    const siteId = course.getAttribute("id");
    window.location.href = `/courses/${siteId}`;
  })
}
