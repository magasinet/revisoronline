$(document).ready(function() {
    const postsPerPage = 6;
    let totalPosts = $('.blog-card').length;
    let totalPages = Math.ceil(totalPosts / postsPerPage);
    const maxVisiblePages = 4; // Number of pages to show before ellipsis
  
    function showPage(pageNumber) {
        const start = (pageNumber - 1) * postsPerPage;
        const end = start + postsPerPage;
  
        $('.blog-card').hide().slice(start, end).show();
    }
  
    function renderPagination(currentPage) {
        const paginationContainer = $('#pagination-container');
        paginationContainer.empty();
  
        const prevDisabled = currentPage === 1 ? 'disabled' : '';
        const nextDisabled = currentPage === totalPages ? 'disabled' : '';
  
        paginationContainer.append(`<li class="page-item ${prevDisabled}"><a class="page-link" href="#" data-page="${currentPage - 1}"><i class="fa fa-chevron-left" aria-hidden="true"></i></a></li>`);
  
        // Update totalPages based on current totalPosts
        totalPosts = $('.blog-card').length;
        totalPages = Math.ceil(totalPosts / postsPerPage);
  
        // Determine start and end pages for visible pages
        let startPage = 1;
        let endPage = totalPages;
  
        if (totalPages > maxVisiblePages) {
            if (currentPage > Math.floor(maxVisiblePages / 2)) {
                startPage = currentPage - Math.floor(maxVisiblePages / 2);
                endPage = startPage + maxVisiblePages - 1;
                if (endPage > totalPages) {
                    endPage = totalPages;
                    startPage = endPage - maxVisiblePages + 1;
                }
            } else {
                endPage = maxVisiblePages;
            }
        }
  
        // Adjust pages to ensure 6, 7, 8, 9 sequence when there are more than 5 pages
        if (totalPages > 5 && currentPage >= 6 && currentPage <= 9) {
            startPage = 6;
            endPage = 9;
        }
  
        // Ensure pages 1 to 4 are always visible when there are more than 4 pages
        if (totalPages > 4 && currentPage > 4) {
            paginationContainer.append(`<li class="page-item"><a class="page-link" href="#" data-page="1">1</a></li>`);
            paginationContainer.append(`<li class="page-item"><a class="page-link" href="#" data-page="2">2</a></li>`);
            if (currentPage > 5) {
                paginationContainer.append('<li class="page-item disabled"><span class="page-link">...</span></li>');
            }
        }
  
        for (let i = startPage; i <= endPage; i++) {
            const activeClass = i === currentPage ? 'active' : '';
            paginationContainer.append(`<li class="page-item ${activeClass}"><a class="page-link" href="#" data-page="${i}">${i}</a></li>`);
        }
  
        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                paginationContainer.append('<li class="page-item disabled"><span class="page-link">...</span></li>');
            }
            paginationContainer.append(`<li class="page-item"><a class="page-link" href="#" data-page="${totalPages}">${totalPages}</a></li>`);
        }
  
        paginationContainer.append(`<li class="page-item ${nextDisabled}"><a class="page-link" href="#" data-page="${currentPage + 1}"><i class="fa fa-chevron-right" aria-hidden="true"></i></a></li>`);
    }
  
    $(document).on('click', '.pagination .page-link', function(e) {
        e.preventDefault();
        const newPage = parseInt($(this).attr('data-page'));
  
        if (newPage >= 1 && newPage <= totalPages) {
            showPage(newPage);
            renderPagination(newPage);
        }
    });
  
    showPage(1);
    renderPagination(1);
});
