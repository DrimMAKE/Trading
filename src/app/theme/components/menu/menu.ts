import { Menu } from './menu.model';

export const verticalMenuItems = [ 
    new Menu (1, 'Dashboard', '/pages/dashboard', null, 'tachometer', null, false, 0),
    new Menu (2, 'Membership', '/pages/membership', null, 'users', null, false, 0), 
    new Menu (3, 'UI Features', null, null, 'laptop', null, true, 0),   
    new Menu (4, 'Buttons', '/pages/ui/buttons', null, 'keyboard-o', null, false, 3),  
    new Menu (5, 'Cards', '/pages/ui/cards', null, 'address-card-o', null, false, 3), 
    new Menu (6, 'Components', '/pages/ui/components', null, 'creative-commons', null, false, 3),
    new Menu (7, 'Icons', '/pages/ui/icons', null, 'font-awesome', null, false, 3), 
    new Menu (8, 'List Group', '/pages/ui/list-group', null, 'th-list', null, false, 3), 
    new Menu (9, 'Media Objects', '/pages/ui/media-objects', null, 'object-group', null, false, 3), 
    new Menu (10, 'Tabs & Accordions', '/pages/ui/tabs-accordions', null, 'server', null, false, 3),
    new Menu (11, 'Typography', '/pages/ui/typography', null, 'font', null, false, 3),
    new Menu (15, 'Dynamic Menu', '/pages/dynamic-menu', null, 'list-ul', null, false, 0),    
    new Menu (16, 'Mailbox', '/pages/mailbox', null, 'envelope-o', null, false, 0),
    new Menu (20, 'Form Elements', null, null, 'pencil-square-o', null, true, 0), 
    new Menu (21, 'Form Controls', '/pages/form-elements/controls', null, 'check-square-o', null, false, 20),
    new Menu (22, 'Form Layouts', '/pages/form-elements/layouts', null, 'th-large', null, false, 20),
    new Menu (23, 'Form Validations', '/pages/form-elements/validations', null, 'exclamation-triangle', null, false, 20),
    new Menu (24, 'Form Wizard', '/pages/form-elements/wizard', null, 'magic', null, false, 20),
    new Menu (25, 'Editor', '/pages/form-elements/editor', null, 'pencil', null, false, 20),
    new Menu (26, 'Tables', null, null, 'table', null, true, 0),
    new Menu (27, 'Basic Tables', '/pages/tables/basic-tables', null, 'th', null, false, 26), 
    new Menu (28, 'Dynamic Tables', null, null, 'th-large', null, true, 26), 
    new Menu (29, 'Smart DataTable', '/pages/tables/dynamic-tables/smart', null, 'caret-right', null, false, 28),
    new Menu (30, 'NGX DataTable', '/pages/tables/dynamic-tables/ngx', null, 'caret-right', null, false, 28), 
    new Menu (31, 'Tools', null, null, 'wrench', null, true, 0),
    new Menu (32, 'Drag & Drop', '/pages/tools/drag-drop', null, 'hand-paper-o', null, false, 31), 
    new Menu (33, 'Resizable', '/pages/tools/resizable', null, 'expand', null, false, 31), 
    new Menu (34, 'Toaster', '/pages/tools/toaster', null, 'bell-o', null, false, 31), 
    new Menu (40, 'Pages', null, null, 'file-text-o', null, true, 0),
    new Menu (43, 'Login', '/login', null, 'sign-in', null, false, 40),    
    new Menu (44, 'Register', '/register', null, 'registered', null, false, 40),
    new Menu (45, 'Blank', '/pages/blank', null, 'file-o', null, false, 40),
    new Menu (46, 'Error', '/pagenotfound', null, 'exclamation-circle', null, false, 40),
    new Menu (50, 'Calendar', '/pages/calendar', null, 'calendar', null, false, 0),
    new Menu (66, 'Maps', null, null, 'globe', null, true, 0),
    new Menu (67, 'Google Maps', '/pages/maps/googlemaps', null, 'map-marker', null, false, 66),
    new Menu (68, 'Leaflet Maps', '/pages/maps/leafletmaps', null, 'map-o', null, false, 66),
    new Menu (70, 'Charts', null, null, 'area-chart', null, true, 0),
    new Menu (71, 'Bar Charts', '/pages/charts/bar', null, 'bar-chart', null, false, 70),
    new Menu (72, 'Pie Charts', '/pages/charts/pie', null, 'pie-chart', null, false, 70),
    new Menu (73, 'Line Charts', '/pages/charts/line', null, 'line-chart', null, false, 70),
    new Menu (74, 'Bubble Charts', '/pages/charts/bubble', null, 'comment-o', null, false, 70),    
    new Menu (140, 'Level 1', null, null, 'folder-open-o', null, true, 0),
    new Menu (141, 'Level 2', null, null, 'folder-open-o', null, true, 140),
    new Menu (142, 'Level 3', null, null, 'folder-open-o', null, true, 141),
    new Menu (143, 'Level 4', null, null, 'folder-open-o', null, true, 142),
    new Menu (144, 'Level 5', null, null, 'folder-o', null, false, 143),
    new Menu (200, 'External Link', null, 'http://exampledomain.com', 'external-link', '_blank', false, 0)
]

