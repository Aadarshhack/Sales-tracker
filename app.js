// Hackathon Sales Tracker Application
class SalesTracker {
    constructor() {
        this.data = {
            clients: [
                {"id": 1, "company": "TechCorp Solutions", "contact": "Raj Sharma", "email": "raj@techcorp.com", "phone": "+91-9876543210", "region": "India", "industry": "Technology", "projectType": "AI/ML", "status": "Won", "dateAdded": "2024-01-15"},
                {"id": 2, "company": "Global Innovations Ltd", "contact": "Sarah Johnson", "email": "sarah@globalinno.com", "phone": "+1-555-0123", "region": "Global", "industry": "Healthcare", "projectType": "Digital Health", "status": "Proposal Sent", "dateAdded": "2024-02-10"},
                {"id": 3, "company": "Mumbai Fintech", "contact": "Priya Patel", "email": "priya@mumbaifintech.in", "phone": "+91-9123456789", "region": "India", "industry": "Fintech", "projectType": "Blockchain", "status": "Follow-up", "dateAdded": "2024-01-28"},
                {"id": 4, "company": "European Systems", "contact": "Hans Mueller", "email": "hans@eurosys.de", "phone": "+49-123-456789", "region": "Global", "industry": "Manufacturing", "projectType": "IoT", "status": "Lost", "dateAdded": "2024-01-05"},
                {"id": 5, "company": "Delhi Analytics", "contact": "Amit Singh", "email": "amit@delhianalytics.co.in", "phone": "+91-9876501234", "region": "India", "industry": "Analytics", "projectType": "Data Science", "status": "Won", "dateAdded": "2024-03-01"},
                {"id": 6, "company": "Pacific Tech", "contact": "Michael Chen", "email": "michael@pacifictech.com", "phone": "+1-555-0456", "region": "Global", "industry": "Technology", "projectType": "Cloud Computing", "status": "Contacted", "dateAdded": "2024-03-15"},
                {"id": 7, "company": "Bangalore Startups", "contact": "Kavya Reddy", "email": "kavya@blrstartups.in", "phone": "+91-9988776655", "region": "India", "industry": "Startup", "projectType": "Mobile App", "status": "Won", "dateAdded": "2024-02-20"},
                {"id": 8, "company": "Nordic Solutions", "contact": "Erik Andersen", "email": "erik@nordicsol.no", "phone": "+47-12345678", "region": "Global", "industry": "Energy", "projectType": "Sustainability", "status": "Proposal Sent", "dateAdded": "2024-03-08"},
                {"id": 9, "company": "Chennai Software", "contact": "Lakshmi Narayanan", "email": "lakshmi@chennaisw.com", "phone": "+91-9123451234", "region": "India", "industry": "Software", "projectType": "DevOps", "status": "Follow-up", "dateAdded": "2024-02-25"},
                {"id": 10, "company": "Australian Ventures", "contact": "James Wilson", "email": "james@auventures.com.au", "phone": "+61-2-9876-5432", "region": "Global", "industry": "Venture Capital", "projectType": "Investment Tech", "status": "Lead", "dateAdded": "2024-03-12"}
            ],
            proposals: [
                {"id": 1, "clientId": 1, "client": "TechCorp Solutions", "proposalDate": "2024-01-20", "amount": 250000, "approachType": "Completely New", "description": "AI-powered customer service automation", "status": "Won", "team": "India", "closedDate": "2024-02-15", "winReason": "Innovative approach and competitive pricing"},
                {"id": 2, "clientId": 2, "client": "Global Innovations Ltd", "proposalDate": "2024-02-15", "amount": 180000, "approachType": "Standard", "description": "Healthcare data management system", "status": "Proposal Sent", "team": "Global", "followUpDate": "2024-03-20"},
                {"id": 3, "clientId": 3, "client": "Mumbai Fintech", "proposalDate": "2024-02-05", "amount": 320000, "approachType": "Completely New", "description": "Blockchain-based payment platform", "status": "Follow-up", "team": "India", "followUpDate": "2024-03-18"},
                {"id": 4, "clientId": 4, "client": "European Systems", "proposalDate": "2024-01-12", "amount": 150000, "approachType": "Standard", "description": "IoT monitoring dashboard", "status": "Lost", "team": "Global", "closedDate": "2024-02-28", "lossReason": "Budget constraints"},
                {"id": 5, "clientId": 5, "client": "Delhi Analytics", "proposalDate": "2024-03-05", "amount": 200000, "approachType": "Standard", "description": "Customer behavior analytics platform", "status": "Won", "team": "India", "closedDate": "2024-03-18", "winReason": "Strong technical expertise"},
                {"id": 6, "clientId": 6, "client": "Pacific Tech", "proposalDate": "2024-03-18", "amount": 400000, "approachType": "Completely New", "description": "Multi-cloud orchestration platform", "status": "Proposal Sent", "team": "Global", "followUpDate": "2024-04-01"},
                {"id": 7, "clientId": 7, "client": "Bangalore Startups", "proposalDate": "2024-02-28", "amount": 120000, "approachType": "Standard", "description": "Mobile app development framework", "status": "Won", "team": "India", "closedDate": "2024-03-15", "winReason": "Quick delivery timeline"},
                {"id": 8, "clientId": 8, "client": "Nordic Solutions", "proposalDate": "2024-03-12", "amount": 350000, "approachType": "Completely New", "description": "Green energy optimization AI", "status": "Proposal Sent", "team": "Global", "followUpDate": "2024-03-25"},
                {"id": 9, "clientId": 9, "client": "Chennai Software", "proposalDate": "2024-03-02", "amount": 180000, "approachType": "Standard", "description": "DevOps automation suite", "status": "Follow-up", "team": "India", "followUpDate": "2024-03-22"},
                {"id": 10, "clientId": 10, "client": "Australian Ventures", "proposalDate": "2024-03-16", "amount": 280000, "approachType": "Completely New", "description": "Investment portfolio AI analyzer", "status": "Proposal Sent", "team": "Global", "followUpDate": "2024-03-30"}
            ],
            teamMembers: [
                {"id": 1, "name": "Raj Kumar", "team": "India", "role": "Sales Manager", "email": "raj.kumar@company.com", "proposalsCount": 8, "conversionRate": 62.5, "revenue": 570000},
                {"id": 2, "name": "Sarah Davis", "team": "Global", "role": "Sales Director", "email": "sarah.davis@company.com", "proposalsCount": 6, "conversionRate": 50.0, "revenue": 780000},
                {"id": 3, "name": "Priya Sharma", "team": "India", "role": "Business Development", "email": "priya.sharma@company.com", "proposalsCount": 5, "conversionRate": 80.0, "revenue": 320000},
                {"id": 4, "name": "Michael Thompson", "team": "Global", "role": "Sales Executive", "email": "michael.thompson@company.com", "proposalsCount": 7, "conversionRate": 42.9, "revenue": 530000}
            ],
            activities: [
                {"id": 1, "clientId": 1, "type": "Call", "description": "Discussed project requirements", "date": "2024-01-18", "team": "India", "member": "Raj Kumar"},
                {"id": 2, "clientId": 2, "type": "Email", "description": "Sent proposal follow-up", "date": "2024-03-10", "team": "Global", "member": "Sarah Davis"},
                {"id": 3, "clientId": 3, "type": "Meeting", "description": "Technical demo presentation", "date": "2024-02-12", "team": "India", "member": "Priya Sharma"},
                {"id": 4, "clientId": 5, "type": "Call", "description": "Contract negotiation", "date": "2024-03-14", "team": "India", "member": "Raj Kumar"},
                {"id": 5, "clientId": 8, "type": "Email", "description": "Proposal clarification", "date": "2024-03-16", "team": "Global", "member": "Michael Thompson"}
            ]
        };

        this.charts = {};
        this.currentFilters = {};
        this.init();
    }

