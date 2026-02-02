import { useState } from 'react'
import {
    Typography,
    Button,
    Paper,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    IconButton,
    Chip,
} from '@mui/material'
import { Add as AddIcon, Close as CloseIcon } from '@mui/icons-material'
import DataTable from '../components/ui/DataTable'
import { useData } from '../context/DataContext'

const Departments = () => {
    const { departments, addItem, updateItem, deleteItem } = useData()
    const [openModal, setOpenModal] = useState(false)
    const [editingId, setEditingId] = useState(null)
    const [formData, setFormData] = useState({
        name: '',
        code: '',
    })

    const columns = [
        { field: 'name', headerName: 'Department Name' },
        { field: 'code', headerName: 'Code' },
        {
            field: 'students',
            headerName: 'Students',
            renderCell: (row) => (
                <Chip
                    label={`${row.students || 0} students`}
                    size="small"
                    className="bg-primary-100 text-primary-700"
                />
            ),
        },
    ]

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleOpenAdd = () => {
        setEditingId(null)
        setFormData({ name: '', code: '' })
        setOpenModal(true)
    }

    const handleEdit = (row) => {
        setEditingId(row.id)
        setFormData({ name: row.name, code: row.code })
        setOpenModal(true)
    }

    const handleClose = () => {
        setOpenModal(false)
        setEditingId(null)
        setFormData({ name: '', code: '' })
    }

    const handleSubmit = () => {
        if (editingId) {
            updateItem('departments', editingId, formData)
        } else {
            addItem('departments', { ...formData, students: 0 })
        }
        handleClose()
    }

    const handleDelete = (row) => {
        if (window.confirm(`Are you sure you want to delete "${row.name}"?`)) {
            deleteItem('departments', row.id)
        }
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <Typography variant="h4" className="font-bold text-gray-800">
                        Departments
                    </Typography>
                    <Typography variant="body2" className="text-gray-500 mt-1">
                        Manage your academic departments
                    </Typography>
                </div>
                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={handleOpenAdd}
                    className="bg-primary-500 hover:bg-primary-600 shadow-lg shadow-primary-500/30"
                >
                    Add Department
                </Button>
            </div>

            {/* Department List */}
            <Paper
                elevation={0}
                className="p-6 rounded-2xl border border-gray-100"
            >
                <Typography variant="h6" className="font-semibold text-gray-800 mb-4">
                    Department List
                </Typography>
                <DataTable
                    columns={columns}
                    data={departments}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
            </Paper>

            {/* Add/Edit Department Modal */}
            <Dialog
                open={openModal}
                onClose={handleClose}
                maxWidth="sm"
                fullWidth
                PaperProps={{
                    className: 'rounded-2xl',
                }}
            >
                <DialogTitle className="flex items-center justify-between border-b border-gray-100 pb-4">
                    <div>
                        <Typography variant="h6" className="font-semibold">
                            {editingId ? 'Edit Department' : 'Add New Department'}
                        </Typography>
                        <Typography variant="body2" className="text-gray-500">
                            {editingId ? 'Update department details' : 'Create a new academic department'}
                        </Typography>
                    </div>
                    <IconButton onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent className="pt-6">
                    <div className="space-y-4">
                        <TextField
                            fullWidth
                            name="name"
                            label="Department Name"
                            placeholder="e.g. MERN Stack"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <TextField
                            fullWidth
                            name="code"
                            label="Department Code"
                            placeholder="e.g. MERN"
                            value={formData.code}
                            onChange={handleChange}
                        />
                    </div>
                </DialogContent>
                <DialogActions className="p-6 pt-0">
                    <Button
                        fullWidth
                        variant="contained"
                        onClick={handleSubmit}
                        className="bg-primary-500 hover:bg-primary-600 py-3"
                    >
                        {editingId ? 'Update Department' : 'Create Department'}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Departments
