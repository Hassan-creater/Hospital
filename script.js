/* ===========================
   MedCare Hospital – script.js
   All mandatory JS requirements:
   - Arithmetic Operators (+, -, *, /, %)
   - Comparison Operators (==, ===, >, <)
   - Logical Operators (&&, ||)
   - if-else statements
   - switch case
   - loops (for, while)
   - functions
   - arrays
   =========================== */

// ============================================================
// ARRAYS: Data for departments, doctors, services, testimonials
// ============================================================

const departments = [
  { icon: "fa-solid fa-heart-pulse", name: "Cardiology", desc: "Advanced heart care including bypass surgery, angioplasty, and cardiac rehabilitation.", category: "surgical", image: "images/dept_cardiology.png" },
  { icon: "fa-solid fa-brain", name: "Neurology", desc: "Diagnosis and treatment of brain, spinal cord, and nervous system disorders.", category: "medical", image: "images/dept_neurology.png" },
  { icon: "fa-solid fa-bone", name: "Orthopedics", desc: "Bone, joint, and muscle care including joint replacement and fracture management.", category: "surgical", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop" },
  { icon: "fa-solid fa-baby", name: "Pediatrics", desc: "Comprehensive health care for infants, children, and adolescents.", category: "medical", image: "images/dept_pediatrics.png" },
  { icon: "fa-solid fa-microscope", name: "Oncology", desc: "Cancer diagnosis, chemotherapy, radiation therapy, and surgical oncology.", category: "medical", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2070&auto=format&fit=crop" },
  { icon: "fa-solid fa-person-pregnant", name: "Gynecology", desc: "Women's health, maternity care, and gynecological surgeries.", category: "surgical", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2070&auto=format&fit=crop" },
  { icon: "fa-solid fa-x-ray", name: "Radiology", desc: "MRI, CT Scan, X-Ray, ultrasound, and other diagnostic imaging.", category: "diagnostic", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop" },
  { icon: "fa-solid fa-lungs", name: "Pulmonology", desc: "Treatment of respiratory diseases including asthma, COPD, and lung infections.", category: "medical", image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=2072&auto=format&fit=crop" },
  { icon: "fa-solid fa-tooth", name: "Dentistry", desc: "General and cosmetic dental care, oral surgery, and orthodontics.", category: "surgical", image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop" },
  { icon: "fa-solid fa-eye", name: "Ophthalmology", desc: "Eye care, cataract surgery, LASIK, and treatment of retinal disorders.", category: "surgical", image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=2047&auto=format&fit=crop" },
  { icon: "fa-solid fa-flask-vial", name: "Pathology", desc: "Lab testing, blood panels, biopsies, and diagnostic pathology reports.", category: "diagnostic", image: "https://images.unsplash.com/photo-1582719202047-76d3432ee323?q=80&w=2071&auto=format&fit=crop" },
  { icon: "fa-solid fa-truck-medical", name: "Emergency", desc: "24/7 emergency services with trauma bays and critical care unit.", category: "medical", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop" }
];

const doctors = [
  { avatar: "images/doctor_1.png", name: "Dr. Ahmed Hassan", spec: "Senior Cardiologist", exp: "20 Years Experience", stars: 5 },
  { avatar: "images/doctor_2.png", name: "Dr. Sara Malik", spec: "Neurologist", exp: "15 Years Experience", stars: 5 },
  { avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop", name: "Dr. Faisal Khan", spec: "Orthopedic Surgeon", exp: "18 Years Experience", stars: 5 },
  { avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyHUAh_V4jU8ZlYp3-fezJ0RN4hhkWBy6xmw&s", name: "Dr. Ayesha Noor", spec: "Pediatrician", exp: "12 Years Experience", stars: 4 },
  { avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop", name: "Dr. Imran Raza", spec: "Oncologist", exp: "22 Years Experience", stars: 5 },
  { avatar: "data:image/jpeg;base64,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", name: "Dr. Fatima Ali", spec: "Gynecologist", exp: "16 Years Experience", stars: 5 },
  { avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop", name: "Dr. Zaid Qureshi", spec: "Emergency Medicine", exp: "10 Years Experience", stars: 4 },
  { avatar: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=2047&auto=format&fit=crop", name: "Dr. Sana Javed", spec: "Radiologist", exp: "14 Years Experience", stars: 5 }
];

const services = [
  { icon: "fa-solid fa-ambulance", name: "24/7 Emergency Care", desc: "Round-the-clock emergency services with rapid response teams and fully equipped trauma centers." },
  { icon: "fa-solid fa-microscope", name: "Advanced Diagnostics", desc: "State-of-the-art lab, imaging, and pathology services for accurate and fast diagnosis." },
  { icon: "fa-solid fa-hospital-user", name: "Inpatient & ICU", desc: "Comfortable private and semi-private rooms with a dedicated Intensive Care Unit for critical patients." },
  { icon: "fa-solid fa-syringe", name: "Vaccination Centre", desc: "Comprehensive immunization programs for children and adults including travel vaccines." },
  { icon: "fa-solid fa-dna", name: "Genetic Testing", desc: "DNA-based testing to identify hereditary conditions and guide personalized treatment plans." },
  { icon: "fa-solid fa-user-doctor", name: "Annual Health Checkup", desc: "Comprehensive health screening packages to detect issues early and keep you healthy." }
];

const testimonials = [
  { text: "The cardiology team at MedCare saved my life. The doctors were incredibly skilled and the staff was warm and caring throughout my recovery.", author: "Muhammad Usman", dept: "Cardiology Patient" },
  { text: "After years of back pain, the orthopedic team here performed a surgery that changed my life. I can now walk without any pain. Truly life-changing!", author: "Zainab Tariq", dept: "Orthopedics Patient" },
  { text: "The pediatric ward is outstanding. My daughter was treated with so much care. The doctors explained everything clearly and the nurses were wonderful.", author: "Rabia Nawaz", dept: "Pediatrics – Parent" },
  { text: "MedCare's emergency team responded incredibly fast. The doctors were professional and the facilities are world-class. I'm grateful to be alive!", author: "Khalid Mahmood", dept: "Emergency Department Patient" }
];

// Notices for ticker
const notices = [
  "🏥 New Cardiac Cath Lab now operational — advanced heart procedures available.",
  "💉 Free Vaccination Camp every Saturday 9AM–1PM in Block C.",
  "📅 OPD appointments can now be booked online — visit our Appointment section.",
  "🩺 Dr. Imran Raza (Oncology) available for consultations Mon–Wed.",
  "🚨 Emergency services operational 24/7 — dial 0800-MEDCARE for immediate assistance.",
  "🌟 MedCare awarded Best Hospital of the Year 2024 by Pakistan Medical Council."
];

// BMI history stored in array
let bmiHistory = [];
let currentTestimonial = 0; // tracks current slide index

// ============================================================
// FUNCTION: Render Departments (uses loops, arrays, comparison)
// ============================================================
function renderDepartments(filter) {
  const grid = document.getElementById("deptGrid");
  grid.innerHTML = "";

  // Loop through departments array
  for (let i = 0; i < departments.length; i++) {
    const dept = departments[i];

    // Comparison + logical operator: show all OR match filter
    if (filter === "all" || dept.category === filter) {
      const card = document.createElement("div");
      card.className = "dept-card";
      card.setAttribute("data-category", dept.category);

      // String concatenation using template literals for clarity
      card.innerHTML = `
        <div class="dept-image">
          <img src="${dept.image}" alt="${dept.name}">
          <div class="dept-icon-overlay"><i class="${dept.icon}"></i></div>
        </div>
        <div class="dept-info">
          <h3>${dept.name}</h3>
          <p>${dept.desc}</p>
          <span class="dept-badge">${dept.category}</span>
        </div>`;

      grid.appendChild(card);
    }
  }
}

// ============================================================
// FUNCTION: Filter Departments (switch case usage)
// ============================================================
function filterDepts(category) {
  // Update active button
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(function(btn) {
    btn.classList.remove("active");
  });
  event.target.classList.add("active");

  // Switch case to determine what to render
  switch (category) {
    case "surgical":
      renderDepartments("surgical");
      break;
    case "medical":
      renderDepartments("medical");
      break;
    case "diagnostic":
      renderDepartments("diagnostic");
      break;
    default:
      renderDepartments("all");
  }
}

// ============================================================
// FUNCTION: Render Doctors (loop + arithmetic)
// ============================================================
function renderDoctors() {
  const grid = document.getElementById("doctorsGrid");

  // For loop through doctors array
  for (let i = 0; i < doctors.length; i++) {
    const doc = doctors[i];

    // Build star string using a while loop
    let stars = "";
    let s = 0;
    while (s < 5) {
      // Comparison operator: if star index < rating
      stars += (s < doc.stars) ? "★" : "☆";
      s++; // arithmetic increment
    }

    const card = document.createElement("div");
    card.className = "doctor-card";
    card.innerHTML = `
      <div class="doctor-avatar">
        <img src="${doc.avatar}" alt="${doc.name}">
      </div>
      <h3>${doc.name}</h3>
      <p class="doctor-spec">${doc.spec}</p>
      <p class="doctor-exp">${doc.exp}</p>
      <div class="doctor-stars">${stars}</div>`;

    grid.appendChild(card);
  }
}

// ============================================================
// FUNCTION: Render Services
// ============================================================
function renderServices() {
  const grid = document.getElementById("servicesGrid");

  for (let i = 0; i < services.length; i++) {
    const svc = services[i];
    const card = document.createElement("div");
    card.className = "service-card";
    card.innerHTML = `
      <div class="service-icon"><i class="${svc.icon}"></i></div>
      <h3>${svc.name}</h3>
      <p>${svc.desc}</p>`;
    grid.appendChild(card);
  }
}

// ============================================================
// FUNCTION: Ticker Notices (loop + arithmetic)
// ============================================================
function setupTicker() {
  let tickerText = "";

  // Loop to join all notices with separator
  for (let i = 0; i < notices.length; i++) {
    tickerText += notices[i];

    // Arithmetic: if NOT last item, add separator
    if (i < notices.length - 1) {
      tickerText += "   •   ";
    }
  }

  document.getElementById("ticker").textContent = tickerText;
}

// ============================================================
// FUNCTION: Animated Counter (arithmetic + comparison)
// ============================================================
function animateCounter(elementId, target) {
  const el = document.getElementById(elementId);
  let current = 0;

  // Calculate step using division
  const step = Math.ceil(target / 80);
  const interval = 20;

  const timer = setInterval(function() {
    current += step;

    // Comparison: stop at target
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }

    el.textContent = current.toLocaleString();
  }, interval);
}

// ============================================================
// FUNCTION: Book Appointment (if-else, logical operators)
// ============================================================
function bookAppointment() {
  const name = document.getElementById("apptName").value.trim();
  const phone = document.getElementById("apptPhone").value.trim();
  const age = parseInt(document.getElementById("apptAge").value);
  const dept = document.getElementById("apptDept").value;
  const date = document.getElementById("apptDate").value;
  const time = document.getElementById("apptTime").value;
  const msgEl = document.getElementById("apptMsg2");

  // Logical operator &&: ALL fields must be filled
  if (!name || !phone || !dept || !date || !time) {
    msgEl.textContent = "❌ Please fill in all required fields.";
    msgEl.className = "form-msg error";
    return;
  }

  // Comparison operators for phone validation
  if (phone.length < 10 || phone.length > 15) {
    msgEl.textContent = "❌ Please enter a valid phone number (10–15 digits).";
    msgEl.className = "form-msg error";
    return;
  }

  // Logical operator: age must be > 0 AND < 120
  if (isNaN(age) || age < 1 || age > 120) {
    msgEl.textContent = "❌ Please enter a valid age (1–120).";
    msgEl.className = "form-msg error";
    return;
  }

  // Arithmetic: calculate how many days until appointment
  const today = new Date();
  const apptDate = new Date(date);
  const diffTime = apptDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // arithmetic

  // Comparison: appointment must be in the future
  if (diffDays < 0) {
    msgEl.textContent = "❌ Please select a future date.";
    msgEl.className = "form-msg error";
    return;
  }

  // if-else for message based on appointment timing
  let successMsg = "";
  if (diffDays === 0) {
    successMsg = "✅ Today's appointment booked for " + name + " in " + dept + " at " + time + "!";
  } else if (diffDays === 1) {
    successMsg = "✅ Appointment confirmed for tomorrow! " + name + " – " + dept + " at " + time;
  } else {
    successMsg = "✅ Appointment booked! " + name + " – " + dept + " on selected date. " + diffDays + " days to go.";
  }

  msgEl.textContent = successMsg;
  msgEl.className = "form-msg success";

  // Clear form after success
  document.getElementById("apptName").value = "";
  document.getElementById("apptPhone").value = "";
  document.getElementById("apptAge").value = "";
  document.getElementById("apptDept").value = "";
  document.getElementById("apptDate").value = "";
  document.getElementById("apptTime").value = "";
  document.getElementById("apptMsg").value = "";
}

// ============================================================
// FUNCTION: Calculate BMI (arithmetic, comparison, if-else)
// ============================================================
function calculateBMI() {
  const name = document.getElementById("bmiName").value.trim() || "Patient";
  const weight = parseFloat(document.getElementById("bmiWeight").value);
  const height = parseFloat(document.getElementById("bmiHeight").value);
  const gender = document.getElementById("bmiGender").value;
  const resultBox = document.getElementById("bmiResult");

  // Validation: logical operator
  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    resultBox.innerHTML = '<p style="color:#e53e3e; text-align:center; padding: 20px;">⚠️ Please enter valid weight and height values.</p>';
    return;
  }

  // ARITHMETIC: BMI formula = weight(kg) / (height(m))^2
  const heightMeters = height / 100;                     // division
  const bmi = weight / (heightMeters * heightMeters);    // division + multiplication
  const bmiRounded = Math.round(bmi * 10) / 10;          // round to 1 decimal

  // COMPARISON + IF-ELSE: determine BMI category
  let category = "";
  let color = "";
  let advice = "";
  let barPercent = 0;

  if (bmi < 18.5) {
    category = "Underweight";
    color = "#3b82f6";
    advice = "⚠️ You are underweight. Consider consulting our nutrition specialist. Eat a balanced, calorie-rich diet.";
    barPercent = 20;
  } else if (bmi >= 18.5 && bmi < 25.0) {
    category = "Normal Weight";
    color = "#10b981";
    advice = "✅ Your BMI is in the healthy range. Keep up your balanced diet and regular exercise routine!";
    barPercent = 45;
  } else if (bmi >= 25.0 && bmi < 30.0) {
    category = "Overweight";
    color = "#f59e0b";
    advice = "⚠️ You are slightly overweight. We recommend regular physical activity and a balanced diet. Book a consultation.";
    barPercent = 68;
  } else {
    category = "Obese";
    color = "#ef4444";
    advice = "🚨 Your BMI indicates obesity. Please consult our medical team for a personalized weight management plan.";
    barPercent = 90;
  }

  // Ideal weight range calculation using arithmetic
  const idealMin = Math.round(18.5 * heightMeters * heightMeters);
  const idealMax = Math.round(24.9 * heightMeters * heightMeters);

  // Render result
  resultBox.innerHTML =
    '<div class="bmi-output">' +
      '<div class="bmi-score">' +
        '<div class="bmi-value" style="color:' + color + '">' + bmiRounded + '</div>' +
        '<div class="bmi-label" style="color:' + color + '">' + category + '</div>' +
      '</div>' +
      '<div class="bmi-bar-wrap">' +
        '<div class="bmi-bar" style="width:' + barPercent + '%; background:' + color + '"></div>' +
      '</div>' +
      '<div class="bmi-meta">' +
        '<strong>Name:</strong> ' + name + '<br/>' +
        '<strong>Weight:</strong> ' + weight + ' kg | ' +
        '<strong>Height:</strong> ' + height + ' cm<br/>' +
        '<strong>Gender:</strong> ' + (gender === "male" ? "Male" : "Female") + '<br/>' +
        '<strong>Ideal Weight Range:</strong> ' + idealMin + ' – ' + idealMax + ' kg' +
      '</div>' +
      '<div class="bmi-advice" style="background:' + color + '20; border-left: 3px solid ' + color + '; color:' + color + '">' +
        advice +
      '</div>' +
    '</div>';

  // Add to BMI history array (arithmetic: push)
  bmiHistory.push({
    name: name,
    weight: weight,
    height: height,
    bmi: bmiRounded,
    category: category
  });

  // Update BMI history table
  updateBMITable();
}

// ============================================================
// FUNCTION: Update BMI History Table (loop + array)
// ============================================================
function updateBMITable() {
  const tbody = document.getElementById("bmiTableBody");
  const historySection = document.getElementById("bmiHistorySection");

  // Show history section if there are records
  if (bmiHistory.length > 0) {
    historySection.style.display = "block";
  }

  tbody.innerHTML = "";

  // Loop through bmiHistory array
  for (let i = 0; i < bmiHistory.length; i++) {
    const record = bmiHistory[i];
    const row = document.createElement("tr");

    // Arithmetic: use modulo for alternating row style
    if (i % 2 === 0) {
      row.style.background = "#f4f8f7";
    }

    row.innerHTML =
      "<td>" + (i + 1) + "</td>" +
      "<td>" + record.name + "</td>" +
      "<td>" + record.weight + " kg</td>" +
      "<td>" + record.height + " cm</td>" +
      "<td><strong>" + record.bmi + "</strong></td>" +
      "<td>" + record.category + "</td>";

    tbody.appendChild(row);
  }
}

// ============================================================
// FUNCTION: Digital Clock (arithmetic, comparison)
// ============================================================
function updateClock() {
  const now = new Date();

  // Arithmetic: ensure two-digit format
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Comparison: pad with zero if less than 10
  const hh = (hours < 10) ? "0" + hours : hours;
  const mm = (minutes < 10) ? "0" + minutes : minutes;
  const ss = (seconds < 10) ? "0" + seconds : seconds;

  document.getElementById("digitalClock").textContent = hh + ":" + mm + ":" + ss;

  // Days array for date display
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const dayName = days[now.getDay()];
  const date = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();

  document.getElementById("clockDate").textContent = dayName + ", " + date + " " + month + " " + year;
}

// ============================================================
// FUNCTION: Render Testimonials (loop, arrays)
// ============================================================
function renderTestimonials() {
  const slider = document.getElementById("testimonialSlider");
  const dotsContainer = document.getElementById("sliderDots");

  slider.innerHTML = "";
  dotsContainer.innerHTML = "";

  // Loop to render all testimonial cards
  for (let i = 0; i < testimonials.length; i++) {
    const t = testimonials[i];
    const card = document.createElement("div");

    // Comparison: show first card as active
    card.className = "testimonial-card" + (i === 0 ? " active" : "");
    card.id = "testi-" + i;

    card.innerHTML =
      '<div class="testi-quote">"</div>' +
      '<p class="testi-text">' + t.text + '</p>' +
      '<div class="testi-author">' + t.author + '</div>' +
      '<div class="testi-dept">' + t.dept + '</div>';

    slider.appendChild(card);

    // Create dot
    const dot = document.createElement("div");
    dot.className = "dot" + (i === 0 ? " active" : "");
    dot.setAttribute("onclick", "goToTestimonial(" + i + ")");
    dotsContainer.appendChild(dot);
  }
}

// ============================================================
// FUNCTION: Go to specific testimonial (comparison + if-else)
// ============================================================
function goToTestimonial(index) {
  // Hide current
  const cards = document.querySelectorAll(".testimonial-card");
  const dots = document.querySelectorAll(".dot");

  // Loop to hide all cards and dots
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.remove("active");
    dots[i].classList.remove("active");
  }

  // Show selected
  currentTestimonial = index;
  cards[currentTestimonial].classList.add("active");
  dots[currentTestimonial].classList.add("active");
}

// ============================================================
// FUNCTION: Auto-slide testimonials (arithmetic, comparison)
// ============================================================
function autoSlide() {
  // Arithmetic: increment and wrap using modulo
  const total = testimonials.length;
  currentTestimonial = (currentTestimonial + 1) % total; // modulo operator %
  goToTestimonial(currentTestimonial);
}

// ============================================================
// FUNCTION: Navbar scroll effect (comparison)
// ============================================================
function handleScroll() {
  const navbar = document.getElementById("navbar");

  // Comparison: if scrolled more than 50px
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}

// ============================================================
// FUNCTION: Hamburger menu toggle (logical operator)
// ============================================================
function setupHamburger() {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", function() {
    // Toggle open using logical OR with classList check
    const isOpen = navLinks.classList.contains("open");
    if (!isOpen) {
      navLinks.classList.add("open");
    } else {
      navLinks.classList.remove("open");
    }
  });

  // Close nav when a link is clicked
  const links = navLinks.querySelectorAll("a");
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
      navLinks.classList.remove("open");
    });
  }
}

// ============================================================
// FUNCTION: Set Footer Year (arithmetic)
// ============================================================
function setFooterYear() {
  const year = new Date().getFullYear();
  document.getElementById("footerYear").textContent = year;
}

// ============================================================
// FUNCTION: Initialize stats counters (called on page load)
// ============================================================
function initCounters() {
  // Stats data in array
  const stats = [
    { id: "stat1", count: 250 },
    { id: "stat2", count: 15000 },
    { id: "stat3", count: 30 },
    { id: "stat4", count: 98 }
  ];

  // Loop through stats array
  for (let i = 0; i < stats.length; i++) {
    // Arithmetic: delay each counter using multiplication
    const delay = i * 150;
    setTimeout(function(statId, statCount) {
      return function() {
        animateCounter(statId, statCount);
      };
    }(stats[i].id, stats[i].count), delay);
  }
}

// ============================================================
// INIT: Run everything on DOMContentLoaded
// ============================================================
document.addEventListener("DOMContentLoaded", function() {

  // Render all sections
  renderDepartments("all");
  renderDoctors();
  renderServices();
  renderTestimonials();
  setupTicker();
  setFooterYear();
  setupHamburger();
  initCounters();

  // Start digital clock (updates every second)
  updateClock();
  setInterval(updateClock, 1000);

  // Auto-slide testimonials every 5 seconds
  setInterval(autoSlide, 5000);

  // Scroll event for navbar
  window.addEventListener("scroll", handleScroll);

  // Set minimum date for appointment to today
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0"); // arithmetic
  const dd = String(today.getDate()).padStart(2, "0");
  const minDate = yyyy + "-" + mm + "-" + dd;
  document.getElementById("apptDate").setAttribute("min", minDate);

  // Smooth Scroll Fix for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70, // Adjust for navbar height
          behavior: 'smooth'
        });
      }
    });
  });
});
