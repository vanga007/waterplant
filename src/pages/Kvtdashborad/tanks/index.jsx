import DashboardLayout from '@/components/layout/DashboardLayout'
import Tanks from '@/components/tanks'
import React from 'react'

const index = () => {
  return (
    <DashboardLayout>
      <div>
        <Tanks />
      </div>
    </DashboardLayout>

  )
}

export default index