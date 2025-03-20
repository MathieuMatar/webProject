const express = require('express');
const projectController = require('../controllers/projectController');
const milestoneController = require('../controllers/milestoneController');
const { validateProject } = require('../validators/projectDTO');
const { validateMilestone } = require('../validators/milestoneDTO');

const router = express.Router();

router.get('/', projectController.getProjects);
router.post('/', validateProject, projectController.createProject);
router.get('/:id', projectController.getProject);
router.delete('/:id', projectController.deleteProject);
router.put('/:id', projectController.updateProject);

    /*
GET /api/projects/:id/employees → Get all employees for a project  function readProjectEmployees(project_id)  
POST /api/projects/:id/employees/:employee_id → Assign an employee to a project function assignEmployeeToProject(project_id, employee_id)
DELETE /api/projects/:id/employees/:employee_id → Remove an employee from a project function removeEmployeeFromProject(project_id, employee_id)
GET /api/projects/:id/services → Get all services for a project function readProjectServices(project_id)
POST /api/projects/:id/services/:service_id → Link a service to a project function linkServiceToProject(project_id, service_id)
DELETE /api/projects/:id/services/:service_id → Remove a service from a project function unlinkServiceFromProject(project_id, service_id)
GET /api/projects/:id/contacts → Get all contacts for a project function readProjectContacts(project_id)
POST /api/projects/:id/contacts/:contact_id → Associate a contact with a project function associateContactWithProject(project_id, contact_id)
DELETE /api/projects/:id/contacts/:contact_id → Remove a contact from a project function removeContactFromProject(project_id, contact_id)
    */

router.get('/:id/employees', projectController.getProjectEmployees);
router.post('/:id/employees/:employee_id', projectController.assignEmployeeToProject);
router.delete('/:id/employees/:employee_id', projectController.removeEmployeeFromProject);
router.get('/:id/services', projectController.getProjectServices);
router.post('/:id/services/:service_id', projectController.linkServiceToProject);
router.delete('/:id/services/:service_id', projectController.unlinkServiceFromProject);
router.get('/:id/contacts', projectController.getProjectContacts);
router.post('/:id/contacts/:contact_id', projectController.associateContactWithProject);
router.delete('/:id/contacts/:contact_id', projectController.removeContactFromProject);

/*
Milestones
GET /api/projects/:id/milestones/ → Get all milestones of a project
POST /api/projects/:id/milestones/ → Create a milestone for a project
PUT /api/milestones/:id → Update a milestone
DELETE /api/milestones/:id → Delete a milestone
*/

router.get('/:id/milestones', milestoneController.getMilestonesForProject);
router.post('/:id/milestones', validateMilestone, milestoneController.createMilestone);
router.put('/milestones/:id', milestoneController.updateMilestone);
router.delete('/milestones/:id', milestoneController.deleteMilestone);


module.exports = router;