    init() {
        this.setupNavigation();
        this.setupModals();
        this.setupFilters();
        this.setupForms();
        this.loadDashboard();
        this.loadClients();
        this.loadProposals();
        this.loadTeam();
        this.loadAnalytics();
    }

    setupNavigation() {
        // Use direct event delegation for navigation
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('nav__item')) {
                e.preventDefault();
                const section = e.target.dataset.section;
                if (section) {
                    this.switchSection(section);
                    
                    // Update active nav item
                    document.querySelectorAll('.nav__item').forEach(nav => 
                        nav.classList.remove('nav__item--active')
                    );
                    e.target.classList.add('nav__item--active');
                }
            }
        });
    }

    switchSection(sectionName) {
        // Hide all sections
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('section--active');
        });
        
        // Show target section
        const targetSection = document.getElementById(sectionName);
        if (targetSection) {
            targetSection.classList.add('section--active');
            
            // Load section-specific content if needed
            if (sectionName === 'analytics') {
                // Delay chart rendering to ensure section is visible
                setTimeout(() => this.loadAnalytics(), 100);
            }
        }
    }

    setupModals() {
        // Use event delegation for modal buttons
        document.addEventListener('click', (e) => {
            if (e.target.id === 'add-client-btn') {
                this.showModal('add-client-modal');
            } else if (e.target.id === 'add-proposal-btn') {
                this.populateClientSelect();
                this.showModal('add-proposal-modal');
            } else if (e.target.id === 'cancel-client' || 
                      (e.target.classList.contains('modal__close') && 
                       e.target.closest('#add-client-modal'))) {
                this.hideModal('add-client-modal');
            } else if (e.target.id === 'cancel-proposal' || 
                      (e.target.classList.contains('modal__close') && 
                       e.target.closest('#add-proposal-modal'))) {
                this.hideModal('add-proposal-modal');
            } else if (e.target.classList.contains('modal__backdrop')) {
                const modal = e.target.closest('.modal');
                if (modal) {
                    this.hideModal(modal.id);
                }
            }
        });
    }

    showModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('hidden');
        }
    }

    hideModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('hidden');
        }
    }

    setupFilters() {
        // Client filters
        const clientSearch = document.getElementById('client-search');
        const clientRegionFilter = document.getElementById('client-region-filter');
        const clientStatusFilter = document.getElementById('client-status-filter');

        if (clientSearch) clientSearch.addEventListener('input', () => this.filterClients());
        if (clientRegionFilter) clientRegionFilter.addEventListener('change', () => this.filterClients());
        if (clientStatusFilter) clientStatusFilter.addEventListener('change', () => this.filterClients());

        // Proposal filters
        const proposalStatusFilter = document.getElementById('proposal-status-filter');
        const proposalApproachFilter = document.getElementById('proposal-approach-filter');
        const proposalTeamFilter = document.getElementById('proposal-team-filter');

        if (proposalStatusFilter) proposalStatusFilter.addEventListener('change', () => this.filterProposals());
        if (proposalApproachFilter) proposalApproachFilter.addEventListener('change', () => this.filterProposals());
        if (proposalTeamFilter) proposalTeamFilter.addEventListener('change', () => this.filterProposals());
    }

    setupForms() {
        // Add Client Form
        const addClientForm = document.getElementById('add-client-form');
        if (addClientForm) {
            addClientForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.addClient();
            });
        }

        // Add Proposal Form
        const addProposalForm = document.getElementById('add-proposal-form');
        if (addProposalForm) {
            addProposalForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.addProposal();
            });
        }
    }

    loadDashboard() {
        this.updateMetrics();
        setTimeout(() => {
            this.createTeamPerformanceChart();
            this.createApproachChart();
        }, 100);
        this.loadRecentActivities();
    }

    updateMetrics() {
        const totalOpportunities = this.data.proposals.length;
        const wonProposals = this.data.proposals.filter(p => p.status === 'Won').length;
        const conversionRate = totalOpportunities > 0 ? (wonProposals / totalOpportunities * 100).toFixed(1) : 0;
        const totalRevenue = this.data.proposals
            .filter(p => p.status === 'Won')
            .reduce((sum, p) => sum + p.amount, 0);
        const activeProposals = this.data.proposals.filter(p => 
            p.status === 'Proposal Sent' || p.status === 'Follow-up'
        ).length;

        const totalOpportunitiesEl = document.getElementById('total-opportunities');
        const conversionRateEl = document.getElementById('conversion-rate');
        const totalRevenueEl = document.getElementById('total-revenue');
        const activeProposalsEl = document.getElementById('active-proposals');

        if (totalOpportunitiesEl) totalOpportunitiesEl.textContent = totalOpportunities;
        if (conversionRateEl) conversionRateEl.textContent = `${conversionRate}%`;
        if (totalRevenueEl) totalRevenueEl.textContent = `$${totalRevenue.toLocaleString()}`;
        if (activeProposalsEl) activeProposalsEl.textContent = activeProposals;
    }

    createTeamPerformanceChart() {
        const ctx = document.getElementById('team-performance-chart');
        if (!ctx) return;
        
        // Destroy existing chart if it exists
        if (this.charts.teamPerformance) {
            this.charts.teamPerformance.destroy();
        }
        
        const indiaProposals = this.data.proposals.filter(p => p.team === 'India');
        const globalProposals = this.data.proposals.filter(p => p.team === 'Global');
        
        const indiaWon = indiaProposals.filter(p => p.status === 'Won').length;
        const globalWon = globalProposals.filter(p => p.status === 'Won').length;
        
        const indiaConversion = indiaProposals.length > 0 ? (indiaWon / indiaProposals.length * 100) : 0;
        const globalConversion = globalProposals.length > 0 ? (globalWon / globalProposals.length * 100) : 0;

        this.charts.teamPerformance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['India Team', 'Global Team'],
                datasets: [{
                    label: 'Conversion Rate (%)',
                    data: [indiaConversion, globalConversion],
                    backgroundColor: ['#1FB8CD', '#FFC185'],
                    borderColor: ['#1FB8CD', '#FFC185'],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }

    createApproachChart() {
        const ctx = document.getElementById('approach-chart');
        if (!ctx) return;
        
        // Destroy existing chart if it exists
        if (this.charts.approach) {
            this.charts.approach.destroy();
        }
        
        const standardProposals = this.data.proposals.filter(p => p.approachType === 'Standard');
        const newProposals = this.data.proposals.filter(p => p.approachType === 'Completely New');
        
        const standardWon = standardProposals.filter(p => p.status === 'Won').length;
        const newWon = newProposals.filter(p => p.status === 'Won').length;

        this.charts.approach = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Standard Won', 'Standard Lost', 'New Won', 'New Lost'],
                datasets: [{
                    data: [
                        standardWon,
                        standardProposals.length - standardWon,
                        newWon,
                        newProposals.length - newWon
                    ],
                    backgroundColor: ['#1FB8CD', '#B4413C', '#FFC185', '#5D878F']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }

    loadRecentActivities() {
        const container = document.getElementById('recent-activities');
        if (!container) return;
        
        const recentActivities = this.data.activities
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 5);

        container.innerHTML = recentActivities.map(activity => {
            const client = this.data.clients.find(c => c.id === activity.clientId);
            const iconClass = activity.type.toLowerCase();
            
            return `
                <div class="activity-item">
                    <div class="activity-item__icon activity-item__icon--${iconClass}">
                        ${this.getActivityIcon(activity.type)}
                    </div>
                    <div class="activity-item__content">
                        <p class="activity-item__description">${activity.description}</p>
                        <p class="activity-item__meta">
                            ${client ? client.company : 'Unknown Client'} • 
                            ${activity.member} • 
                            ${this.formatDate(activity.date)}
                        </p>
                    </div>
                </div>
            `;
        }).join('');
    }

    getActivityIcon(type) {
        const icons = {
            'Call': '📞',
            'Email': '📧',
            'Meeting': '🤝'
        };
        return icons[type] || '📋';
    }

    loadClients() {
        this.renderClientsTable(this.data.clients);
    }

    renderClientsTable(clients) {
        const tbody = document.getElementById('clients-tbody');
        if (!tbody) return;
        
        tbody.innerHTML = clients.map(client => `
            <tr>
                <td>${client.company}</td>
                <td>
                    <div>${client.contact}</div>
                    <div style="font-size: 12px; color: var(--color-text-secondary);">${client.email}</div>
                </td>
                <td>${client.region}</td>
                <td>${client.industry}</td>
                <td><span class="status-badge status-badge--${client.status.toLowerCase().replace(' ', '-')}">${client.status}</span></td>
                <td>
                    <button class="action-btn" onclick="app.editClient(${client.id})">Edit</button>
                    <button class="action-btn action-btn--danger" onclick="app.deleteClient(${client.id})">Delete</button>
                </td>
            </tr>
        `).join('');
    }

    filterClients() {
        const search = document.getElementById('client-search')?.value?.toLowerCase() || '';
        const region = document.getElementById('client-region-filter')?.value || '';
        const status = document.getElementById('client-status-filter')?.value || '';

        let filtered = this.data.clients.filter(client => {
            const matchesSearch = client.company.toLowerCase().includes(search) ||
                                client.contact.toLowerCase().includes(search) ||
                                client.email.toLowerCase().includes(search);
            const matchesRegion = !region || client.region === region;
            const matchesStatus = !status || client.status === status;

            return matchesSearch && matchesRegion && matchesStatus;
        });

        this.renderClientsTable(filtered);
    }

    loadProposals() {
        this.renderProposalsTable(this.data.proposals);
    }

    renderProposalsTable(proposals) {
        const tbody = document.getElementById('proposals-tbody');
        if (!tbody) return;
        
        tbody.innerHTML = proposals.map(proposal => `
            <tr>
                <td>${proposal.client}</td>
                <td>$${proposal.amount.toLocaleString()}</td>
                <td>${proposal.approachType}</td>
                <td>${proposal.team}</td>
                <td><span class="status-badge status-badge--${proposal.status.toLowerCase().replace(' ', '-')}">${proposal.status}</span></td>
                <td>${this.formatDate(proposal.proposalDate)}</td>
                <td>
                    <button class="action-btn" onclick="app.editProposal(${proposal.id})">Edit</button>
                    <button class="action-btn action-btn--danger" onclick="app.deleteProposal(${proposal.id})">Delete</button>
                </td>
            </tr>
        `).join('');
    }

    filterProposals() {
        const status = document.getElementById('proposal-status-filter')?.value || '';
        const approach = document.getElementById('proposal-approach-filter')?.value || '';
        const team = document.getElementById('proposal-team-filter')?.value || '';

        let filtered = this.data.proposals.filter(proposal => {
            const matchesStatus = !status || proposal.status === status;
            const matchesApproach = !approach || proposal.approachType === approach;
            const matchesTeam = !team || proposal.team === team;

            return matchesStatus && matchesApproach && matchesTeam;
        });

        this.renderProposalsTable(filtered);
    }

    loadAnalytics() {
        setTimeout(() => {
            this.createConversionByApproachChart();
            this.createRevenueByTeamChart();
            this.createMonthlyTrendChart();
            this.createStatusDistributionChart();
        }, 100);
    }

    createConversionByApproachChart() {
        const ctx = document.getElementById('conversion-by-approach-chart');
        if (!ctx) return;
        
        if (this.charts.conversionByApproach) {
            this.charts.conversionByApproach.destroy();
        }
        
        const standardProposals = this.data.proposals.filter(p => p.approachType === 'Standard');
        const newProposals = this.data.proposals.filter(p => p.approachType === 'Completely New');
        
        const standardConversion = standardProposals.length > 0 ? 
            (standardProposals.filter(p => p.status === 'Won').length / standardProposals.length * 100) : 0;
        const newConversion = newProposals.length > 0 ? 
            (newProposals.filter(p => p.status === 'Won').length / newProposals.length * 100) : 0;

        this.charts.conversionByApproach = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Standard Approach', 'Completely New Approach'],
                datasets: [{
                    label: 'Conversion Rate (%)',
                    data: [standardConversion, newConversion],
                    backgroundColor: ['#1FB8CD', '#FFC185']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        });
    }

    createRevenueByTeamChart() {
        const ctx = document.getElementById('revenue-by-team-chart');
        if (!ctx) return;
        
        if (this.charts.revenueByTeam) {
            this.charts.revenueByTeam.destroy();
        }
        
        const indiaRevenue = this.data.proposals
            .filter(p => p.team === 'India' && p.status === 'Won')
            .reduce((sum, p) => sum + p.amount, 0);
        
        const globalRevenue = this.data.proposals
            .filter(p => p.team === 'Global' && p.status === 'Won')
            .reduce((sum, p) => sum + p.amount, 0);

        this.charts.revenueByTeam = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['India Team', 'Global Team'],
                datasets: [{
                    data: [indiaRevenue, globalRevenue],
                    backgroundColor: ['#1FB8CD', '#FFC185']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }

    createMonthlyTrendChart() {
        const ctx = document.getElementById('monthly-trend-chart');
        if (!ctx) return;
        
        if (this.charts.monthlyTrend) {
            this.charts.monthlyTrend.destroy();
        }
        
        // Group proposals by month
        const monthlyData = {};
        this.data.proposals.forEach(proposal => {
            const month = proposal.proposalDate.substring(0, 7); // YYYY-MM
            if (!monthlyData[month]) {
                monthlyData[month] = { total: 0, won: 0 };
            }
            monthlyData[month].total++;
            if (proposal.status === 'Won') {
                monthlyData[month].won++;
            }
        });

        const months = Object.keys(monthlyData).sort();
        const conversionRates = months.map(month => 
            monthlyData[month].total > 0 ? (monthlyData[month].won / monthlyData[month].total * 100) : 0
        );

        this.charts.monthlyTrend = new Chart(ctx, {
            type: 'line',
            data: {
                labels: months.map(month => new Date(month + '-01').toLocaleDateString('en-US', { month: 'short', year: 'numeric' })),
                datasets: [{
                    label: 'Conversion Rate (%)',
                    data: conversionRates,
                    borderColor: '#1FB8CD',
                    backgroundColor: 'rgba(31, 184, 205, 0.1)',
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        });
    }

    createStatusDistributionChart() {
        const ctx = document.getElementById('status-distribution-chart');
        if (!ctx) return;
        
        if (this.charts.statusDistribution) {
            this.charts.statusDistribution.destroy();
        }
        
        const statusCounts = {};
        this.data.proposals.forEach(proposal => {
            statusCounts[proposal.status] = (statusCounts[proposal.status] || 0) + 1;
        });

        this.charts.statusDistribution = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: Object.keys(statusCounts),
                datasets: [{
                    data: Object.values(statusCounts),
                    backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }

    loadTeam() {
        const container = document.getElementById('team-members-grid');
        if (!container) return;
        
        container.innerHTML = this.data.teamMembers.map(member => {
            const initials = member.name.split(' ').map(n => n[0]).join('');
            
            return `
                <div class="team-member-card">
                    <div class="team-member-card__header">
                        <div class="team-member-card__avatar">${initials}</div>
                        <div>
                            <h4 class="team-member-card__name">${member.name}</h4>
                            <p class="team-member-card__role">${member.role} - ${member.team}</p>
                        </div>
                    </div>
                    <div class="team-member-card__stats">
                        <div class="team-stat">
                            <h3 class="team-stat__value">${member.proposalsCount}</h3>
                            <p class="team-stat__label">Proposals</p>
                        </div>
                        <div class="team-stat">
                            <h3 class="team-stat__value">${member.conversionRate}%</h3>
                            <p class="team-stat__label">Conversion</p>
                        </div>
                        <div class="team-stat">
                            <h3 class="team-stat__value">$${(member.revenue / 1000).toFixed(0)}K</h3>
                            <p class="team-stat__label">Revenue</p>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    populateClientSelect() {
        const select = document.getElementById('proposal-client');
        if (!select) return;
        
        select.innerHTML = '<option value="">Select Client</option>' +
            this.data.clients.map(client => 
                `<option value="${client.id}">${client.company}</option>`
            ).join('');
    }

    addClient() {
        const form = document.getElementById('add-client-form');
        
        const newClient = {
            id: Math.max(...this.data.clients.map(c => c.id)) + 1,
            company: document.getElementById('company-name').value,
            contact: document.getElementById('contact-person').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            region: document.getElementById('region').value,
            industry: document.getElementById('industry').value,
            projectType: document.getElementById('project-type').value,
            status: 'Lead',
            dateAdded: new Date().toISOString().split('T')[0]
        };

        this.data.clients.push(newClient);
        this.loadClients();
        this.hideModal('add-client-modal');
        if (form) form.reset();
        this.showMessage('Client added successfully!', 'success');
    }

    addProposal() {
        const clientId = parseInt(document.getElementById('proposal-client').value);
        const client = this.data.clients.find(c => c.id === clientId);
        
        const newProposal = {
            id: Math.max(...this.data.proposals.map(p => p.id)) + 1,
            clientId: clientId,
            client: client.company,
            proposalDate: new Date().toISOString().split('T')[0],
            amount: parseInt(document.getElementById('proposal-amount').value),
            approachType: document.getElementById('approach-type').value,
            description: document.getElementById('proposal-description').value,
            status: 'Proposal Sent',
            team: document.getElementById('proposal-team').value
        };

        this.data.proposals.push(newProposal);
        this.loadProposals();
        this.updateMetrics();
        this.hideModal('add-proposal-modal');
        const form = document.getElementById('add-proposal-form');
        if (form) form.reset();
        this.showMessage('Proposal created successfully!', 'success');
    }

    editClient(id) {
        const client = this.data.clients.find(c => c.id === id);
        if (client) {
            console.log('Edit client:', client);
        }
    }

    deleteClient(id) {
        if (confirm('Are you sure you want to delete this client?')) {
            this.data.clients = this.data.clients.filter(c => c.id !== id);
            this.loadClients();
            this.showMessage('Client deleted successfully!', 'success');
        }
    }

    editProposal(id) {
        const proposal = this.data.proposals.find(p => p.id === id);
        if (proposal) {
            console.log('Edit proposal:', proposal);
        }
    }

    deleteProposal(id) {
        if (confirm('Are you sure you want to delete this proposal?')) {
            this.data.proposals = this.data.proposals.filter(p => p.id !== id);
            this.loadProposals();
            this.updateMetrics();
            this.showMessage('Proposal deleted successfully!', 'success');
        }
    }

    formatDate(dateString) {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    }

    showMessage(message, type = 'success') {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message message--${type}`;
        messageDiv.textContent = message;
        
        document.body.appendChild(messageDiv);
        
        setTimeout(() => {
            messageDiv.remove();
        }, 3000);
    }
}

// Initialize the application
const app = new SalesTracker();