export const horizontalMenuItems = [ 
    new Menu (1, 'Dashboard', '/pages/dashboard', null, 'tachometer', null, false, 0),
    new Menu (2, 'Membership', '/pages/membership', null, 'users', null, false, 0), 
    new Menu (3, 'UI Features', null, null, 'laptop', null, true, 0),   
    new Menu (4, 'Buttons', '/pages/ui/buttons', null, 'keyboard-o', null, false, 3),  
    new Menu (5, 'Cards', '/pages/ui/cards', null, 'address-card-o', null, false, 3), 
    new Menu (6, 'Components', '/pages/ui/components', null, 'creative-commons', null, false, 3),
    new Menu (7, 'Icons', '/pages/ui/icons', null, 'font-awesome', null, false, 3), 
    new Menu (8, 'List Group', '/pages/ui/list-group', null, 'th-list', null, false, 3), 
    new Menu (9, 'Media Objects', '/pages/ui/media-objects', null, 'object-group', null, false, 3), 
    new Menu (10, 'Tabs & Accordions', '/pages/ui/tabs-accordions', null, 'server', null, false, 3),
    new Menu (11, 'Typography', '/pages/ui/typography', null, 'font', null, false, 3),
    new Menu (31, 'Tools', null, null, 'wrench', null, true, 3),
    new Menu (32, 'Drag & Drop', '/pages/tools/drag-drop', null, 'hand-paper-o', null, false, 31), 
    new Menu (33, 'Resizable', '/pages/tools/resizable', null, 'expand', null, false, 31), 
    new Menu (34, 'Toaster', '/pages/tools/toaster', null, 'bell-o', null, false, 31), 
    new Menu (20, 'Form Elements', null, null, 'pencil-square-o', null, true, 0), 
    new Menu (21, 'Form Controls', '/pages/form-elements/controls', null, 'check-square-o', null, false, 20),
    new Menu (22, 'Form Layouts', '/pages/form-elements/layouts', null, 'th-large', null, false, 20),
    new Menu (23, 'Form Validations', '/pages/form-elements/validations', null, 'exclamation-triangle', null, false, 20),
    new Menu (24, 'Form Wizard', '/pages/form-elements/wizard', null, 'magic', null, false, 20),
    new Menu (25, 'Editor', '/pages/form-elements/editor', null, 'pencil', null, false, 20),
    new Menu (26, 'Tables', null, null, 'table', null, true, 20),
    new Menu (27, 'Basic Tables', '/pages/tables/basic-tables', null, 'th', null, false, 26), 
    new Menu (28, 'Dynamic Tables', null, null, 'th-large', null, true, 26), 
    new Menu (29, 'Smart DataTable', '/pages/tables/dynamic-tables/smart', null, 'caret-right', null, false, 28),
    new Menu (30, 'NGX DataTable', '/pages/tables/dynamic-tables/ngx', null, 'caret-right', null, false, 28), 
    new Menu (40, 'Pages', null, null, 'file-text-o', null, true, 0),
    new Menu (15, 'Dynamic Menu', '/pages/dynamic-menu', null, 'list-ul', null, false, 40), 
    new Menu (43, 'Login', '/login', null, 'sign-in', null, false, 40),    
    new Menu (44, 'Register', '/register', null, 'registered', null, false, 40),
    new Menu (45, 'Blank', '/pages/blank', null, 'file-o', null, false, 40),
    new Menu (46, 'Error', '/pagenotfound', null, 'exclamation-circle', null, false, 40),
    new Menu (50, 'Calendar', '/pages/calendar', null, 'calendar', null, false, 40),
    new Menu (16, 'Mailbox', '/pages/mailbox', null, 'envelope-o', null, false, 40), 
    new Menu (200, 'External Link', null, 'http://exampledomain.com', 'external-link', '_blank', false, 40),
    new Menu (66, 'Maps', null, null, 'globe', null, true, 0),
    new Menu (67, 'Google Maps', '/pages/maps/googlemaps', null, 'map-marker', null, false, 66),
    new Menu (68, 'Leaflet Maps', '/pages/maps/leafletmaps', null, 'map-o', null, false, 66),
    new Menu (70, 'Charts', null, null, 'area-chart', null, true, 0),
    new Menu (71, 'Bar Charts', '/pages/charts/bar', null, 'bar-chart', null, false, 70),
    new Menu (72, 'Pie Charts', '/pages/charts/pie', null, 'pie-chart', null, false, 70),
    new Menu (73, 'Line Charts', '/pages/charts/line', null, 'line-chart', null, false, 70),
    new Menu (74, 'Bubble Charts', '/pages/charts/bubble', null, 'comment-o', null, false, 70)
]