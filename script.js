// Simple scroll animations
const options = {
  threshold: 0.2
};

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'none';
    }
  });
}, options);

document.querySelectorAll('.feature, .download-section').forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(50px)';
  observer.observe(el);
});