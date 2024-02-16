document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    const flexItems = document.querySelectorAll('.flex-item');

    function updateFlexProperty() {
        const alignItemsValue = document.getElementById('alignItemsSelect').value;
        container.style.flexDirection = document.getElementById('flexDirectionSelect').value;
        container.style.justifyContent = document.getElementById('justifyContentSelect').value;
        container.style.alignItems = alignItemsValue;
        container.style.flexWrap = document.getElementById('flexWrapSelect').value;

        // Adjust for 'stretch'
        if (alignItemsValue === 'stretch') {
            flexItems.forEach(item => item.style.height = ''); // Allow stretching
        } else {
            flexItems.forEach(item => item.style.height = '50px'); // Fixed height
        }
    }

    document.getElementById('flexDirectionSelect').addEventListener('change', updateFlexProperty);
    document.getElementById('justifyContentSelect').addEventListener('change', updateFlexProperty);
    document.getElementById('alignItemsSelect').addEventListener('change', updateFlexProperty);
    document.getElementById('flexWrapSelect').addEventListener('change', updateFlexProperty);
});
